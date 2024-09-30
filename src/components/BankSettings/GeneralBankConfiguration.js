
import React from 'react';
import { Form, Input, Button, TimePicker, DatePicker } from 'antd';

const GeneralBankConfiguration = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form form={form} name="generalBankConfig" onFinish={onFinish} layout="vertical">
            <Form.Item name="bankName" label="Bank Name" rules={[{ required: true }]}>
                <Input placeholder="Enter Bank Name" />
            </Form.Item>
            <Form.Item name="bankID" label="Bank ID" rules={[{ required: true }]}>
                <Input placeholder="Enter Bank ID" />
            </Form.Item>
            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                <Input placeholder="Enter Address" />
            </Form.Item>
            <Form.Item name="contactDetails" label="Contact Details" rules={[{ required: true }]}>
                <Input placeholder="Enter Contact Details" />
            </Form.Item>
            <Form.Item name="operationalHours" label="Operational Hours">
                <TimePicker.RangePicker />
            </Form.Item>
            <Form.Item name="holidays" label="Holidays">
                <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default GeneralBankConfiguration;
