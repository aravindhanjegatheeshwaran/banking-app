import React from 'react';
import { Form, Checkbox } from 'antd';

const Security = () => {
  const onFinish = (values) => {
    console.log('Submitted Document Security:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Set Access Controls" name="accessControls" rules={[{ required: true, message: 'Please set access controls!' }]}>
        <Checkbox.Group options={['Admin Only', 'Finance Team', 'Customer Service']} />
      </Form.Item>
      <Form.Item label="Enable Audit Trail" name="auditTrail" valuePropName="checked">
        <Checkbox>Enable Audit Trail for Document Access</Checkbox>
      </Form.Item>
      <Form.Item label="Enable Encryption" name="encryption" valuePropName="checked">
        <Checkbox>Enable Data Encryption for Sensitive Documents</Checkbox>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Security Settings</button>
      </Form.Item>
    </Form>
  );
};

export default Security;
