import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const ApiAccessControl = () => {
  const onFinish = (values) => {
    console.log('Submitted API Access Control:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="API Key" name="apiKey" rules={[{ required: true, message: 'Please input the API Key!' }]}>
        <Input placeholder="Enter API Key" />
      </Form.Item>
      <Form.Item label="Role-Based API Access" name="apiRole" rules={[{ required: true, message: 'Please select an API access role!' }]}>
        <Select placeholder="Select API Access Role">
          <Option value="Public">Public</Option>
          <Option value="Internal">Internal</Option>
          <Option value="Partner">Partner</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Access Control</button>
      </Form.Item>
    </Form>
  );
};

export default ApiAccessControl;
