import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Table, Cascader, Button, Modal, DatePicker, Space, Descriptions, Radio, Form, Input } from 'antd'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'
import RevampCar from '../../../components/carList/RevampCar'


function CarList(props) {
  // 保存请求回来的数据
  const [text, settext] = useState("")
  const [list, setlist] = useState([])
  //搜索需要用到的数据
  const [options, setOptions] = useState([])
  // 优惠
  const [isDiscounts, setisDiscounts] = useState(false)
  // 优惠数据ref
  const discountsref = useRef(null)
  // 新增修改列表开关
  const [revampCar, setrevampCar] = useState(false)
  // 新增车辆
  const [newACar, setnewACar] = useState(false)
  // 品牌列表
  const [carbrandList, setcarbrandList] = useState([])
  // 销售列表
  const [salesList, setsalesList] = useState([])
  // 修改车数据的ref
  const carDataref = useRef(null)
  // 租车列表开关
  const [onrentCar, setOnrentCar] = useState(false)
  // 保存选中的汽车的信息
  const [cardetails, setCardetails] = useState([])
  // 选中汽车的每日租金
  const [dayPrice, setdayPrice] = useState(0)
  //token中获得用户的权限和区域，控制用户页面的显示
  const { roleId, name, id, phone } = JSON.parse(localStorage.getItem('token'))
  // 租赁清单单选框中的信息
  const [selectValue, setSelectValue] = useState("A");
  //  出行保障套餐数据列表
  const [insuranceList, setinsuranceList] = useState([])
  // 开始时作为保存默认值，后保存选中保障套餐的所有数据
  const [insurancedate, setinsurancedate] = useState([])
  // 保存开始时间和结束时间
  const [startTendT, setstartTendT] = useState([moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')])
  // 确认列表开关
  const [onMakesure, setonMakesure] = useState(false)
  // 生成订单好
  const [orderId, setOrderId] = useState(``)
  // console.log(props)
  // 分解props,否则在useEffect中报警告。
  const AllPrice = props.gettotalAllPrice

  useEffect(() => {
    axios.get("/cars/carbrand").then(res => {
      // 销售只显示自己负责的车辆
      if (roleId === 2) {
        let newList = res.data.data.filter(item => item.userId === id)
        console.log(newList)
        setlist(newList)
      } else {
        // 管理员和客户显示全部车辆
        setlist(res.data.data)
      }

    })
    // 搜索的需要数据
    axios.get('/carbrands/cars').then(res => {
      setcarbrandList(res.data.data)
      //筛选功能的格式
      setOptions(res.data.data.map(item =>
      ({
        value: item.value,
        label: item.label,
        id: item.id,
        children: item.cars.map(i => (
          {
            value: i.carname,
            label: i.carname,
            id: i.id,
          }
        ))
      })
      ))
    })
    // 请求保障套餐的数据
    axios.get('/insurances').then(res => {
      // console.log(res.data)
      setinsuranceList(res.data.data)
    })
    AllPrice(cardetails.deposit, insurancedate.price)


    //生成订单号
    // 初始化
    if (orderId === ``) {
      let m = moment().format('YYYY-MM-DD');
      let y1 = (m.substr(2, 2))
      let mon1 = (m.substr(5, 2))
      let d1 = (m.substr(8, 2))
      setOrderId(`C${y1}${y1}-${mon1}${d1}${mon1}${d1}-${cardetails.id}${id}`)
    }
    // 选择日期后订单号的变化
    else {
      let y1 = (startTendT[0].substr(2, 2))
      let y2 = (startTendT[1].substr(2, 2))
      let mon1 = (startTendT[0].substr(5, 2))
      let mon2 = (startTendT[1].substr(5, 2))
      let d1 = (startTendT[0].substr(8, 2))
      let d2 = (startTendT[1].substr(8, 2))
      setOrderId(`C${y1}${y2}-${mon1}${d1}${mon2}${d2}-${cardetails.id}${id}`)
    }

  }, [AllPrice, cardetails, insurancedate, startTendT, id, orderId, roleId])

  // 用于修改数据
  useEffect(() => {
    axios.get('/carbrands').then(res => {
      setcarbrandList(res.data.data)
    })
    axios.get('/users/roles/2').then(res => {
      setsalesList(res.data.data)
    })
  }, [])

  const carState = {
    "0": "维修中",
    "1": "待出租",
    "2": "优惠中",
    "3": "出租中",
    "4": "预约中"
  }

  //表格的标题，框架
  const columns = [
    {
      title: '汽车名称',
      dataIndex: 'carname',
      // render自定义格式
      render: (carname, item) => {
        return <a href={`/car/detail/${item.id}`} >{carname}</a>
      }
    },
    {
      title: '汽车图片',
      dataIndex: 'img',
      // render自定义格式
      render: (img) => {
        return <img style={{ height: "130px", width: "200px" }} src={img} alt="图片" />
      }
    },
    {

      title: '汽车状态',
      dataIndex: 'state',
      render: (state) => {
        if (state === 0) { return <div style={{ color: "grey" }} >{carState[state]}</div> }
        if (state === 1) { return <div style={{ color: "black" }}>{carState[state]}</div> }
        if (state === 2) { return <div style={{ color: "green" }}>{carState[state]}</div> }
        if (state === 3) { return <div style={{ color: 'red' }} >{carState[state]}</div> }
        if (state === 4) { return <div style={{ color: "skyblue" }} >{carState[state]}</div> }
      }

    },
    {

      title: '每日租金',
      render: (item) => {
        if (item.state === 2) {
          return <div style={{ color: "green" }}>{`￥${item.discounts}`}</div>
        } else {
          return <div style={{ color: "black" }}>{`￥${item.price}`}</div>
        }
      }

    },
    {
      title: '押金',
      dataIndex: 'deposit',
      render: (deposit) => {
        return (`￥${deposit}`)
      }
    },
    {
      title: '操作',
      render: (item) => {
        // console.log(item)
        if (roleId === 3 && (carState[item.state] === "待出租" || carState[item.state] === "优惠中")) {
          return <div><Button type='primary' onClick={() => rentCar(item)} >租车</Button></div>
        } else if (roleId !== 3) {
          return <div>
            {
              carState[item.state] === "维修中" && <Button type='primary' onClick={() => changeCarState(1, item)} >上架</Button>
            }&nbsp;&nbsp;
            {
              roleId === 1 && <Button type='primary'
                onClick={() => {
                  setCardetails(item);
                  setrevampCar(true);
                  // 设置表单的值
                  setTimeout(() => {
                    carDataref.current.setFieldsValue(item)
                  }, 0)
                }} >修改</Button>
            }&nbsp;&nbsp;
            {
              (carState[item.state] === "待出租" || carState[item.state] === "优惠中") && <Button type='primary' danger onClick={() => changeCarState(0, item)} >下架</Button>
            }&nbsp;&nbsp;
            {
              // 将优惠表单的开关打开，将选中的汽车设置在Cardetails方便之后的使用
              carState[item.state] === "待出租" && roleId === 1 && <Button onClick={() => {
                setCardetails(item);
                setisDiscounts(true);
                setTimeout(() => {
                  discountsref.current.setFieldsValue(item)
                }, 0)
              }} >优惠</Button>
            }
          </div>
        }

      }
    }
  ]
  // 改变汽车的状态
  const changeCarState = async(num, item) => {
    // 缓存数据
    setlist(list.map(i => {
      if (i.id === item.id) {
        i.state = num
        return i
      } else {
        return i
      }
    }))
    // 后端
   await axios.patch(`/cars/${item.id}`, {
      "state": num,
    })
  }



  // 租车
  const rentCar = async (item) => {
    // console.log(item)
    // 将租车页面打开
    setOnrentCar(true)
    // 保存选中的车的信息
    setCardetails(item)
    // 保存汽车的每日租金

    if (carState[item.state] === "待出租") {
      setdayPrice(item.price)
      await props.gettotalPrice(item.price)
      // console.log(item.deposit,insurancedate.price)
    }
    if (carState[item.state] === "优惠中") {
      setdayPrice(item.discounts)
      await props.gettotalPrice(item.discounts)
    }

    // 设定出行保障套餐默认值
    setinsurancedate(insuranceList[0])
    // console.log(insurancedate)
  }

  // 输入框选择数据发生变化时调用，selectedOptions可以得到选择过得所有数据
  const onChange = (value, selectedOptions) => {
    // console.log(value,selectedOptions);
    if (value !== undefined) {
      settext(selectedOptions[1].value)
    }
  };

  const filter = (inputValue, path) => {
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  // 监听搜索，返回输入的值，得到输入值设置settext
  const onSearch = (value) => {
    settext(value)
  }
  // useMemo,筛选每次搜索框输入的内容，根据输入的内容筛选出新的数列
  const dataSource = useMemo(() =>
    list.filter(item => item.carname.toUpperCase().includes(text.toUpperCase())), [list, text]
  )
  // 消除输入框时调用，清空settext，使dataSource恢复原来的数列
  const onClear = () => {
    settext("")
  }
  // 计算事件，使用了redux
  const getDayCount = async (date, dateString) => {
    console.log(date, dateString)
    //第一个时间
    if (date[0] !== null && date[1] !== null) {
      let m1 = date[0];
      //获取需要对比的时间
      let m2 = date[1];
      setstartTendT(dateString)
      //计算相差多少天 day可以是second minute
      let totalDay = m2.diff(m1, 'day') + 1
      await props.gettotalDay(totalDay)
      await props.gettotalPrice(dayPrice)
      // console.log(insurancedate.price)
    }

  }
  // 改变日期
  const onSelectChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target)
    setSelectValue(e.target.value);
    setinsurancedate(e.target)
    // console.log(insurancedate)
  };

  // 确认订单
  const makeSureOrder = async () => {
    setOnrentCar(false)
    setonMakesure(true)
    // 汽车状态显示为预约中
    // console.log(list)
    setlist(list.map(item => {
      if (item.id === cardetails.id) {
        item.state = 4
        return item
      } else {
        return item
      }
    }))

    // console.log(orderId)
    // 创建订单发送后台

   await axios.post(`/historyOrders`,
      {
        "hisid": orderId,
        "carId": cardetails.id,
        "userId": id,
        "carname": cardetails.carname,
        "username": name,
        "orderState": 0,
        "startdate": startTendT[0],
        "endingdate": startTendT[1],
        "totalDay": props.totalDay,
        "totalPrice": props.totalPrice,
        "insurancedate": insurancedate.details,
        "insurancedatePrice": insurancedate.price,
        "totalAllPrice": props.totalAllPrice,
        "deposit": cardetails.deposit,
        "descriptions": "",
        "clientMessage": "",
        "other": "",
        "phone": phone,
        "extraExpense": 0
      })

    // 要先执行完才进入下一步不然切换租赁状态页面Jason-sever会显示端口号被占用
    await axios.patch(`/cars/${cardetails.id}`, {
      "state": 4,
    })
  }


  
  // 优惠表单的确认
  const makesureDiscounts = async() => {
    // 关闭表单
    setisDiscounts(false)
    // 获得表单数据
    discountsref.current.validateFields().then(async value => {
      console.log(value)
      setlist(list.map(i => {
        if (i.id === cardetails.id) {
          let newitem = i
          newitem.discounts = value.discounts
          newitem.state = 2
          return newitem
        } else {
          return i
        }
      }))
      // 发送后端修改数据
     await axios.patch(`/cars/${cardetails.id}`, {
        ...value,
        "state": 2,
      })
    })
  }

  // 新增汽车后重新请求车辆数据
  const [toUpdate, settoUpdate] = useState(false)
  useEffect(() => {
    if (toUpdate) {
      axios.get("/cars/carbrand").then(res => {
        setlist(res.data.data)
      })
      settoUpdate(false)
    }
  }, [toUpdate])

  return (
    <div>
      {/* 优惠 */}
      <Modal
        open={isDiscounts}
        title="汽车优惠"
        cancelText="取消"
        onCancel={() => {
          // 关闭表单
          setisDiscounts(false)
        }}
        onOk={makesureDiscounts}
      >
        <Form
          ref={discountsref}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="carname"
            label="车名"
          >
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="discounts"
            label="优惠价格"
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
        </Form>
      </Modal>
      {/* 添加按钮 */}
      {roleId === 1 && <Button type='primary' onClick={() => { setrevampCar(true); setnewACar(true) }} >新增车辆</Button>}
      {/* 修改添加功能 */}
      {revampCar && <RevampCar settoUpdate={settoUpdate} newACar={newACar} setnewACar={setnewACar} setlist={setlist} setrevampCar={setrevampCar} cardetails={cardetails} ref={carDataref} salesList={salesList} carbrandList={carbrandList} />}
      {/* 搜索功能 */}
      <Cascader
        options={options}
        onChange={onChange}
        // 清除输入框内容
        onClear={onClear}
        placeholder="请输入/选择"
        // 显示搜索框
        showSearch={{ filter }}
        // 监听搜索，返回输入的值
        onSearch={(value) => onSearch(value)}

      />
      <Table dataSource={dataSource} columns={columns}
        pagination={{
          //一页3个
          pageSize: 3
        }}
        //数据中没有key属性，需要key值，设置为id
        rowKey={item => item.id}
      />
      {/* 租车页面 */}
      <Modal
        // 不显示底部确认取消按钮
        open={onrentCar}
        title="汽车租赁"
        cancelText="取消"
        onOk={() => makeSureOrder()}
        onCancel={() => {
          setOnrentCar(false)
          //点击后清除输入框的内容
        }}
        width={1100}
      >
        <div>
          <Descriptions title="租赁清单" bordered column={3}>
            <Descriptions.Item label="客户姓名">{name}</Descriptions.Item>
            <Descriptions.Item label="汽车名称">{cardetails.carname}</Descriptions.Item>
            <Descriptions.Item label="汽车图片" span={1}><img style={{ height: "150px", width: "240px" }} src={cardetails.img} alt="图片" /></Descriptions.Item>
            <Descriptions.Item label="租赁时间" span={2}>
              <Space direction="vertical" size={12}>
                <DatePicker.RangePicker
                  allowClear={false}
                  defaultValue={[moment(), moment()]}
                  allowEmpty={true}
                  style={{
                    width: '100%',
                  }}
                  // 选择日期以后
                  onChange={(date, dateString) => getDayCount(date, dateString)}
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="共计天数">{props.totalDay}天</Descriptions.Item>
            <Descriptions.Item label="押金"  >{cardetails.deposit}</Descriptions.Item>
            <Descriptions.Item label="每日租金">{dayPrice}</Descriptions.Item>
            <Descriptions.Item label="总计租金">￥{props.totalPrice}</Descriptions.Item>
            <Descriptions.Item label="出行保障套餐" span={1} >
              <Radio.Group onChange={onSelectChange} value={selectValue}>
                <div>
                {
                  insuranceList.map(
                    item => <Radio key={item.id} value={item.value} details={item.details} price={item.price} id={item.id} >{item.label}</Radio>
                  )
                }
                </div>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="套餐内容">{insurancedate.details}</Descriptions.Item>
            <Descriptions.Item label="套餐金额">￥{insurancedate.price}</Descriptions.Item>
            <Descriptions.Item label="总计金额">￥{props.totalAllPrice}</Descriptions.Item>
          </Descriptions>
        </div>
      </Modal>
      {/* 确认清单，生成订单号 */}
      <Modal
        // 不显示底部确认取消按钮
        footer={null}
        open={onMakesure}
        title="确认成功"
        cancelText="取消"
        onCancel={() => {
          setonMakesure(false)
          //点击后清除输入框的内容
        }}
        width={800}
      >
        <Descriptions title={`订单号${orderId}`}>
          <Descriptions.Item label="客户姓名">{name}</Descriptions.Item>
          <Descriptions.Item label="汽车名称">{cardetails.carname}</Descriptions.Item>
          <Descriptions.Item label="租赁开始时间">{startTendT[0]}</Descriptions.Item>
          <Descriptions.Item label="租赁结束时间">{startTendT[1]}</Descriptions.Item>
          <Descriptions.Item label="合计天数">{props.totalDay}</Descriptions.Item>
          <Descriptions.Item label="总计租金">￥{props.totalPrice}</Descriptions.Item>
          <Descriptions.Item label="押金">￥{cardetails.deposit}</Descriptions.Item>
          <Descriptions.Item label="总计">￥{props.totalAllPrice}</Descriptions.Item>
        </Descriptions>
        <h2>请保持电话的畅通,稍后将有客服联系您</h2>
      </Modal>
    </div>
  )
}

// redux
// 数据
const mapStateToprops = ({ TotalPriceReducer: { totalDay, totalPrice, totalAllPrice } }) => {
  //state中有redux中
  // console.log(totalDay,totalPrice)
  return {
    totalDay,
    totalPrice,
    totalAllPrice,
  }
}

// 方法
const mapDispatchToprops = {
  gettotalDay(totalDay) {
    return {
      type: 'gettotalDay',
      totalDay: totalDay,
    }
  },
  gettotalPrice(dayPrice) {
    return {
      type: 'gettotalPrice',
      dayPrice: dayPrice,
    }
  },
  gettotalAllPrice(insurancePrice, depositPrice) {
    return {
      type: 'gettotalAllPrice',
      insurancePrice,
      depositPrice
    }
  }
}

export default connect(
  mapStateToprops,
  mapDispatchToprops
)(CarList)
