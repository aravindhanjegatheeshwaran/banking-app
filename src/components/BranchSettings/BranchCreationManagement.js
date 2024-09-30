import React from 'react';
import { Form, Input, Button, TimePicker } from 'antd';

const BranchCreationManagement = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form
            form={form}
            name="branchCreationManagement"
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item
                name="branchName"
                label="Branch Name"
                rules={[{ required: true, message: 'Please input the branch name!' }]}
            >
                <Input placeholder="Enter Branch Name" />
            </Form.Item>

            <Form.Item
                name="address"
                label="Branch Address"
                rules={[{ required: true, message: 'Please input the branch address!' }]}
            >
                <Input placeholder="Enter Branch Address" />
            </Form.Item>

            <Form.Item
                name="manager"
                label="Branch Manager"
                rules={[{ required: true, message: 'Please input the branch manager name!' }]}
            >
                <Input placeholder="Enter Branch Manager Name" />
            </Form.Item>

            <Form.Item
                name="contact"
                label="Branch Contact Details"
                rules={[{ required: true, message: 'Please input the branch contact details!' }]}
            >
                <Input placeholder="Enter Branch Contact Details" />
            </Form.Item>

            <Form.Item
                name="operationalHours"
                label="Operational Hours"
                rules={[{ required: true, message: 'Please select the operational hours!' }]}
            >
                <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BranchCreationManagement;
