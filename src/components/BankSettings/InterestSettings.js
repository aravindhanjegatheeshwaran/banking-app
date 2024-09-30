
import React from 'react';
import { Form, Input, Button } from 'antd';

const InterestSettings = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form name="interestSettings" onFinish={onFinish} layout="vertical">
            <Form.Item name="baseInterestRate" label="Base Interest Rate" rules={[{ required: true }]}>
                <Input placeholder="Enter Base Interest Rate" />
            </Form.Item>
            <Form.Item name="variableInterest" label="Variable Interest Adjustments">
                <Input placeholder="Enter Variable Interest Rate" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default InterestSettings;
