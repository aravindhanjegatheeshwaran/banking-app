import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const UserAuthentication = () => {
  const onFinish = (values) => {
    console.log('Submitted User Authentication:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Authentication Type" name="authType" rules={[{ required: true, message: 'Please select authentication type!' }]}>
        <Select placeholder="Select Authentication Type">
          <Option value="Multi-Factor Authentication (MFA)">Multi-Factor Authentication (MFA)</Option>
          <Option value="Single Sign-On (SSO)">Single Sign-On (SSO)</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Assign Authentication to Role" name="role" rules={[{ required: true, message: 'Please select a role!' }]}>
        <Select placeholder="Select Role">
          <Option value="Admin">Admin</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Operations">Operations</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Authentication</button>
      </Form.Item>
    </Form>
  );
};

export default UserAuthentication;
