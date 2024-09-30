import React from 'react';
import { Form, Checkbox } from 'antd';

const CoreApiFunctions = () => {
  const onFinish = (values) => {
    console.log('Submitted Core API Functions:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Core API Functions" name="apiFunctions" rules={[{ required: true, message: 'Please select API functions!' }]}>
        <Checkbox.Group options={['Product Data Access', 'Transaction Data Access', 'Customer Data Access', 'Notification Access', 'Document Access']} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save API Functions</button>
      </Form.Item>
    </Form>
  );
};

export default CoreApiFunctions;
