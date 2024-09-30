
import React from 'react';
import { Form, Input, Button } from 'antd';

const MiscellaneousSettings = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form name="miscSettings" onFinish={onFinish} layout="vertical">
            <Form.Item name="amlRules" label="AML Rules" rules={[{ required: true }]}>
                <Input placeholder="Enter AML Rules" />
            </Form.Item>
            <Form.Item name="kycProcess" label="KYC Verification Process">
                <Input placeholder="Enter KYC Verification Process" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MiscellaneousSettings;
