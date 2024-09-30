
import React from 'react';
import { Form, Input, Button } from 'antd';

const FeesChargesSettings = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form name="feesChargesSettings" onFinish={onFinish} layout="vertical">
            <Form.Item name="serviceFees" label="Service Fees" rules={[{ required: true }]}>
                <Input placeholder="Enter Service Fees" />
            </Form.Item>
            <Form.Item name="penalties" label="Penalties for Late Payments">
                <Input placeholder="Enter Penalties" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FeesChargesSettings;
