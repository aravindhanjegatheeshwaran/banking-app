import React from 'react';
import { Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const Templates = () => {
  const onFinish = (values) => {
    console.log('Submitted Notification Templates:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Notification Event" name="event" rules={[{ required: true, message: 'Please select an event!' }]}>
        <Select placeholder="Select Event">
          <Option value="Transaction Alert">Transaction Alert</Option>
          <Option value="Loan Approval">Loan Approval</Option>
          <Option value="Payment Reminder">Payment Reminder</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Template Content" name="templateContent" rules={[{ required: true, message: 'Please input the template content!' }]}>
        <TextArea rows={4} placeholder="Enter the content for the notification template" />
      </Form.Item>
      <Form.Item label="Language Localization" name="language">
        <Select placeholder="Select Language">
          <Option value="English">English</Option>
          <Option value="Spanish">Spanish</Option>
          <Option value="French">French</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Notification Template</button>
      </Form.Item>
    </Form>
  );
};

export default Templates;
