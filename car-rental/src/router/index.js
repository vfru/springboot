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
import RoleList from "../pages/main/right/RoleList";



export default function Router() {
    const [BackRouteList, setBackRouteList] = useState([])
    useEffect(() => {

        axios.get("/rights/children/all").then(
            res => {
                // 将所有的rights和children都保存在BackRouteList中，渲染其中带有pagepermission属性的
                //console.log(res.data.data)
                setBackRouteList(res.data.data)
            }).catch(err=>{
            console.log("err",err)
        })

    }, [BackRouteList.length])

    // 通过 localRouterMap[item.key]得到相应的组件
    // const localRouterMap = {
    //     'home': <Home />,
    //     'user/list': <UserList />,
    //     'car/list': <CarList />,
    //     'car/detail/:id': <CarDetail/>,
    //     'rental/list': <RentalList />,
    //     'rental/detail/:id': <RentalDetail />,
    //     'appraise/list': <AppraiseList />,
    //     'appraise/detail/:id':<AppraiseDetail/>
    // }


    const token = localStorage.getItem('token')


    // const checkRoute = (item) => {
    //     //权限列表中的pagepermisson是1的时候才支持渲染
    //     return localRouterMap[item.key] && (item.pagepermission || item.routepermission)
    // }

    //
    // const checkUserPermission = (item) => {
    //     //判断当前用户的权限列表是否包含item的key的
    //     if (token !== null) {
    //         const { roles } = JSON.parse(token)
    //         //console.log(roles.includes(item.key))
    //         //console.log(item.key)
    //         return roles.includes(item.key)
    //     }
    // }


    const routes = [
        {
            path: '/login', element: <Login />
        },
        {
            path: '/register', element: <Register />
        },
        {
            path: '/', element: (token !== null ? <Main /> : <Navigate to='/login' />),
            //需要修改
            children: [
                // BackRouteList.map(item => {
                //         //判断所拥有的权限获得相应的页面
                //         //console.log(BackRouteList)
                //         if (checkRoute(item) && checkUserPermission(item)) {
                //
                //             // console.log(item)
                //             return ({
                //                 path: item.key,
                //                 element: localRouterMap[item.key]
                //             });
                //         } else {
                //             return ({
                //                 path: item.key,
                //                 element: <NotFound />
                //             });
                //         }
                //     }
                //     ),
                {
                    path: '/home', element: <Home />
                },
                {
                    path: '/user/list', element: <UserList />
                },
                {
                    path: '/car/list', element: <CarList />
                },
                {
                    path: '/car/detail/:id', element: <CarDetail />
                },
                {
                    path: '/rental/list', element: <RentalList />
                },
                {
                    path: '/rental/detail/:id', element: <RentalDetail />
                },
                {
                    path: '/appraise/list', element: <AppraiseList />
                },
                {
                    path: '/appraise/detail/:id', element: <AppraiseDetail />
                },
                {
                    path: '/role/list', element: <RoleList />
                },
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