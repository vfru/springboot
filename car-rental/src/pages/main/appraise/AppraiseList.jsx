import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Table, Rate, Button, Modal, Avatar, Comment, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import moment from 'moment'
import AppraiseDetail from './AppraiseDetail';

export default function AppraiseList() {

  //表格的数据
  const [dataSource, setdataSource] = useState([])
  const [carSource, setcarSource] = useState([])
  // evaluates?_expand=car
  //token中获得用户的权限和区域，控制用户页面的显示
  const { name, roleId } = JSON.parse(localStorage.getItem('token'))
  // 查看评论开关
  const [seecomments, setseecomments] = useState(false)
  // 保存选中的评论信息
  const [evaluateDetail, setEvaluateDetail] = useState([])
  // 回复列表
  const [commentsList, setCommentsList] = useState([])
  // 富文本
  const [content, setcontent] = useState("")
  // 设置修改评论的开关
  const [isappraise, setisappraise] = useState(false)
  // 判断是否重新请求数据
  const [isupdate, setisupdate] = useState(false)
  useEffect(() => {
    axios.get(`/evaluates/car`).then(res => {
      // console.log(res.data)
      setdataSource(res.data.data)
    })
    axios.get(`/cars`).then(async res => {
      // console.log(res.data)
      await setcarSource(res.data.data)
    })
  }, [])

  useEffect(()=>{
    if(isupdate){
      axios.get(`/evaluates/car`).then(res => {
        // console.log(res.data)
        setdataSource(res.data.data)
      })
      setisupdate(false)
    }
  },[isupdate])
  //存储 editor 实例
  const [editor, setEditor] = useState(null)
  // 编辑器内容
  const [html, setHtml] = useState('')
  // 工具栏配置
  const toolbarConfig = {
  }
  // 编辑器配置
  const editorConfig = {
    placeholder: '请输入内容...',
  }


  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])


  const columns = [
    {
      title: '汽车名称',
      // dataIndex: 'item',
      // render自定义格式
      render: (item) => {
        return <a href={`/car/detail/${item.carId}`} >{item.carname}</a>
      }
    },
    {
      title: '图片',
      // dataIndex: 'carname',
      // render自定义格式
      render: (item) => {
        return <img style={{ height: "130px", width: "200px" }} src={item.img} alt="图片" />
      }
    },
    {
      title: '评价用户',
      // render自定义格式
      render: (item) => {
        return <div>{item.author}</div>
      }
    },
    {
      title: '评分',
      // dataIndex: 'carname',
      // render自定义格式
      render: (item) => {
        return <Rate allowHalf={true} value={item.star} disabled={true} />
      }
    },
    {
      title: '评价',
      // render自定义格式
      render: (item) => {
        return <div dangerouslySetInnerHTML={{ __html: item.content }} ></div>
      }
    },
    {
      title: '评价时间',
      // render自定义格式
      render: (item) => {
        return <div >{item.createTime}</div>
      }
    },
    {
      title: '操作',
      // render自定义格式
      render: (item) => {
        return <div >
          {
            <Button ghost={true} type='primary'
              onClick={() => {
                setseecomments(true);
                setEvaluateDetail(item)
              }
              } >查看评论</Button>
          }
          &nbsp;
          {
            name === item.author && <Button type='primary'
              onClick={() => {
                setEvaluateDetail(item);
                setisappraise(true)
              }} >修改</Button>
          }
          &nbsp;
          {
            (name === item.author || roleId <= 2) && <Button type='primary' danger onClick={() => toConfirm(item)} >删除</Button>
          }
        </div>
      }
    },
  ];

  //删除前确认
  const toConfirm = (item) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: '你确认要删除？',
      cancelText: '取消',
      okText: '确认',
      //点击确认
      onOk() {
        deleteEvaluate(item)
      }
    });
  }
  const deleteEvaluate = async (item) => {
    await axios.delete(`/evaluates/${item.id}`)
    await axios.get(`/evaluates/car`).then(res => {
      // console.log(res.data)
      setdataSource(res.data.data)
    })
  }


  // 表格渲染数据
  const data = dataSource.map(item =>
  ({
    carname: item.carname,
    // description: ``,
    carId: item.carId,
    content: item.content,
    img: carSource?.filter(data => data.id === item.carId)[0]?.img,
    author: item.author,
    star: item.star,
    createTime: item.createTime,
    roleId: item.roleId,
    key: item.id,
    id: item.id,
  })
  )

  const roleIdName = {
    "1": "经理",
    "2": "销售",
    "3": "客户",
  }


  const getcomments = () => {
    axios.get(`/comments/evaluates/${evaluateDetail?.id}`).then(res => {
      // console.log(res.data)
      setCommentsList(res.data.data)
      
    })
    // console.log(commentsList)
    return commentsList?.map(item =>
      <Comment
        key={item.id}
        author={<h4>{item.author}</h4>}
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt={item.author} />}
        content={<div dangerouslySetInnerHTML={{ __html: item.content }}></div>}
      >
      </Comment>

    )
  }
  // 点击发表评论
  const newComment = async () => {
    if (content === "" || content.trim() === "<p><br></p>" || content.trim() === "<p></p>") {
      message.error('输入内容不能为空')
    } else {
      await axios.post(`/comments`, {
        "author": name,
        "content": content,
        "roleId": 3,
        "datetime": moment().format('YYYY-MM-DD'),
        "evaluatesId": evaluateDetail.id,
      })
      axios.get(`/comments/evaluates/${evaluateDetail.id}`).then(res => {
        // console.log(res.data)
        setCommentsList(res.data.data)
      })
      setcontent("")
      setHtml("")
    }
  }


  return (
    <div>
      <AppraiseDetail setisappraise={setisappraise} isappraise={isappraise} evaluatesDetail={evaluateDetail} setisupdate={setisupdate} />
      <Modal
        open={seecomments}
        title={<div><Button onClick={() => setseecomments(false)} icon={<ArrowLeftOutlined />} /> 评价留言 </div>}
        cancelText="取消"
        onCancel={() => {
          // 关闭表单
          setseecomments(false)
        }}
        footer={true}
        width={1500}
      >
        <Comment
          author={<h4>{roleIdName[evaluateDetail.roleId]}-{evaluateDetail.author}</h4>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt={evaluateDetail.author} />}
          content={<div dangerouslySetInnerHTML={{ __html: evaluateDetail.content }}></div>}
        >
          {
            seecomments && getcomments()
          }
        </Comment>
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: '1px solid #ccc' }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={editor => {
              setHtml(editor.getHtml());
              setcontent(editor.getHtml())
            }}
            mode="default"
            style={{ height: '500px', overflowY: 'hidden' }}
          />
        </div>
        <div style={{ marginTop: '15px' }}>
          {/* {html} */}
        </div>
        <Button onClick={() => newComment()} >发表评论</Button>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
