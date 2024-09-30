import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const Profile = () => {
  const onFinish = (values) => {
    console.log('Submitted Customer Profile Management:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Customer Name" name="customerName" rules={[{ required: true, message: 'Please input the customer name!' }]}>
        <Input placeholder="Enter Customer Name" />
      </Form.Item>
      <Form.Item label="Customer ID" name="customerID" rules={[{ required: true, message: 'Please input the customer ID!' }]}>
        <Input placeholder="Enter Customer ID" />
      </Form.Item>
      <Form.Item label="KYC Status" name="kycStatus" rules={[{ required: true, message: 'Please select KYC status!' }]}>
        <Select placeholder="Select KYC Status">
          <Option value="Pending">Pending</Option>
          <Option value="Verified">Verified</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Customer Segment" name="customerSegment">
        <Select placeholder="Select Customer Segment">
          <Option value="VIP">VIP</Option>
          <Option value="Regular">Regular</Option>
          <Option value="High Net Worth">High Net Worth</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Profile</button>
      </Form.Item>
    </Form>
  );
};

export default Profile;
