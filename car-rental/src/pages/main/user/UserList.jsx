import React, {forwardRef, useState, useEffect, useRef} from 'react'
import {Table, Button, Modal, Input, Form, Select, message} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import axios from 'axios'

export default function UserList() {
    //表格的数据
    const [dataSource, setdataSource] = useState([])
    //保存角色数据
    const [roleList, setroleList] = useState([])
    //token中获得用户的权限和区域，控制用户页面的显示
    const {rights, roleId, username} = JSON.parse(localStorage.getItem('token'))
    // 添加用户功能开关
    const [isAddOpen, setisAddOpen] = useState(false)
    // 修改用户功能开关
    const [isUpdateOpen, setisUpdateOpen] = useState(false)
    // 存储用户数据
    const userData = useRef(null)
    // 存储要修改的用户的数据，获得id发送后端修改数据
    const [updateUserId, setupdateUserId] = useState(null)
    //不能修改自己的角色的用户
    const [isdis, setisdis] = useState(false)

    useEffect(() => {
        //现有的用户数据
        axios.get("/users/roles").then(res => {
            const list = res.data.data
            //console.log(res.data.data)
            // 筛选出经理和销售,
            setdataSource(roleId === 0 ? list : [
                // 筛选出自己，
                ...list.filter(item => item.username === username),
                // 管理员
                ...list.filter(item => roleId === 1 ? item.roleId === 3 || item.roleId === 2 : null),
                // 销售筛选出客户名单
                ...list.filter(item => roleId === 2 ? item.roleId === 3 : null),
            ])
        })
        //角色数据
        axios.get("/roles").then(res => {
            const list = res.data.data
            //console.log(res.data.data)
            setroleList(list)
        })
    }, [roleId, username])

    //需要与db数据排序一样
    const buttonList = {
        "/user/update": "修改",
        "/user/block": "拉黑",
        "/user/add": "增加",
        "/user/delete": "删除",
    }
    // 通过buttonList的key和rights数组对比得出相同的元素 ，得出用户在user页面中拥有的功能
    const list = rights.filter(data => Object.keys(buttonList).some(i => data === i))
    //console.log(list)
    //表格的标题，框架
    const columns = [
        {
            title: '用户昵称',
            dataIndex: 'name'
        },
        {
            title: '用户分类',
            dataIndex: 'role',
            // render自定义格式
            render: (role) => {
                return role.roleName
            }
        },
        {
            title: '操作',
            render: (item) => {
                //console.log(item)
                // console.log(list)
                // console.log(buttonList[list[0]])
                return <div>
                    <Button type='primary' disabled={item.roleId === 0} onClick={() => {
                        setisUpdateOpen(true)
                        updateUser(item)
                    }}>修改</Button>&nbsp;
                    {/* {
            buttonList[list[2]] === "增加" && <Button type='primary' disabled={item.default} >增加</Button>
          }
          &nbsp; */}

                    {
                        // 自己不能拉黑自己,要看用户当前的状态显示拉黑或恢复
                        item.block === 0 && buttonList[list[1]] === "拉黑" && <Button onClick={() => {
                            blockUser(item, 1)
                        }} type='primary' danger disabled={item.username === username ? true : false}>拉黑</Button>
                    }
                    {
                        //
                        item.block === 1 && buttonList[list[1]] === "拉黑" && <Button onClick={() => {
                            blockUser(item, 0)
                        }} type='primary' disabled={item.username === username ? true : false}>恢复</Button>
                    }
                    &nbsp;
                    {
                        // 自己不能删除自己
                        buttonList[list[2]] === "删除" && <Button onClick={() => {
                            toConfirm(item)
                        }} type='primary' danger disabled={item.username === username ? true : false}>删除</Button>
                    }
                </div>
            }
        }
    ]

    // 拉黑
    const blockUser = async (item, data) => {
        // console.log(item)
        await axios.patch(`/users/${item.id}`, {
            block: data
        })
        await axios.get("/users/roles").then(res => {
            const list = res.data.data
            // console.log(list)
            // 筛选出经理和销售,
            setdataSource(roleId === 0 ? list : [
                // 筛选出自己，
                ...list.filter(item => item.username === username),
                // 管理员
                ...list.filter(item => roleId === 1 ? item.roleId === 2 || item.roleId === 3 : null),

                ...list.filter(item => roleId === 2 ? item.roleId === 3 : null),
            ])
        })
    }
    //删除前确认
    const toConfirm = (item) => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined/>,
            content: '你确认要删除？',
            cancelText: '取消',
            okText: '确认',
            //点击确认
            onOk() {
                deleteUser(item)
            }
        });
    }
    // 删除
    const deleteUser = async (item) => {
        setdataSource(dataSource.filter(data => data.id !== item.id))
        await axios.delete(`/users/${item.id}`)
    }
    // 添加用户
    const addUser = async () => {
        // console.log(userData)
        // 验证表单
        userData.current.validateFields().then(async value => {
            // console.log(value)
            //关闭弹出框
            setisAddOpen(false)
            //先post到后端，生成id，再设置dataSource，方便后面的删除和更新
            //console.log(value)
            await axios.post(`/users`, {
                ...value,
            }).then(async res => {
                //console.log(res.data)
                if (res.data.code===400)message.error(res.data.msg)
               if(res.data.code===200){
                   message.success(res.data.msg)
                   await axios.get("/users/roles").then(res => {
                       const list = res.data.data
                       // console.log(list)
                       // 筛选出经理和销售,
                       setdataSource(roleId === 0 ? list : [
                           // 筛选出自己，
                           ...list.filter(item => item.username === username),
                           // 管理员
                           ...list.filter(item => roleId === 1 ? item.roleId === 3 || item.roleId === 2 : null),
                           // 销售筛选出客户名单
                           ...list.filter(item => roleId === 2 ? item.roleId === 3 : null),
                       ])
                   })
               }
            })
        }).catch(err => {
            //console.log(err)
        })
    }
    // 点击修改时
    const updateUser = (item) => {
        if ((item.id === 0) || roleId >= 2) {
            setisdis(true)
        } else {
            setisdis(false)
        }
        // 设置表单的值
        setTimeout(() => {
            userData.current.setFieldsValue(item)
        }, 0);
        // 保存id用于发送数据
        // console.log(item)
        setupdateUserId(item)
    }
    // 点击修改弹出的表单的ok时
    const updateOK = async () => {
        // 验证表单
        userData.current.validateFields().then(async value => {
            //关闭弹出框
            setisUpdateOpen(false)
            //点击后清除输入框的内容
            userData.current.resetFields()
            await axios.patch(`/users`, {...value,"id":updateUserId.id}).then(async res => {
                //console.log(res.data)
                //重新请求数据
                await axios.get("/users/roles").then(res => {
                    const list = res.data.data
                    // console.log(list)
                    // 筛选出经理和销售,
                    setdataSource(roleId === 0 ? list : [
                        // 筛选出自己，
                        ...list.filter(item => item.username === username),
                        // 管理员
                        ...list.filter(item => roleId === 1 ? item.roleId === 3 || item.roleId === 2 : null),
                        // 销售筛选出客户名单
                        ...list.filter(item => roleId === 2 ? item.roleId === 3 : null),
                    ])
                })
            })
        }).catch(err => {
            //console.log(err)
        })
    }


    return (
        <div>
            {buttonList[list[3]] === "增加" && <Button type="primary" onClick={() => {
                setisAddOpen(true)
            }}>添加用户</Button>}
            {/* 用户列表 */}
            <Table dataSource={dataSource} columns={columns}
                   pagination={{
                       //一页5个
                       pageSize: 5
                   }}
                //数据中没有key属性，需要key值，设置为id
                   rowKey={item => item.id}
            />

            {/* 添加用户功能，只有管理员可用 */}
            <Modal
                open={isAddOpen}
                title="添加用户"
                cancelText="取消"
                onCancel={() => {
                    setisAddOpen(false)
                    //点击后清除输入框的内容
                    userData.current.resetFields()
                }}
                onOk={addUser}
            >
                <UserForm ref={userData} roleList={roleList} roleId={roleId}/>
            </Modal>

            {/* 修改功能 */}
            <Modal
                open={isUpdateOpen}
                title="修改用户"
                cancelText="取消"
                onCancel={() => {
                    setisUpdateOpen(false)
                }}
                onOk={updateOK}
            >
                <UserForm ref={userData} roleList={roleList} roleId={roleId} isdis={isdis}/>
            </Modal>
        </div>
    )
}


// 点击修改或者增加新用户弹出新的组件
const {Option} = Select;
const UserForm = forwardRef((props, ref) => {

    return (
        <div>
            <Form
                ref={ref}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                        {
                            //必填项
                            required: true,
                            message: '必填',
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
                            //必填项
                            required: true,
                            message: '必填',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="name"
                    label="名字"
                    rules={[
                        {
                            //必填项
                            required: true,
                            message: '必填',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="电话号码"
                    rules={[
                        {
                            //必填项
                            required: true,
                            message: '必填',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="roleId"
                    label="角色"
                    rules={[
                        {
                            //必填项
                            required: true,
                            message: '必填',
                        },
                    ]}
                >
                    <Select disabled={props.isdis}>
                        {/*
                        roleId判断是否为总管理员，总管理员可以创造其他管理员，其他只能创建销售和客户
                        slice(1)截取数组第一位的总管理员
                         */}
                        {
                            props.roleId === 0 ?
                                props.roleList.slice(1).map(item =>
                                    <Option key={item.id} value={item.id}>{item.roleName}</Option>)
                                :
                                props.roleList.slice(1).map(item =>
                                    <Option key={item.id} value={item.id}
                                            disabled={item.id === 1}>{item.roleName}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
})