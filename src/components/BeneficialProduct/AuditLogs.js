import React from 'react';
import { Form, Input, Checkbox, DatePicker } from 'antd';

const AuditLogs = () => {
  const onFinish = (values) => {
    console.log('Submitted Audit Logs & Activity Monitoring:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Track Changes to" name="trackChanges" rules={[{ required: true, message: 'Please specify what to track!' }]}>
        <Checkbox.Group options={['Interest Rates', 'Fees', 'Transaction Limits']} />
      </Form.Item>
      <Form.Item label="Date Range for Audit Logs" name="dateRange" rules={[{ required: true, message: 'Please select a date range!' }]}>
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="Enable Real-Time Monitoring" name="realTimeMonitoring" valuePropName="checked">
        <Checkbox>Enable Real-Time Monitoring</Checkbox>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Monitoring Settings</button>
      </Form.Item>
    </Form>
  );
};

export default AuditLogs;
