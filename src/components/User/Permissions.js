import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const Permissions = () => {
  const onFinish = (values) => {
    console.log('Submitted Permissions:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Role" name="role" rules={[{ required: true, message: 'Please select a role!' }]}>
        <Select placeholder="Select Role">
          <Option value="Admin">Admin</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Operations">Operations</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Assign Permissions" name="permissions" rules={[{ required: true, message: 'Please select permissions!' }]}>
        <Select mode="multiple" placeholder="Select Permissions">
          <Option value="View">View</Option>
          <Option value="Edit">Edit</Option>
          <Option value="Create">Create</Option>
          <Option value="Delete">Delete</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Permissions</button>
      </Form.Item>
    </Form>
  );
};

export default Permissions;
