import React from 'react';
import { Form, Input, TimePicker, Select } from 'antd';

const { Option } = Select;

const BranchDetails = () => {
  const timeFormat = 'HH:mm';

  const onFinish = (values) => {
    console.log('Submitted Branch Creation & Management:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Branch Name" name="branchName" rules={[{ required: true, message: 'Please input the branch name!' }]}>
        <Input placeholder="Enter Branch Name" />
      </Form.Item>
      <Form.Item label="Branch ID" name="branchID" rules={[{ required: true, message: 'Please input the branch ID!' }]}>
        <Input placeholder="Enter Branch ID" />
      </Form.Item>
      <Form.Item label="Manager Name" name="managerName">
        <Input placeholder="Enter Manager Name" />
      </Form.Item>
      <Form.Item label="Contact Number" name="contact">
        <Input placeholder="Enter Contact Number" />
      </Form.Item>
      <Form.Item label="Branch Operational Hours" name="hours">
        <TimePicker.RangePicker format={timeFormat} />
      </Form.Item>
      <Form.Item label="Branch Service Offerings" name="serviceOfferings">
        <Select placeholder="Select Available Services" mode="multiple">
          <Option value="Loans">Loans</Option>
          <Option value="Deposits">Deposits</Option>
          <Option value="ATM">ATM Services</Option>
          <Option value="Foreign Exchange">Foreign Exchange</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Branch Creation & Management</button>
      </Form.Item>
    </Form>
  );
};

export default BranchDetails;
