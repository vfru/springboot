import { Modal, Rate, Steps, Button, message } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import moment from 'moment'
import TheEditor from '../../../components/TheEditor'
import './Appraise.css'
import { useEffect } from 'react';

export default function AppraiseDetail(props) {
  const { Step } = Steps;
  //步骤条到那个步骤
  const [current, setcurrent] = useState(0)
  const [content, setcontent] = useState("")
  //token中获得用户的权限和区域，控制用户页面的显示
  const { roleId } = JSON.parse(localStorage.getItem('token'))
  // 解构props
  const { setisappraise, isappraise, orderDetail, evaluatesDetail, setisupdate,createAppraise } = props
  // 得到评分
  const [starNumber, setstarNumber] = useState(0)
  const getRate = (star) => {
    // console.log(star)
    setstarNumber(star)
  }
  // console.log(evaluatesDetail)
  // 发送后端
  const topost = () => {
    // console.log(evaluatesDetail)
    // 判断是新建还是修改
    if (createAppraise) {
      axios.post(`/evaluates`, {
        "historyOrderId": orderDetail.id,
        "carId": orderDetail.carId,
        "carname": orderDetail.carname,
        "userId": orderDetail.userId,
        "roleId": roleId,
        "author": orderDetail.username,
        "createTime": moment().format('YYYY-MM-DD'),
        "content": content,
        "appraiseState": 1,
        "star": starNumber
      })
    } else {
      axios.patch(`/evaluates/${evaluatesDetail.id}`, {
        "star": starNumber,
        "content": content,
        "appraiseState": 1,
        "id":evaluatesDetail.id
      })
    }
    // 更新数据
    setisupdate(true)
    // 关闭
    setisappraise(false)

    setcurrent(0)

  }

  const getcontent = (html) => {
    // console.log(html)
    setcontent(html)
  }

  useEffect(() => {
    if (evaluatesDetail !== undefined) {
      // console.log(evaluatesDetail)
      setstarNumber(evaluatesDetail.star)
      setcontent(evaluatesDetail.content)
    } else {
      setcurrent(0)
      setstarNumber(0)
      setcontent("")
    }
  }, [evaluatesDetail])

  // 点击下一步
  const toNext = () => {
    if (current === 0) {
      if (starNumber === 0) {
        message.error('请选择评分')
      } else {
        setcurrent(current + 1)
      }
    } else if (current === 1) {
      if (content === "" || content.trim() === "<p><br></p>" || content.trim() === "<p></p>") {
        message.error('输入内容不能为空')
      }
      else {
        setcurrent(current + 1)
      }
    }
  }


  return (
    <Modal
      open={isappraise}
      title="完成订单"
      cancelText="取消"
      onCancel={() => {
        // 关闭表单
        setisappraise(false)
        // setcontent("")
        // setstarNumber(0)
        // setcurrent(0)
      }}
      footer={true}
      width={current === 0 ? 800 : 1500}
    >
      <Steps current={current}>
        <Step title="评分" description="对租赁的评分" />
        <Step title="感想和意见" description="对租赁的感想和意见" />
        <Step title="提交" description="确认提交" />
      </Steps>
      <div className={current === 0 ? '' : "active"} style={{ marginTop: "20px" }}>
        {/* 评分 */}
        <p  >感谢您使用租车服务，您对本次租车的体验为：</p>
        <Rate onChange={(star) => getRate(star)} value={starNumber} allowHalf={true} />
      </div>
      <div className={current === 1 ? '' : "active"} >
        {/* 富文本输入框 */}
        <TheEditor getcontent={(html) => getcontent(html)} content={content} />
      </div>
      {/* 显示确认 */}
      <div className={current === 2 ? '' : "active"} style={{ marginTop: "20px" }} >
        <div dangerouslySetInnerHTML={{ __html: content }} ></div>
        <Rate style={{ marginTop: "20px" }} value={starNumber} disabled={true} allowHalf={true} />
      </div>
      <div style={{ marginTop: "20px", position: "initial" }} >
        {
          current !== 2 && <Button onClick={() => toNext()} >下一步</Button>
        }&nbsp;
        {
          current !== 0 && <Button onClick={() => setcurrent(current - 1)} >上一步</Button>
        }&nbsp;
        {
          current === 2 && <Button onClick={() => topost()} >提交</Button>
        }&nbsp;
      </div>

    </Modal>

  )
}
