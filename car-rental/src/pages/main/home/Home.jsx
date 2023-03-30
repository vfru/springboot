import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Card, Col, Row, List } from 'antd';
import CarSwiper from '../../../components/home/CarSwiper'
import *as echarts from 'echarts'
import _ from 'lodash'
import axios from 'axios'



export default function Home() {
  // 优惠的列表
  const [depositCarList, setdepositCarList] = useState([])
  // 能出租的列表
  const [rentCarList, setrentCarList] = useState([])

  useEffect(() => {
    axios.get(`cars/state/2`).then(res => {
      setdepositCarList(res.data.data)
    })
    axios.get(`cars/state/1`).then(res => {
      setrentCarList(res.data.data)
    })
  }, [])


  // 柱状图
  const barRef = useRef()
  useEffect(() => {
    axios.get(`/historyorders/orderstate/3`).then(res => {
      //console.log(_.groupBy(res.data, item => item.carname))
      //console.log(res.data.data)
      renderBarView(_.groupBy(res.data.data, item => item.carname))
    })
    return () => {
      window.onresize = null
    }
  }, [])

  const renderBarView = (obj) => {
    var myChart = echarts.init(barRef.current);

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '车辆受欢迎程度'
      },
      tooltip: {},
      legend: {
        data: ['租赁次数']
      },
      xAxis: {
        data: Object.keys(obj),
        axisLabel: {
          rotate: "0",
          interval: 0
        }
      },
      yAxis: {
        minInterval: 1
      },
      series: [
        {
          name: '租赁次数',
          type: 'bar',
          data: Object.values(obj).map(item => item.length)
        }
      ]
    };

    // 改变窗口大小时
    myChart.setOption(option);
    window.onresize = () => {
      myChart.resize()
    }
  }


  return (
    <div>
      {/* 网格卡片 */}
      <div className="site-card-wrapper"
           style={
        {
             margin: "50px",

        }} >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="优惠车辆" bordered={true}>
              <List
                size="small"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                // bordered
                dataSource={depositCarList}
                renderItem={(item) => <List.Item><a href={`/car/detail/${item.id}`}>{item.carname}</a></List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="可租车辆" bordered={true}>
              <List
                size="small"
                dataSource={rentCarList}
                renderItem={(item) => <List.Item><a href={`/car/detail/${item.id}`} >{item.carname}</a></List.Item>}
              />
            </Card>
          </Col>
          <Col  span={8}>
            {/* 轮播 */}
              <CarSwiper />
          </Col>
        </Row>
      </div>
      {/* 柱状图组件 */}
      <div ref={barRef} style={{ height: "400px", margin: "50px", width: '80%' }}></div>
    </div>
  )
}

