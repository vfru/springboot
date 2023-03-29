import {Navigate} from 'react-router-dom';
import {useRoutes} from 'react-router-dom'
import Login from '../pages/login/Login'
import Main from '../pages/main/Main'
import NotFound from '../pages/404/NotFound'
import Home from '../pages/main/home/Home'
import UserList from '../pages/main/user/UserList'
import CarList from '../pages/main/car/CarList'
import RentalList from '../pages/main/rental/RentalList'
import RentalDetail from '../pages/main/rental/RentalDetail'
import AppraiseList from '../pages/main/appraise/AppraiseList'
import React, {useEffect, useState} from 'react';
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
            }).catch(err => {
            console.log("err", err)
        })
        const token = JSON.parse(localStorage.getItem('token'))
        axios.post(`/users/login`,token).then(res=>{
            localStorage.setItem("token", JSON.stringify(res.data.data))
        })
    }, [BackRouteList.length])

    //通过 localRouterMap[item.key]得到相应的组件
    // const localRouterMap = {
    //     '/home': <Home/>,
    //     '/user/list': <UserList/>,
    //     '/car/list': <CarList/>,
    //     '/car/detail/:id': <CarDetail/>,
    //     '/rental/list': <RentalList/>,
    //     '/rental/detail/:id': <RentalDetail/>,
    //     '/appraise/list': <AppraiseList/>,
    //     '/appraise/detail/:id': <AppraiseDetail/>,
    //     '/role/list': <RoleList/>
    // }
    //
    // const RouterMap = (key) => {
    //     switch (key) {
    //         case '/home':
    //             return <Home/>
    //         case '/user/list':
    //             return <UserList/>
    //         case '/car/list':
    //             return <CarList/>
    //         case '/car/detail/:id':
    //             return <CarDetail/>
    //         case '/rental/list':
    //             return <RentalList/>
    //         case '/rental/detail/:id':
    //             return <RentalDetail/>
    //         case '/appraise/list':
    //             return <AppraiseList/>
    //         case '/appraise/detail/:id':
    //             return <AppraiseDetail/>
    //         case '/role/list':
    //             return <RoleList/>
    //     }
    // }


    const token = localStorage.getItem('token')


    // const checkRoute = (item) => {
    //     //权限列表中的pagepermisson是1的时候才支持渲染
    //     return RouterMap(item.key) && (item.pagepermission || item.routepermission)
    // }


    const checkUserPermission = (item) => {
        //判断当前用户的权限列表是否包含item的key的
        if (token !== null) {
            const {rights} = JSON.parse(token)

            //console.log(rights.includes(item.key))
            // console.log(item)
            return rights.includes(item)
        }
    }


    const routes = [
        {
            path: '/login', element: <Login/>
        },
        {
            path: '/register', element: <Register/>
        },
        //开始时BackRouteList为空，数据没回来时会有一瞬间没找到404的问题, 但是加这个【BackRouteList.length > 0 &&】会有没找到路径的问题
        {path: '*', element: (token !== null ? <NotFound/> : <Navigate to='/login'/>)},
        {
            path: '/', element: (token !== null ? <Main/> : <Navigate to='/login'/>),
            //需要修改
            children: [
                // BackRouteList.map(item => {
                //         //判断所拥有的权限获得相应的页面
                //         //console.log(BackRouteList)
                //         if (checkRoute(item) && checkUserPermission(item)) {
                //
                //             console.log(item.key)
                //             return ({
                //                 path: item.key,
                //                 element: (RouterMap(item.key))
                //             });
                //         } else {
                //             return ({
                //                 path: item.key,
                //                 element: <NotFound/>
                //             });
                //         }
                //     }
                // ),
                {
                    path: '/home', element: (checkUserPermission('/home') ? <Home/> : <NotFound/>)
                },
                {
                    path: '/user/list', element: (checkUserPermission('/user/list') ? <UserList/> : <NotFound/>)
                },
                {
                    path: '/car/list', element: (checkUserPermission('/car/list') ? <CarList/> : <NotFound/>)
                },
                {
                    path: '/car/detail/:id', element: (checkUserPermission('/car/detail/:id') ? <CarDetail/> : <NotFound/>)
                },
                {
                    path: '/rental/list', element: (checkUserPermission('/rental/list') ? <RentalList/> : <NotFound/>)
                },
                {
                    path: '/rental/detail/:id', element: (checkUserPermission('/rental/detail/:id') ? <RentalDetail/> : <NotFound/>)
                },
                {
                    path: '/appraise/list', element: (checkUserPermission('/appraise/list') ? <AppraiseList/> : <NotFound/>)
                },
                {
                    path: '/appraise/detail/:id', element: (checkUserPermission('/appraise/detail/:id') ? <AppraiseDetail/> : <NotFound/>)
                },
                {
                    path: '/role/list', element:(checkUserPermission('/role/list') ? <RoleList/> : <NotFound/>)
                },
                {
                    path: '/', element: <Navigate to='/home'/>
                },
            ]
        },
    ]


    const element = useRoutes(routes)

    // 解决一瞬间404的问题
    // if (BackRouteList.length > 0) {
    //     return (
    //         <div  >
    //             {element}
    //         </div>
    //     )
    // } else {
    //     return null
    // }

    return (
        <div>
            {element}
        </div>
    )
}