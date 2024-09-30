import React from 'react';
import { Form, Checkbox, Input } from 'antd';

const SecurityCompliance = () => {
  const onFinish = (values) => {
    console.log('Submitted Security & Compliance Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Enable Data Encryption" name="encryption" valuePropName="checked">
        <Checkbox>Enable Data Encryption for Sensitive Information</Checkbox>
      </Form.Item>
      <Form.Item label="Compliance Standard" name="compliance" rules={[{ required: true, message: 'Please input the compliance standard!' }]}>
        <Input placeholder="Enter Compliance Standard (e.g., GDPR, Local Laws)" />
      </Form.Item>
      <Form.Item label="Enable AML Compliance" name="amlCompliance" valuePropName="checked">
        <Checkbox>Enable AML (Anti-Money Laundering) Compliance</Checkbox>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Security & Compliance Settings</button>
      </Form.Item>
    </Form>
  );
};

export default SecurityCompliance;
