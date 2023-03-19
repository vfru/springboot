import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Badge, Descriptions, PageHeader, Button } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import CarDetailUpdate from '../../../components/carList/CarDetailUpdate';

export default function CarDetail() {
  const params = useParams()
  const navigate = useNavigate()
  // 车辆详细信息
  const [carDetail, setcarDetail] = useState([])
  // 车辆一般信息
  const [carmessage, setcarmessage] = useState([])
  // 销售信息
  const [sellermessage, setsellermessage] = useState([])
  //token中获得用户的权限和区域，控制用户页面的显示
  const { roleId } = JSON.parse(localStorage.getItem('token'))
  // 是否打开修改页面
  const [isUpdate, setisUpdate] = useState(false)
  // 更新的车辆详细信息
  const [updateCarDetail, setupdateCarDetail] = useState([])
  //要更新
  const [toUpdate, settoUpdate] = useState(false)
  const id = params.id
  const userId = carmessage.userId
  useEffect(() => {
    axios.get(`/carDetail/car/${id}`).then(res => {
      setcarDetail(res.data[0])
      setcarmessage(res.data[0].car)
      setupdateCarDetail(res.data)
    })
    axios.get(`/users/${userId}`).then(res => {
      // console.log(res.data[0])
      setsellermessage(res.data[0])
    })

  }, [id, userId])

  // 点击弹出框组件的提交后，将修改的数据设置为前端的值并发送后端
  useEffect(() => {
    if (toUpdate) {
      setcarDetail(updateCarDetail[0])
      settoUpdate(false)
      console.log(updateCarDetail)
      axios.patch(`/carDetail/${updateCarDetail[0]?.id}`,
        {...updateCarDetail[0]}
      )
    }
  }, [toUpdate,updateCarDetail,id])

  const carState = {
    "0": "维修中",
    "1": "待出租",
    "2": "优惠中",
    "3": "出租中",
    "4": "预约中"
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title={<div>车辆详细信息 </div>}
        onBack={() => navigate(-1)}
      ></PageHeader>
      {/*修改车辆详细信息 */}
      <CarDetailUpdate isUpdate={isUpdate} setisUpdate={setisUpdate} updateCarDetail={updateCarDetail} setupdateCarDetail={setupdateCarDetail} settoUpdate={settoUpdate}/>
      {
        roleId <= 2 && <Button icon={<SettingTwoTone />} onClick={() => setisUpdate(true)} />
      }
      <br />
      <Descriptions style={{ border: '1px solid #ccc', zIndex: 100 }} bordered={true}   >
        <Descriptions.Item label="车辆名称">{carmessage.carname}</Descriptions.Item>
        <Descriptions.Item label="图片" span={2} style={{ justifyContent: 'center' }} ><img style={{ height: "200px", width: "350px", justifyContent: 'center', padding: "10px" }} src={carmessage.img} alt="" /></Descriptions.Item>
        <Descriptions.Item label="负责人">{sellermessage?.name}</Descriptions.Item>
        <Descriptions.Item label="电话" >{sellermessage?.phone}</Descriptions.Item>
        <Descriptions.Item label="汽车状态">{carState[carmessage?.state]}</Descriptions.Item>
        <Descriptions.Item label="押金">￥{carmessage?.deposit}</Descriptions.Item>
        <Descriptions.Item label="每日租金">{carState[carmessage?.state] === "优惠中" ? carmessage.price : carmessage.discounts}</Descriptions.Item>
        <Descriptions.Item label="座位" >{carDetail?.seat}座</Descriptions.Item>
        <Descriptions.Item label="出厂日期" >{carDetail?.dateOfProduction}</Descriptions.Item>
        <Descriptions.Item label="汽油" >{carDetail?.fuelTypes}</Descriptions.Item>
        <Descriptions.Item label="油箱大小" >{carDetail?.oilTank}</Descriptions.Item>
        <Descriptions.Item label="描述" span={3} >
          {carDetail?.Describe}
          <Descriptions.Item label=""><Badge /></Descriptions.Item>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
