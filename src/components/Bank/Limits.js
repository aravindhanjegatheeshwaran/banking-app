import React from 'react';
import { Form, InputNumber } from 'antd';

const Limits = () => {
  const onFinish = (values) => {
    console.log('Submitted Limits Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Daily Transaction Limits" name="dailyLimit">
        <InputNumber min={0} max={100000} defaultValue={10000} />
      </Form.Item>
      <Form.Item label="Monthly Transaction Limits" name="monthlyLimit">
        <InputNumber min={0} max={1000000} defaultValue={50000} />
      </Form.Item>
      <Form.Item label="Withdrawal and Deposit Limits" name="withdrawalLimit">
        <InputNumber min={0} max={100000} defaultValue={2000} />
      </Form.Item>
      <Form.Item label="Loan Limits (Minimum & Maximum)" name="loanLimits">
        <InputNumber min={1000} max={500000} defaultValue={10000} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Limits Settings</button>
      </Form.Item>
    </Form>
  );
};

export default Limits;
