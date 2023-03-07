import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Descriptions, PageHeader } from 'antd';

export default function RentalDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const [orderData, setOrderData] = useState([])
  //token中获得用户的权限和区域，控制用户页面的显示
  const { roleId } = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    axios.get(`historyOrders?id=${params.id}`).then(res => {
      // console.log(res.data)
      let list = res.data
      setOrderData(list[0])
    })
  }, [params])

  const orderStateList = {
    "0": "待确认",
    "1": "已确认",
    "2": "出借中",
    "3": "已完成",
    "4": "已取消",
    "5": "客户申请取消",
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="订单信息"
        onBack={() => navigate(-1)}
      />
      <Descriptions title={`订单号 ：${orderData.hisid}`} bordered>
        <Descriptions.Item label="客户">{orderData.username}</Descriptions.Item>
        <Descriptions.Item label="租赁车辆">{orderData.carname}</Descriptions.Item>
        <Descriptions.Item label="客户电话">{orderData.phone}</Descriptions.Item>
        <Descriptions.Item label="开始日期">{orderData.startdate}</Descriptions.Item>
        <Descriptions.Item label="结束日期">{orderData.endingdate}</Descriptions.Item>
        <Descriptions.Item label="合计">{orderData.totalDay}天</Descriptions.Item>
        <Descriptions.Item label="保障套餐" span={3} >{orderData.insurancedate}</Descriptions.Item>
        <Descriptions.Item label="套餐价格">￥{orderData.insurancedatePrice}</Descriptions.Item>
        <Descriptions.Item label="合计租金">￥{orderData.totalPrice}</Descriptions.Item>
        <Descriptions.Item label="押金">￥{orderData.deposit}</Descriptions.Item>
        <Descriptions.Item label="订单状态">{orderStateList[orderData.orderState]}</Descriptions.Item>
        <Descriptions.Item label="额外金额" >￥{orderData.extraExpense}</Descriptions.Item>
        <Descriptions.Item label="总计金额" >￥{orderData.totalAllPrice}</Descriptions.Item>
        {roleId !== 3 && <Descriptions.Item label="销售备注" span={3}>
          <Descriptions.Item label=""  ><Badge /></Descriptions.Item>
          {orderData.descriptions}
        </Descriptions.Item>}
        {<Descriptions.Item label="客户备注" span={3} >
          {orderData.clientMessage}
          <Descriptions.Item label=""><Badge /></Descriptions.Item>
        </Descriptions.Item>}
        <Descriptions.Item label="其他" span={3} >
          {orderData.other}
          <Descriptions.Item label=""><Badge /></Descriptions.Item>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
