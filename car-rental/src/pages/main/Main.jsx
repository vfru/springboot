import React from 'react'
import SideMenu from '../../components/sidemenu/SideMenu'
import TopHeader from '../../components/topheader/TopHeader'
import { Outlet } from 'react-router-dom'
import { Layout,  Spin } from 'antd';
import './Main.css'
import { connect } from 'react-redux'
const { Content } = Layout;


 function Main(props) {
  return (
    <Layout  >
      <SideMenu></SideMenu>
      <Layout className="site-layout" >
        {/* <Progress percent={percent} /> */}
        <TopHeader></TopHeader>
        {/* Spin显示页面的加载中，通过redux控制 */}
        <Spin size='large' spinning={props.isLoading} >
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 40,
              minHeight: 915,
              overflow: 'auto'//超过内容区自动撑开
            }}
          >
            {/* 路由表 */}
            <Outlet />
          </Content>
        </Spin>
      </Layout>
    </Layout>
  )
}
const mapStateToprops = ({ LoadingReducer: { isLoading } }) => {
  //state中有redux中
  return {
    isLoading
  }
}
export default connect(
  mapStateToprops
)(Main)