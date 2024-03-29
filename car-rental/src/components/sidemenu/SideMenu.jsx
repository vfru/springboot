import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import '@icon-park/react/styles/index.css';
import {Car} from '@icon-park/react';
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
    "/role": <UserOutlined />,
    "/role/list": <UserOutlined />,
}

export default function SideMenu() {
    const navigate = useNavigate()
    const [menu, setMenu] = useState([])

    const { rights } = JSON.parse(localStorage.getItem("token"))


    useEffect(() => {
        axios.get("/rights/children").then(res => {
            setMenu(res.data.data)
        })
    }, [])




    //筛选pagepermission等于显示页面，有子组件的要用下拉菜单
    const check = (list) => {
        //console.log(list)
        // const list = menu.pagepermission&&checked.includes(menu.key)
        


        return list.map(item => {
            // 要有children属性且大于1，而且要权限中包括的页面
            if (item.childrenList && item.pagepermission && item.childrenList.length > 0 && rights.includes(item.key)) {
                //console.log(item)
                return {
                    key: item.key,
                    icon: iconList[item.key],
                    label: item.label,
                    children: item.childrenList.map(item => {
                        //console.log(item)
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
            } else {
                return null
            }

        })
    }
    //刷新页面任停留在当前位置
    const location = useLocation()
    const nowlocation = [location.pathname]
    const openkey = ["/" + location.pathname.split("/")[1]]

    //侧标导航栏
    const renderMenu = (menuList) => {
        //console.log(menuList)
        return <Menu theme="dark"
                     className="Menu"
            mode="inline"
            selectedKeys={nowlocation}
            defaultOpenKeys={openkey}
            items={menuList}
            onClick={(list) => navigate(list.key)}
        />
    }

    return (
        // 外面不能包div
        <Sider trigger={null} collapsible collapsed={false} theme="dark " width={300}  >
                    <div className="logo-container"><span className="logo glyphicon glyphicon-envelope">
                        <Car theme="multi-color" size="48" fill={['#ffffff' ,'#4f4f69' ,'#4f4f69' ,'#ffffff']} strokeWidth={3}/>
                    </span>Car</div>
                    {
                        renderMenu(check(menu))
                    }
        </Sider>

    )
}
