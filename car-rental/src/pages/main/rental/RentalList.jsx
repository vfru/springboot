import React, { useState, useEffect, useRef } from 'react'
import {Table, Button, Modal, Input, Form, message} from 'antd'
import axios from 'axios'
import AppraiseDetail from '../appraise/AppraiseDetail'

export default function RentalList() {
  const { TextArea } = Input;
  //token中获得用户的权限和区域，控制用户页面的显示
  const { roleId, name, id } = JSON.parse(localStorage.getItem('token'))
  //表格的数据
  const [dataSource, setdataSource] = useState([])
  // 完成页面表单的开关
  const [iscompleteOrder, setiscompleteOrder] = useState(false)
  // 客户取消订单页面开关
  const [isClientCancel, setisClientCancel] = useState(false)
  // 销售管理取消订单页面开关
  const [isSellerCancel, setisSellerCancel] = useState(false)
  // 订单ref
  const orderRef = useRef(null)
  // 保存选中订单的数据
  const [orderDetail, setOrderDetail] = useState([])
  // 评价页面开关
  const [isappraise, setisappraise] = useState(false)
  // 保存所有订单评价
  const [evaluates, setevaluates] = useState([])
  // 选中订单评价
  const [evaluatesDetail, setevaluatesDetail] = useState([])

  useEffect(() => {
    axios.get(`/historyorders/car/evaluate`).then(res => {
      //不同权限显示不同的数据 
      if (roleId === 3) {
        let clientList = res.data.data.filter(item => item.username === name)
        setdataSource(clientList)
      } else if (roleId === 2) {
        let sellerList = res.data.data.filter(item => item.car.userId === id)
        setdataSource(sellerList)
      } else {
        setdataSource(res.data.data)
      }
      axios.get(`/evaluates`).then(res => {
        setevaluates(res.data.data)
      })
    })
  }, [roleId, name, id])
  // console.log(dataSource)
  const orderStateList = {
    "0": "待确认",
    "1": "已确认",
    "2": "出借中",
    "3": "已完成",
    "4": "已取消",
    "5": "客户申请取消",
  }

  //表格的标题，框架
  const columns = [
    {
      title: '订单号',
      dataIndex: 'hisid',
      // render自定义格式
      render: (hisid, item) => {
        return <a href={`/rental/detail/${item.id}`} >{hisid}</a>
      }
    },
    {
      title: '客户',
      dataIndex: 'username',
      // render自定义格式
      render: (username) => {
        return <div>{username}</div>
      }
    },
    {
      title: '车辆',
      dataIndex: 'cars',
      // render自定义格式
      render: (cars) => {
        return <div>{cars.carname}</div>
      }
    },
    {
      title: '开始日期',
      dataIndex: 'startdate',
      // render自定义格式
      render: (startdate) => {
        return <div>{startdate}</div>
      }
    },
    {
      title: '结束日期',
      dataIndex: 'endingdate',
      // render自定义格式
      render: (endingdate) => {
        return <div>{endingdate}</div>
      }
    },
    {
      title: '订单状态',
      dataIndex: 'orderState',
      // render自定义格式
      render: (orderState) => {
        return <div>{orderStateList[orderState]}</div>
      }
    },
    {
      title: '操作',
      // render自定义格式
      render: (item) => {
        return <div>
          {
            <Button type="primary" ghost href={`/rental/detail/${item.id}`} >查看订单</Button>
          }&nbsp;
          {
            orderStateList[item.orderState] === "待确认" && roleId !== 3 && <Button type='primary' onClick={() => onSureOrder(item)} >确认订单</Button>
          }&nbsp;
          {
            orderStateList[item.orderState] === "已确认" && roleId !== 3 && <Button type='primary' onClick={() => pickupCar(item)} >客户提车</Button>
          }
          {
            (orderStateList[item.orderState] === "待确认" || orderStateList[item.orderState] === "客户申请取消" || orderStateList[item.orderState] === "已确认") && roleId !== 3 && <Button danger type='primary'
              onClick={() => {
                setOrderDetail(item);
                setisSellerCancel(true)
              }} >取消订单</Button>
          }
          {
            orderStateList[item.orderState] === "出借中" && roleId !== 3 && <Button type='primary'
              onClick={() => {
                setiscompleteOrder(true);
                setOrderDetail(item);
                // 设置表单的值
                setTimeout(() => {
                  orderRef.current.setFieldsValue(item)
                }, 0)
              }} >完成订单</Button>
          }
          {
            orderStateList[item.orderState] === "待确认" && roleId === 3 && <Button danger type='primary' onClick={() => { setisClientCancel(true); setOrderDetail(item) }} >取消</Button>
          }
          {/* 出现错误是由于之前写的data.id，更正为data.historyOrderId*/}
          {
            evaluates?.filter(data => data.historyOrderId === item.id)[0] === undefined && orderStateList[item.orderState] === "已完成" && roleId === 3 && <Button type='primary'
              onClick={() => { 
                evaluatesToOrder(item); 
                setcreateAppraise(true);
                // console.log(evaluates?.filter(data => data.id === item.id)[0])
               }} >评价</Button>
          }
          {
            evaluates?.filter(data => data.historyOrderId === item.id)[0] !== undefined && orderStateList[item.orderState] === "已完成" && roleId === 3 && <Button type='primary'
              onClick={() => {
                evaluatesToOrder(item)
                setcreateAppraise(false)
                // console.log(evaluates?.filter(data => data.id === item.id)[0])
              }} >修改评价</Button>
          }
        </div>
      }
    }
  ]
  // 判断是否新建
  const [createAppraise, setcreateAppraise] = useState(false)
  // 已完成后点击评价或修改评价
  const evaluatesToOrder = (item) => {
    // 打开表单
    setisappraise(true);
    setOrderDetail(item);
    if (!createAppraise) {
      let tEvaluates = evaluates?.filter(data => data.historyOrderId === item.id)[0]
      //console.log(tEvaluates)
      setevaluatesDetail(tEvaluates)
    }
  }
  // 判断是否重新请求数据
  const [isupdate, setisupdate] = useState(false)
  useEffect(() => {

    setTimeout(()=>{
      if (isupdate) {
        axios.get(`/historyorders/car/evaluate`).then(res => {
          //不同权限显示不同的数据
          if (roleId === 3) {
            let clientList = res.data.data.filter(item => item.username === name)
            setdataSource(clientList)
          } else if (roleId === 2) {
            let sellerList = res.data.data.filter(item => item.car.userId === id)
            setdataSource(sellerList)
          } else {
            setdataSource(res.data.data)
          }
          axios.get(`/evaluates`).then(res => {
            setevaluates(res.data.data)
          })
        })
        setisupdate(false)
        setcreateAppraise(false)
      }
    },500)


  }, [roleId, name, id, isupdate])



  // 前端数据修改代码复用
  const dataSourceChange = (item, state) => {
    // 前端
    setdataSource(dataSource.map(data => {
      if (data.id === item.id) {
        let newitem = data
        newitem.orderState = state
        return newitem
      } else {
        return data
      }
    }))
  }

  // 管理员或销售取消订单
  const sellerCancel = async () => {
    // 得到表单数据
    await orderRef.current.validateFields().then(value => {
      // console.log(value)
      // 前端
      dataSourceChange(orderDetail, 4)
      // 后端
      axios.patch(`/historyorders/${orderDetail.id}`, {
        "id":orderDetail.id,
        "orderState": 4,
        ...value,
      }).then(res=>{
       if (res.data.code===200) message.success("取消成功")
      })
    })
    // 将汽车状态改为待出租
    await axios.patch(`/cars/${orderDetail.carId}`, {
      "id":orderDetail.carId,
      "state": 1,
    })
    // 关闭表单
    await setisSellerCancel(false)
  }

  // 完成订单功能
  const completeOrder = async () => {
    // 得到表单数据
    await orderRef.current.validateFields().then(value => {
      // console.log(value)
      // 前端
      dataSourceChange(orderDetail, 3)
      // 后端
      axios.patch(`/historyorders/${orderDetail.id}`, {
        "id":orderDetail.id,
        "orderState": 3,
        ...value,
      }).then(res=>{
        if (res.data.code===200) message.success("订单已完成")
      })
    })
    // 将汽车状态改为待出租
    await axios.patch(`/cars/${orderDetail.carId}`, {
      "id":orderDetail.carId,
      "state": 1,
    })


    // 关闭表单
    await setiscompleteOrder(false)

  }

  // 客户提车
  const pickupCar = async (item) => {
    // 前端
    await dataSourceChange(item, 2)
    // 发送后端
    await axios.patch(`/historyorders/${item.id}`, {
      "id":item.id,
      "orderState": 2,
    })
    // 将汽车状态改为出租中
    await axios.patch(`/cars/${item.carId}`, {
      "id":item.carId,
      "state": 3,
    })
  }

  // 客户取消订单
  const clientCancel = async () => {
    // 前端
    await dataSourceChange(orderDetail, 5)
    // 发送后端
    await orderRef.current.validateFields().then(value => {
      // console.log(value)
      axios.patch(`/historyorders/${orderDetail.id}`, {
        "orderState": 5,
        "clientMessage": value.clientMessage,
        "id":orderDetail.id
      }).then(res=>{
        if (res.data.code===200) message.success("已申请取消,审核中请稍后")
      })
    })
    await setisClientCancel(false)
  }
  // 确认订单
  const onSureOrder = async (item) => {
    // 前段
    dataSourceChange(item, 1)
    // console.log(item)
    // 后端数据
    await axios.patch(`/historyorders/${item.id}`, {
      "id":item.id,
      "orderState": 1,
    }).then(res=>{
      if (res.data.code===200) message.success("订单已确认")
    })
  }

  return (
    <div>
      {/* 评价功能 */}
      <AppraiseDetail createAppraise={createAppraise} setisupdate={setisupdate} setisappraise={setisappraise} isappraise={isappraise} orderDetail={orderDetail} evaluatesDetail={evaluatesDetail} />
      {/* 完成订单功能 */}
      <Modal
        open={iscompleteOrder}
        title="完成订单"
        cancelText="取消"
        onCancel={() => {
          // 关闭表单
          setiscompleteOrder(false)
        }}
        onOk={completeOrder}
      >
        <Form
          ref={orderRef}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="hisid"
            label="订单号"
          >
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="deposit"
            label="押金"
          >
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="insurancedatePrice"
            label="套餐金额"
          >
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="totalPrice"
            label="租金合计"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="extraExpense"
            label="额外费用"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="totalAllPrice"
            label="金额合计"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="other"
            label="问题"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <TextArea rows={4} placeholder="客户在租赁期间的问题" maxLength={30} />
          </Form.Item>
          <Form.Item
            name="descriptions"
            label="备注"

          >
            <TextArea rows={4} placeholder="备注" maxLength={30} />
          </Form.Item>

        </Form>
      </Modal>
      {/* 客户取消功能 */}
      <Modal
        open={isClientCancel}
        title="取消订单"
        cancelText="取消"
        onCancel={() => {
          // 关闭表单
          setisClientCancel(false)
        }}
        onOk={clientCancel}
      >
        <Form
          ref={orderRef}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="clientMessage"
            label="原因"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <TextArea rows={4} placeholder="备注" maxLength={30} />
          </Form.Item>
        </Form>
      </Modal>
      {/* 销售管理取消功能 */}
      <Modal
        open={isSellerCancel}
        title="取消订单"
        cancelText="取消"
        onCancel={() => {
          // 关闭表单
          setisSellerCancel(false)
        }}
        onOk={sellerCancel}
      >
        <Form
          ref={orderRef}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="descriptions"
            label="原因"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <TextArea rows={2} placeholder="原因" maxLength={40} />
          </Form.Item>
          <Form.Item
            name="other"
            label="备注"
          >
            <TextArea rows={2} placeholder="备注" maxLength={40} />
          </Form.Item>
        </Form>
      </Modal>
      <Table dataSource={dataSource} columns={columns}
        pagination={{
          //一页3个
          pageSize: 8
        }}
        //数据中没有key属性，需要key值，设置为id
        rowKey={item => item.id}
      />
    </div>
  )
}
