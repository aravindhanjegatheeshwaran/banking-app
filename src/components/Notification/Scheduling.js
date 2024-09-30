import React from 'react';
import { Form, DatePicker, TimePicker, Checkbox } from 'antd';

const Scheduling = () => {
  const onFinish = (values) => {
    console.log('Submitted Scheduling & Automation:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Date for Notification" name="date" rules={[{ required: true, message: 'Please select a date!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Select Time for Notification" name="time" rules={[{ required: true, message: 'Please select a time!' }]}>
        <TimePicker use12Hours format="h:mm a" />
      </Form.Item>
      <Form.Item label="Automation Options" name="automation">
        <Checkbox.Group options={['Recurring Alerts', 'Real-Time Fraud Alerts', 'Automated Payment Reminders']} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Scheduling & Automation</button>
      </Form.Item>
    </Form>
  );
};

export default Scheduling;
