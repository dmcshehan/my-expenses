import React from "react";
import { List, Form, Input, Popconfirm, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { item, icon } from "./ListItem.module.css";

const { Item } = List;

const { Option } = Select;

export default function ListItem({
    title,
    _id,
    lists,
    update,
    deleteLIst,
    cancelUpdate,
    onUpdate,
    makeUpdatable,
    selectList,
    stopPropogation,
    updating,
}) {
    const [form] = Form.useForm();

    const { expenseLists } = useSelector((state) => state.expenseList);
    const optionsList = expenseLists.map(({ _id, title }) => <Option key={_id}>{title}</Option>)

    function onSubmit(values) {
        update({ ...values, _id })
    }

    return (
        <>
            {updating._id === _id ? (
                <Form form={form} layout="inline" initialValues={{ title, lists }} onFinish={onSubmit}>
                    <List.Item
                        actions={[
                      <span
                                key='list-loadmore-edit'
                                onClick={cancelUpdate}
                                className={icon}
                            >
                                Cancel
            </span>,
                            <button key='list-loadmore-more' type="submit" className={icon}>
                                Save
            </button>,
                        ]}
                        className={item}
                    >
                        <Form.Item name="title">
                            <Input
                                value={updating.title}
                                onChange={onUpdate}
                        onClick={stopPropogation}
                            />
                        </Form.Item>
                        <Form.Item name="lists" style={{ width: '50%' }}>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                            >
                                {optionsList}
                            </Select>
                        </Form.Item>
                    </List.Item>
                </Form>

            ) : (
                    <Item
                        actions={[
                            <span
                                key='list-loadmore-edit'
                                onClick={(e) => makeUpdatable(e, _id)}
                                className={icon}
                            >
                                Edit
            </span>,

                            <Popconfirm
                                title='Deleting this list will delete all expenses associate with it. Sure to delete?'
                                onConfirm={(e) => deleteLIst(e, _id)}
                            >
                                <span
                                    key='list-loadmore-more'
                                    onClick={stopPropogation}
                                    className={icon}
                                >
                                    Delete
              </span>
                            </Popconfirm>,
                        ]}
                        onClick={() => selectList(_id)}
                        className={item}
                    >
                        {title}
                    </Item>
                )}
        </>
    );
}
