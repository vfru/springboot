import React, {useEffect, useState} from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import { useLocation, useNavigate,  } from 'react-router-dom'
import axios from "axios";
const { Header } = Layout;


export default function TopHeader() {

  const location = useLocation()
  const headerList = {
    '/home':"首页",
    '/user/list':"用户管理/用户列表",
    '/car/list':"汽车管理/汽车列表",
    '/rental/list':"汽车租赁/租赁状态",
    '/appraise/list':"评价管理/评价列表",
  }
  const navigate = useNavigate()
  const { roleId, name } = JSON.parse(localStorage.getItem("token"))
    const [roleName,setroleName] = useState()

    useEffect(()=>{
        axios.get(`/roles/${roleId}`).then(res=>{
            setroleName(res.data.data.roleName)
            //console.log(res.data.data)
        })
    },[roleId])

  // 下拉列表
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: roleName,
        },
        {
          key: '2',
          danger: true,
          label: '退出',
          onClick: () => {
            localStorage.removeItem('token')
            navigate('/login')
          }
        },
      ]}
    />
  );
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {/* 显示目前所在的位置 */}
      <span style={{ padding: "0 16px" }} >{headerList[location.pathname]}</span>
      {/* 欢迎用户回来 */}
      <div style={{ float: "right" }} >
        <span>欢迎<span style={{ color: "#1890ff" }} >{name}</span>回来</span>
        {/* 用户图像及退出功能 */}
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
