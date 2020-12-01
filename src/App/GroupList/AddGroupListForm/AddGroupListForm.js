import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Select } from "antd";

import { addGroupList } from "../../../store/actionCreators/groupList";

import { input, formComp, listName } from "./AddGroupListForm.module.css";


const { Item } = Form;
const { Option } = Select;

export default function CreateGroupForm() {
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.user.user);
    const textInput = React.createRef();
    const [form] = Form.useForm();

    const { expenseLists } = useSelector((state) => state.expenseList);

    console.log(expenseLists)

    function onFinish(values) {
        dispatch(addGroupList({ ...values, uid }));
    }

    useEffect(() => {
        textInput.current.focus();
    });


    const lists = expenseLists.map(({ _id, title }) => <Option key={_id}>{title}</Option>)
    return (
        <div>
            <Form
                onFinish={onFinish}
                onClick={(e) => e.stopPropagation()}
                form={form}
                className={formComp}
                layout="vertical"
            >
                <Item name='title' className={listName} required >
                    <Input className={input} ref={textInput} placeholder="Enter Gorup Name" />
                </Item>
                <Item name='lists' className={listName} required >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        size="large"
                    >
                        {lists}
                    </Select>
                </Item>
                <Item name='title'>
                    <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                        Add Group
                    </Button>
                </Item>
            </Form>
        </div>
    );
}
