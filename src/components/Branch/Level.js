import React from 'react';
import { Form, InputNumber } from 'antd';

const Level = () => {
  const onFinish = (values) => {
    console.log('Submitted Branch-Level Interest, Fees, Charges & Limits:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Branch-Specific Interest Rate Adjustment" name="interestAdjustment">
        <InputNumber min={0} max={100} step={0.1} defaultValue={0} />
      </Form.Item>
      <Form.Item label="Service Fees (ATM, In-Branch Transactions)" name="serviceFees">
        <InputNumber min={0} max={100} defaultValue={10} />
      </Form.Item>
      <Form.Item label="Transaction Limits" name="transactionLimits">
        <InputNumber min={0} max={100000} defaultValue={10000} />
      </Form.Item>
      <Form.Item label="Withdrawal & Deposit Limits" name="withdrawalDepositLimits">
        <InputNumber min={0} max={100000} defaultValue={2000} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Branch-Level Settings</button>
      </Form.Item>
    </Form>
  );
};

export default Level;
