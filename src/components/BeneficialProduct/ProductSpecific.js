import React from 'react';
import { Form, InputNumber, Select } from 'antd';

const { Option } = Select;

const ProductSpecific = () => {
  const onFinish = (values) => {
    console.log('Submitted Product-Specific Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Interest Rate" name="interestRate" rules={[{ required: true, message: 'Please input the interest rate!' }]}>
        <InputNumber min={0} max={100} step={0.1} defaultValue={5.0} />
      </Form.Item>
      <Form.Item label="Fees" name="fees" rules={[{ required: true, message: 'Please input the fees!' }]}>
        <InputNumber min={0} max={1000} step={10} defaultValue={100} />
      </Form.Item>
      <Form.Item label="Transaction Limits" name="transactionLimits">
        <InputNumber min={0} max={1000000} step={1000} defaultValue={50000} />
      </Form.Item>
      <Form.Item label="Product Type" name="productType" rules={[{ required: true, message: 'Please select a product type!' }]}>
        <Select placeholder="Select Product Type">
          <Option value="Loan">Loan</Option>
          <Option value="Deposit">Deposit</Option>
          <Option value="Savings">Savings</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Product Settings</button>
      </Form.Item>
    </Form>
  );
};

export default ProductSpecific;
