import React, {useState, useEffect} from 'react'
import {Table, Button, Modal, Tree, message} from 'antd'
import {UnorderedListOutlined} from '@ant-design/icons';
import axios from 'axios'

export default function RoleList() {
    //获取后端roles的数据，用table组件中的数据展示
    const [dataSource, setdataSource] = useState([])
    //获取后端rights的数据，用于roles的权限修改
    const [rightList, setrightList] = useState([])
    //获取当前的角色中rights的值，用于树状图的打勾表示
    const [currentRights, setcurrentRights] = useState([])
    //用于保存树状图修改的roles的id，用来匹配后端数据，后修改数据
    const [currentId, setcurrentId] = useState(0)
    //isOpen是否能设置树状图
    const [isOpen, setisOpen] = useState(false)
    useEffect(() => {
        axios.get("/roles").then(res => {
            setdataSource(res.data.data)
            //console.log(res.data.data)
        })

        axios.get("/rights/children").then(res => {
            //console.log(res.data.data)
            //树状图需要title对象在后端的label上
            const list = res.data.data
            list.forEach(i => {
                i.title = i.label
                i.children = i.childrenList
                i.children.forEach(j => {
                    j.title = j.label
                })
            })

            console.log(list)
            setrightList(list)
        })
    }, [])
    //table组件的标题
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            //自定义样式
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '角色名称',
            dataIndex: 'roleName',
        },
        {
            title: '操作',
            render: (item) => {
                return <div>
                    <Button type='primary' shape="circle" icon={<UnorderedListOutlined/>}
                            onClick={() => {
                                //点击后展示树状图
                                setisOpen(true)
                                //获取当前的角色中rights的值
                                console.log(item.rights)
                                setcurrentRights(item.rights)
                                setcurrentId(item.id)
                            }}/>


                </div>
            }
        },
    ]


    //点击ok后，放送后端同步数据
    const handleOk = () => {
        console.log(currentRights)
        //点击ok后关闭树状图
        setisOpen(false)
        //同步dataSource数据
        setdataSource(dataSource.map(i => {
            //通过之前保存的id找到要修改的角色
            if (i.id === currentId) {
                return {
                    ...i,
                    rights: currentRights
                }
            }
            return i
        }))

        //没做任何修改时直接返回
        if (currentRights.checked===undefined) return
        //console.log(currentId)
        axios.post(`/roles/${currentId}`,
            {
                rights: currentRights.checked
            }
        ).then(res => {

            //console.log(res.data)
            if (res.data.code === 200) {
                message.success(res.data.msg)
                //console.log(res.data)

                //修改完成后重新设置用户的token中的rights权限
                const token = JSON.parse(localStorage.getItem('token'))
                //console.log(token)
                axios.get("/roles").then(res => {

                    const list = res.data.data
                    //console.log(list)
                    for (let i = 0; i < list.length; i++) {
                        if (token.roleId === list[i].id) {
                            token.rights = list[i].rights

                        }
                    }
                    //console.log(token)
                    localStorage.setItem("token", JSON.stringify(token))
                })
            }
            if (res.data.code === 400) message.error(res.data.msg)
        })
    }
    //点击关闭时
    const handleCancel = () => {
        setisOpen(false)
    }

    //点击更改树状表权限开关
    const onCheck = (checkKeys) => {
        //console.log(checkKeys)
        //获取你点击修改后，当前的角色中rights的值
        setcurrentRights(checkKeys)
    }


    return (
        <div>
            <Table dataSource={dataSource} columns={columns} rowKey={(item) => item.id}></Table>

            <Modal title="权限分配" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <Tree
                    disabled={currentId === 0}
                    checkable
                    //通过后端数据展示树状图
                    treeData={rightList}
                    //通过角色的rights值，与right的key值对比，判断权限开关（打勾）
                    checkedKeys={currentRights}
                    //点击权限开关后
                    onCheck={onCheck}
                    //父子节点选中状态不再关联
                    checkStrictly={true}
                />
            </Modal>
        </div>
    )
}