import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Badge, Descriptions, PageHeader, Button, message} from 'antd';
import {SettingTwoTone} from '@ant-design/icons';
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
    const {roleId} = JSON.parse(localStorage.getItem('token'))
    // 是否打开修改页面
    const [isUpdate, setisUpdate] = useState(false)
    // 更新的车辆详细信息
    const [updateCarDetail, setupdateCarDetail] = useState([])
    //要更新
    const [toUpdate, settoUpdate] = useState(false)
    const id = params.id
    const [adminId, setadminId] = useState()
    useEffect(() => {
        axios.get(`/cardetail/car/${id}`).then(res => {
            //console.log(res.data)
            setcarDetail(res.data.data)
            setcarmessage(res.data.data.cars)
            setadminId(res.data.data.cars.adminId)
            setupdateCarDetail([res.data.data])
        })

        //开始时adminId未定义,会有请求失败
        if (adminId !== undefined) {
            axios.get(`/users/${adminId}`).then(res => {
                // console.log(res.data[0])
                setsellermessage(res.data.data)
            })
        }

    }, [id, adminId])

    // 点击弹出框组件的提交后，将修改的数据设置为前端的值并发送后端
    useEffect(() => {
        if (toUpdate) {
            console.log(updateCarDetail[0])
            setcarDetail(updateCarDetail[0])
            settoUpdate(false)
            axios.patch(`/cardetail/${updateCarDetail[0]?.id}`,
                {
                    "id": updateCarDetail[0].id,
                    "Describe": updateCarDetail[0].describe,
                    "dateOfProduction": updateCarDetail[0].dateOfProduction,
                    "fuelTypes": updateCarDetail[0].fuelTypes,
                    "lhw": updateCarDetail[0].lhw,
                    "oilTank": updateCarDetail[0].oilTank,
                    "seat": updateCarDetail[0].seat
                }
            ).then(
                res => {
                    if (res.data.code === 200) message.success(res.data.msg)
                },
                err => {
                    if (err.data.code === 400) message.error(err.data.msg)
                })
        }
    }, [toUpdate, updateCarDetail, id])

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
            <CarDetailUpdate isUpdate={isUpdate} setisUpdate={setisUpdate} updateCarDetail={updateCarDetail}
                             setupdateCarDetail={setupdateCarDetail} settoUpdate={settoUpdate}/>
            {
                roleId <= 2 && <Button icon={<SettingTwoTone/>} onClick={() => setisUpdate(true)}/>
            }
            <br/>
            <Descriptions style={{border: '1px solid #ccc', zIndex: 100}} bordered={true}>
                <Descriptions.Item label="车辆名称">{carmessage.carname}</Descriptions.Item>
                <Descriptions.Item label="图片" span={2} style={{justifyContent: 'center'}}><img
                    style={{height: "200px", width: "350px", justifyContent: 'center', padding: "10px"}}
                    src={carmessage.img} alt=""/></Descriptions.Item>
                <Descriptions.Item label="负责人">{sellermessage?.name}</Descriptions.Item>
                <Descriptions.Item label="电话">{sellermessage?.phone}</Descriptions.Item>
                <Descriptions.Item label="汽车状态">{carState[carmessage?.state]}</Descriptions.Item>
                <Descriptions.Item label="押金">￥{carmessage?.deposit}</Descriptions.Item>
                <Descriptions.Item
                    label="每日租金">{carState[carmessage?.state] === "优惠中" ? carmessage.price : carmessage.discounts}</Descriptions.Item>
                <Descriptions.Item label="座位">{carDetail?.seat}座</Descriptions.Item>
                <Descriptions.Item label="出厂日期">{carDetail?.dateOfProduction}</Descriptions.Item>
                <Descriptions.Item label="汽油">{carDetail?.fuelTypes}</Descriptions.Item>
                <Descriptions.Item label="油箱大小">{carDetail?.oilTank}</Descriptions.Item>
                <Descriptions.Item label="描述" span={3}>
                    {carDetail?.describe}
                    <Descriptions.Item label=""><Badge/></Descriptions.Item>
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}
