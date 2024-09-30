import React from 'react';
import { Form, Input } from 'antd';

const Miscellaneous = () => {
  const onFinish = (values) => {
    console.log('Submitted Miscellaneous Settings:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Compliance & Anti-Money Laundering (AML) Rules" name="amlRules">
        <Input placeholder="Enter AML rules and settings" />
      </Form.Item>
      <Form.Item label="KYC Verification Process" name="kycVerification">
        <Input placeholder="Enter KYC process details" />
      </Form.Item>
      <Form.Item label="Internal Risk Assessment" name="riskAssessment">
        <Input placeholder="Enter risk assessment criteria" />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Miscellaneous Settings</button>
      </Form.Item>
    </Form>
  );
};

export default Miscellaneous;
