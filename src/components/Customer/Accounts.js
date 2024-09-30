import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';

const { Option } = Select;

const Accounts = () => {
  const onFinish = (values) => {
    console.log('Submitted Customer Accounts Management:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Account Type" name="accountType" rules={[{ required: true, message: 'Please select the account type!' }]}>
        <Select placeholder="Select Account Type">
          <Option value="Individual">Individual</Option>
          <Option value="Joint">Joint</Option>
          <Option value="Corporate">Corporate</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Account Number" name="accountNumber" rules={[{ required: true, message: 'Please input the account number!' }]}>
        <Input placeholder="Enter Account Number" />
      </Form.Item>
      <Form.Item label="Alerts & Notifications Preferences" name="notificationPreferences">
        <Checkbox.Group options={['SMS', 'Email', 'App Push']} />
      </Form.Item>
      <Form.Item label="Data Privacy Consent" name="privacyConsent">
        <Checkbox>Customer consents to data privacy policy</Checkbox>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Account</button>
      </Form.Item>
    </Form>
  );
};

export default Accounts;
