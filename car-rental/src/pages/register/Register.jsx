import {Button, Form, Input, message, Select,} from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './index.css'

const {Option} = Select;
const formItemLayout = {

    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const Register = () => {

    let navigate = useNavigate()

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values)
        // console.log('Received values of form: ', values);
        axios.post(`/users`, {
            "username": values.username,
            "password": values.password,
            "isDefault": false,
            "roleId": 3,
            "name": values.name,
            "phone": values.phone,
            "block": false,
        }).then(
            res => {
                // console.log(res);
                if (res.data.code === 200){
                    message.info("注册成功！")
                    navigate(-1)
                }

                if (res.data.code === 400) {
                    message.error(res.data.msg)
                }
            }
        )

    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className='Register_BackGround'>
            <div className='Register_Container'>
                <br/>
                <Form className='Register_Form'
                      {...formItemLayout}
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      initialValues={{
                          prefix: '86',
                      }}
                      scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的用户名',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="重复密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请再次输入您的密码',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不匹配'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="真实姓名"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的真实姓名',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="联系方式"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的联系方式',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>

                        <Button style={{float: 'right'}} type="primary" href={`/login`}>取消</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;