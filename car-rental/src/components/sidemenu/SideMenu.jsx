import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios'

const { Sider } = Layout;

//设置不同的图标，通过key来判断
const iconList = {
  "/home": <UserOutlined />,
  "/user": <UserOutlined />,
  "/user/list": <UserOutlined />,
  "/car": <UserOutlined />,
  "/car/list": <UserOutlined />,
  "/rental": <UserOutlined />,
  "/rental/list": <UserOutlined />,
  "/appraise": <UserOutlined />,
  "/appraise/list": <UserOutlined />,
}

export default function SideMenu() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  useEffect(() => {
    axios.get("rights?_embed=children").then(res => {
      // console.log(res.data)
      setMenu(res.data)
    })
  }, [])
  const { role: { rights } } = JSON.parse(localStorage.getItem("token"))
  //筛选pagepermission等于显示页面，有子组件的要用下拉菜单
  const check = (list) => {
    // const list = menu.pagepermission&&checked.includes(menu.key)

    return list.map(item => {
      // 要有children属性且大于1，而且要权限中包括的页面
      if (item.children && item.pagepermission && item.children.length > 0 && rights.includes(item.key)) {
        return {
          key: item.key,
          icon: iconList[item.key],
          label: item.label,
          children: item.children.map(item => {
            if (item.pagepermission && rights.includes(item.key)) {
              return {
                key: item.key,
                label: item.label,
                icon: iconList[item.key],
              }
            }
            return null
          })
        }
      }
      //首页，或者其他的被权限禁用时
      if (rights.includes(item.key) && item.pagepermission) {
        return {
          key: item.key,
          label: item.label,
          icon: iconList[item.key],
        }
      }
      else {
        return null
      }

    })
  }
  //刷新页面任停留在当前位置
  const location = useLocation()
  const nowlocation = [location.pathname]
  const openkey = ["/" + location.pathname.split("/")[1]]

   const  renderMenu = (menuList) => {
    return <Menu theme="light"
      mode="inline"
      selectedKeys={nowlocation}
      defaultOpenKeys={openkey}
      items={menuList}
      onClick={(list) => navigate(list.key)}
    />
  }

  return (
    // 外面不能包div
    <Sider trigger={null} collapsible collapsed={false} theme="light" className='ant-menu'  >
      <div style={{ display: "flex", height: "100%", "flexDirection": "column" }} >
        <div className="logo" >租车系统</div>
        <div style={{ flex: 1, "overflow": "auto" }} >
          {
               renderMenu(check(menu))
          }
        </div>
      </div>
    </Sider>

  )
}
