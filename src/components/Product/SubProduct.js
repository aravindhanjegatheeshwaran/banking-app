import React from 'react';
import { Form, Input, InputNumber, Select } from 'antd';

const { Option } = Select;

const SubProduct = () => {
  const onFinish = (values) => {
    console.log('Submitted Sub-Product Creation:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Sub-Product Name" name="subProductName" rules={[{ required: true, message: 'Please input the sub-product name!' }]}>
        <Input placeholder="Enter Sub-Product Name" />
      </Form.Item>
      <Form.Item label="Parent Product" name="parentProduct" rules={[{ required: true, message: 'Please select the parent product!' }]}>
        <Select placeholder="Select Parent Product">
          <Option value="Savings">Savings</Option>
          <Option value="Fixed Deposit">Fixed Deposit</Option>
          <Option value="Loan">Loan</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Interest Rate" name="interestRate">
        <InputNumber min={0} max={100} step={0.1} defaultValue={5.0} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Sub-Product</button>
      </Form.Item>
    </Form>
  );
};

export default SubProduct;
