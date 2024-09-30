import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const ThirdPartyIntegration = () => {
  const onFinish = (values) => {
    console.log('Submitted Third-Party Integration:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Third-Party Service" name="thirdPartyService" rules={[{ required: true, message: 'Please select a third-party service!' }]}>
        <Select placeholder="Select Third-Party Service">
          <Option value="Payment Gateway">Payment Gateway</Option>
          <Option value="Mobile Wallet">Mobile Wallet</Option>
          <Option value="POS System">POS System</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Third-Party Integration</button>
      </Form.Item>
    </Form>
  );
};

export default ThirdPartyIntegration;
