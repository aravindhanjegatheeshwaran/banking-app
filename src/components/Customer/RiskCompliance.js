import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const RiskCompliance = () => {
  const onFinish = (values) => {
    console.log('Submitted Customer Risk & Compliance:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Customer Risk Assessment" name="riskAssessment">
        <Input placeholder="Enter Risk Assessment Details" />
      </Form.Item>
      <Form.Item label="Credit Score" name="creditScore">
        <Input placeholder="Enter Customer's Credit Score" />
      </Form.Item>
      <Form.Item label="Fraud Detection Status" name="fraudStatus">
        <Select placeholder="Select Fraud Detection Status">
          <Option value="None">None</Option>
          <Option value="Flagged">Flagged</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Compliance with Data Protection Laws" name="complianceLaws">
        <Select placeholder="Select Compliance Status">
          <Option value="GDPR">GDPR</Option>
          <Option value="Local">Local Regulations</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Risk & Compliance</button>
      </Form.Item>
    </Form>
  );
};

export default RiskCompliance;
