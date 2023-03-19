import React, { forwardRef, useState } from 'react'
import { Modal, Form, Input, Select, } from 'antd'
import Upload from './Upload'   
import axios from 'axios';
const { Option } = Select;
const RevampCar = forwardRef((props, ref) => {
  // 控制修改列表开关
  // console.log(props)
  const { setrevampCar, salesList, carbrandList, cardetails, setlist, newACar, setnewACar,settoUpdate } = props

  const [imgurl, setimgurl] = useState("")


  const carStateList = [
    {
      "id": 0,
      "value": "维修中",
      "label": "维修中"
    },
    {
      "id": 1,
      "value": "待出租",
      "label": "待出租"
    },
    {
      "id": 2,
      "value": "优惠中",
      "label": "优惠中"
    },
    {
      "id": 3,
      "value": "出租中",
      "label": "出租中"
    },
    {
      "id": 4,
      "value": "预约中",
      "label": "预约中"
    },
  ]
  const makesureok = async () => {
    if (newACar && imgurl === "") {
      alert("请上传图片")
      return null
    }
    await ref.current.validateFields().then(value => {
      // console.log(value)
      setnewACar(false)
      //关闭弹出框
      setrevampCar(false)
      // 修改和新增的判断
      if (newACar) {
        // 后端
        axios.post(`/cars`, {
          ...value,
          "discounts": 0,
          "img": imgurl
        }).then(res => {
          // console.log(res.data)
          // 创建车辆详细信息的默认值
          axios.post(`/carDetail`, {
            "carId": res.data.id,
            "seat": 5,
            "Describe": "好",
            "dateOfProduction": "2022-1-1",
            "lhw": "4526/1728/1427(mm)",
            "fuelTypes": "97",
            "oilTank": "62/8(L)"
          })
        })
        // 前端
        axios.get("/cars/carbrand").then(res => {
          // console.log(res.data)
          setlist(res.data)
        })
      }
      else {
        if (imgurl !== "") {
          axios.patch(`/cars/${cardetails.id}`, {
            ...value,
            "img": imgurl
          })
        } else {
          axios.patch(`/cars/${cardetails.id}`, {
            ...value,
          })
        }
        // 前端
        axios.get("/cars/carbrand").then(res => {
          // console.log(res.data)
          setlist(res.data)
        })
      }
    })
    // 让carList更新数据
    settoUpdate(true)
  }

  const getbase64 = (url) => {
    // console.log(url)
    setimgurl(url)
  }

  return (
    <div>
      <Modal
        open={true}
        title={newACar === true ? "汽车新增" : "汽车修改"}
        cancelText="取消"
        onCancel={() => {
          setrevampCar(false)
          setnewACar(false)
          //点击后清除输入框的内容
        }}
        onOk={makesureok}
      >
        <Form
          ref={ref}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="carname"
            label="车名"
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
            name="carbrandId"
            label="品牌"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Select >
              {
                carbrandList.map(item => <Option key={item.id} value={item.id} >{item.label}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="deposit"
            label="押金"
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
            name="price"
            label="每日租金"
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
            name="state"
            label="汽车状态"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Select >
              {
                carStateList.map(item => <Option key={item.id} value={item.id} >{item.value}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="userId"
            label="负责人"
            rules={[
              {
                //必填项
                required: true,
                message: '必填',
              },
            ]}
          >
            <Select >
              {
                salesList.map(item => <Option key={item.id} value={item.id} >{item.name}</Option>)
              }
            </Select>
          </Form.Item>
          <Upload getbase64={(url) => getbase64(url)} />
        </Form>
      </Modal>
    </div>
  )
})

export default RevampCar
