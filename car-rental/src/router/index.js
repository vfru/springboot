import { Navigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Main from '../pages/main/Main'
import NotFound from '../pages/404/NotFound'
import Home from '../pages/main/home/Home'
import UserList from '../pages/main/user/UserList'
import CarList from '../pages/main/car/CarList'
import RentalList from '../pages/main/rental/RentalList'
import RentalDetail from '../pages/main/rental/RentalDetail'
import AppraiseList from '../pages/main/appraise/AppraiseList'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppraiseDetail from '../pages/main/appraise/AppraiseDetail';
import CarDetail from '../pages/main/car/CarDetail';
import Register from '../pages/register/Register';



export default function Router() {
    const [BackRouteList, setBackRouteList] = useState([])
    useEffect(() => {

        Promise.all([
            axios.get("rights"),
            axios.get("children"),
        ]).then(res => {
            // 将所有的rights和children都保存在BackRouteList中，渲染其中带有pagepermission属性的
            // console.log(...res[0].data,...res[1].data)
            setBackRouteList([...res[0].data, ...res[1].data])
        })
    }, [BackRouteList.length])

    // 通过 localRouterMap[item.key]得到相应的组件
    const localRouterMap = {
        "/home": <Home />,
        "/user/list": <UserList />,
        "/car/list": <CarList />,
        "/car/detail/:id": <CarDetail/>,
        "/rental/list": <RentalList />,
        "/rental/detail/:id": <RentalDetail />,
        "/appraise/list": <AppraiseList />,
        "/appraise/detail/:id":<AppraiseDetail/>
    }


    const token = localStorage.getItem('token')
    const checkRoute = (item) => {
        //权限列表中的pagepermisson是1的时候才支持渲染
        return localRouterMap[item.key] && (item.pagepermission || item.routepermission)
    }
    const checkUserPermission = (item) => {
        //判断当前用户的权限列表是否包含item的key的
        if (token !== null) {
            const { role: { rights } } = JSON.parse(token)
            return rights.includes(item.key)
        }


    }


    const routes = [
        {
            path: '/login', element: <Login />
        },
        {
            path: '/register', element: <Register />
        },
        {
            path: '/', element: (token !== null ? <Main /> : <Navigate to='/login' />),
            children: [
                ...BackRouteList.map(item => {
                    //判断所拥有的权限获得相应的页面
                    if (checkRoute(item) && checkUserPermission(item)) {
                        return ({
                            path: item.key,
                            element: localRouterMap[item.key]
                        });
                    } else {
                        return ({
                            path: item.key,
                            element: <NotFound />
                        });
                    }
                }
                ),
                {
                    path: '/', element: <Navigate to='/home' />
                },
            ]
        },
        //开始时BackRouteList为空，数据没回来时会有一瞬间没找到404的问题, 但是加这个【BackRouteList.length > 0 &&】会有没找到路径的问题
        { path: '*', element: (token !== null ? <NotFound /> : <Navigate to='/login' />) }
    ]


    const element = useRoutes(routes)

    // 解决一瞬间404的问题
    if (BackRouteList.length > 0) {
        return (
            <div  >
                {element}
            </div>
        )
    } else {
        return null
    }

    // return (
    //     <div  >
    //         {element}
    //     </div>
    // )
}
