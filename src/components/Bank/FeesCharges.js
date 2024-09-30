import React from 'react';
import { Form, InputNumber } from 'antd';

const FeesCharges = () => {
  const onFinish = (values) => {
    console.log('Submitted Fees & Charges Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Service Fees (Account Maintenance)" name="serviceFees">
        <InputNumber min={0} max={100} defaultValue={10} />
      </Form.Item>
      <Form.Item label="Penalties for Late Payments" name="latePayments">
        <InputNumber min={0} max={100} defaultValue={25} />
      </Form.Item>
      <Form.Item label="Overdraft Fees" name="overdraftFees">
        <InputNumber min={0} max={100} defaultValue={30} />
      </Form.Item>
      <Form.Item label="Account Opening & Closing Charges" name="accountCharges">
        <InputNumber min={0} max={100} defaultValue={20} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Fees & Charges</button>
      </Form.Item>
    </Form>
  );
};

export default FeesCharges;
