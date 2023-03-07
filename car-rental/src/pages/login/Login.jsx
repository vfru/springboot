import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import './Login.css'
// import ParticlesBg from 'particles-bg'
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()

  const onFinish = (values) => {
    // console.log(values);
    axios.get(`users?username=${values.username}&password=${values.password}&_expand=role`)
      .then(res => {
        // console.log(res.data)
        if (res.data.length === 0) {
          message.error("用户名密码不匹配")
        }
        else if (res.data[0].block) {
          message.error("用户已被拉黑,请联系管理员")
        }
        else {
          localStorage.setItem("token", JSON.stringify(res.data[0]))
          //navigate用于跳转
          navigate('/')
        }
      })


  }


  return (
    <div style={{ background: "rgba(255, 255, 255, 0.2)", height: "100%" }} >
      {/* <ParticlesBg
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10
            },
            url: 'path/to/svg.svg',
            scr: '/logo192.png',
          }
        }} /> */}
      <div className='formContainer' >
        <div className='logintitle' >汽车租赁系统</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input autoComplete='off' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              autoComplete='off'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <a style={{ float: 'right' }} href={`/register`}>新用户注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
