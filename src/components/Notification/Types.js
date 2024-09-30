import React from 'react';
import { Form, Checkbox } from 'antd';

const Types = () => {
  const onFinish = (values) => {
    console.log('Submitted Notification Types:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Notification Types" name="notificationTypes" rules={[{ required: true, message: 'Please select at least one notification type!' }]}>
        <Checkbox.Group options={['SMS', 'Email', 'WhatsApp', 'Push Notifications']} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Notification Types</button>
      </Form.Item>
    </Form>
  );
};

export default Types;
