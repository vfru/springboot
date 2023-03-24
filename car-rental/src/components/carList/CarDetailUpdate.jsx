import React, { useContext, useEffect, useRef, useState } from 'react';
import { Modal, Form, Input, Table } from 'antd';

export default function CarDetailUpdate(props) {
    const { isUpdate, setisUpdate, updateCarDetail, setupdateCarDetail, settoUpdate } = props






    //可编辑单元格
    const EditableContext = React.createContext(null);
    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current.focus();
            }
        }, [editing]);
        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        };
        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };
        let childNode = children;
        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{
                        margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }
        return <td {...restProps}>{childNode}</td>;
    }


    const columns = [
        {
            title: '座位',
            dataIndex: 'seat',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'seat',
                title: '座位',
                handleSave,
            }),
        },
        {
            title: '出厂日期',
            dataIndex: 'dateOfProduction',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'dateOfProduction',
                title: '出厂日期',
                handleSave,
            }),
        },
        {
            title: '规格',
            dataIndex: 'lhw',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'lhw',
                title: '规格',
                handleSave,
            }),
        },
        {
            title: '汽油',
            dataIndex: 'fuelTypes',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'fuelTypes',
                title: '汽油',
                handleSave,
            }),
        },
        {
            title: '油箱规格',
            dataIndex: 'oilTank',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'oilTank',
                title: '油箱规格',
                handleSave,
            }),
        },
        {
            title: '车辆描述',
            dataIndex: 'describe',
            onCell: (record) => ({
                record,
                //可编辑
                editable: true,
                dataIndex: 'describe',
                title: '车辆描述',
                handleSave,
                scroll: {
                    x: 500,
                    y: 1000,
                }
            }),
        },
    ]
    //编辑后失去焦点时调用
    const handleSave = (record) => {
        setupdateCarDetail(updateCarDetail.map(item => {
            console.log(item)
            console.log(record)
            if (item.id === record.id) {
                return {
                    seat: record.seat,
                    describe: record.describe,
                    dateOfProduction: record.dateOfProduction,
                    fuelTypes: record.fuelTypes,
                    lhw: record.lhw,
                    oilTank: record.oilTank,
                    id: record.id,
                }
            }
            else {
                return item
            }
        }))
    }


    return (
        <div>
            <Modal
                open={isUpdate}
                title={""}
                cancelText="取消"
                onCancel={() => {
                    setisUpdate(false)
                    //点击后清除输入框的内容
                }}
                width={1200}
                onOk={() => {
                    setisUpdate(false)
                    settoUpdate(true)
                }}
            >
                <Table
                    //table的可编辑
                    components={{
                        body: {
                            row: EditableRow,
                            cell: EditableCell,
                        },
                    }}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={updateCarDetail}
                    columns={columns}
                    rowKey={item => item.id}
                    title={() => <b>修改信息</b>}
                    scroll={{
                        x: 2000,
                        y: 1000,
                    }}
                />
            </Modal>
        </div>
    )
}
