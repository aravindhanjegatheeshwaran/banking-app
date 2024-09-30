import React from 'react';
import { Form, InputNumber, Input } from 'antd';

const Interest = () => {
  const onFinish = (values) => {
    console.log('Submitted Interest Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Base Interest Rate (Savings)" name="baseSavingsInterest">
        <InputNumber min={0} max={100} defaultValue={0.5} step={0.1} />
      </Form.Item>
      <Form.Item label="Base Interest Rate (Loans)" name="baseLoanInterest">
        <InputNumber min={0} max={100} defaultValue={4.0} step={0.1} />
      </Form.Item>
      <Form.Item label="Base Interest Rate (Deposits)" name="baseDepositInterest">
        <InputNumber min={0} max={100} defaultValue={2.0} step={0.1} />
      </Form.Item>
      <Form.Item label="Special Interest Rate (Specific Products)" name="specialInterest">
        <Input placeholder="Enter details for special interest rates" />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Interest Settings</button>
      </Form.Item>
    </Form>
  );
};

export default Interest;
