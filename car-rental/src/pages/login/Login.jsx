import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import './Login.css'
import axios from 'axios';
import car from "../../assets/pexels-abdulwahab-alawadhi-3422964.jpg";


export default function Login() {
  const navigate = useNavigate()

  const onFinish = (values) => {


    axios.post(`/users/login`,values)
      .then(res => {
        //console.log(res.data)
        if (res.data.data.length === 0) {
          message.error("用户名密码不匹配")
        }
        else if (res.data.data.block) {
          message.error("用户已被拉黑,请联系管理员")
        }
        else {
          localStorage.setItem("token", JSON.stringify(res.data.data))
          //navigate用于跳转
          navigate('/')
           if (res.data.code===200) message.success(res.data.msg)
        }
      })
  }


  return (
    <div>
        <img className="background" alt="" src={car}/>
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
