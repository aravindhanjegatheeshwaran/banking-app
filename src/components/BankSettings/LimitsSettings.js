
import React from 'react';
import { Form, Input, Button } from 'antd';

const LimitsSettings = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form name="limitsSettings" onFinish={onFinish} layout="vertical">
            <Form.Item name="transactionLimit" label="Transaction Limit" rules={[{ required: true }]}>
                <Input placeholder="Enter Transaction Limit" />
            </Form.Item>
            <Form.Item name="withdrawalLimit" label="Withdrawal Limit">
                <Input placeholder="Enter Withdrawal Limit" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LimitsSettings;
