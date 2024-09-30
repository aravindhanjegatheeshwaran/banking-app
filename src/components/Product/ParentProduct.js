import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const ParentProduct = () => {
  const onFinish = (values) => {
    console.log('Submitted Parent Products:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Product Name" name="productName" rules={[{ required: true, message: 'Please input the product name!' }]}>
        <Input placeholder="Enter Product Name" />
      </Form.Item>
      <Form.Item label="Product Type" name="productType" rules={[{ required: true, message: 'Please select the product type!' }]}>
        <Select placeholder="Select Product Type">
          <Option value="Deposit">Deposit</Option>
          <Option value="Loan">Loan</Option>
          <Option value="Checking Account">Checking Account</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Product</button>
      </Form.Item>
    </Form>
  );
};

export default ParentProduct;
