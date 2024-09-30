import React from 'react';
import { Form, InputNumber, Checkbox } from 'antd';

const ApiMonitoring = () => {
  const onFinish = (values) => {
    console.log('Submitted API Monitoring & Analytics:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="API Usage Logs Retention (Days)" name="logsRetention" rules={[{ required: true, message: 'Please input the number of days for logs retention!' }]}>
        <InputNumber min={1} max={365} defaultValue={30} />
      </Form.Item>
      <Form.Item label="Enable Error Monitoring" name="errorMonitoring" valuePropName="checked">
        <Checkbox>Enable Error Monitoring</Checkbox>
      </Form.Item>
      <Form.Item label="Enable Real-Time Analytics" name="realTimeAnalytics" valuePropName="checked">
        <Checkbox>Enable Real-Time Analytics</Checkbox>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Monitoring Settings</button>
      </Form.Item>
    </Form>
  );
};

export default ApiMonitoring;
