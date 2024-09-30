import React from 'react';
import { Form, Input, TimePicker, DatePicker, Select } from 'antd';

const { Option } = Select;

const GeneralConfiguration = () => {
  const timeFormat = 'HH:mm';

  const onFinish = (values) => {
    console.log('Submitted General Configuration:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Bank Name" name="bankName" rules={[{ required: true, message: 'Please input the bank name!' }]}>
        <Input placeholder="Enter Bank Name" />
      </Form.Item>
      <Form.Item label="Bank ID" name="bankID" rules={[{ required: true, message: 'Please input the bank ID!' }]}>
        <Input placeholder="Enter Bank ID" />
      </Form.Item>
      <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input the address!' }]}>
        <Input placeholder="Enter Address" />
      </Form.Item>
      <Form.Item label="Operational Hours" name="hours">
        <TimePicker.RangePicker format={timeFormat} />
      </Form.Item>
      <Form.Item label="Holidays" name="holidays">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="Currency" name="currency" rules={[{ required: true, message: 'Please select currency!' }]}>
        <Select placeholder="Select Currency">
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="INR">INR</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save General Configuration</button>
      </Form.Item>
    </Form>
  );
};

export default GeneralConfiguration;
