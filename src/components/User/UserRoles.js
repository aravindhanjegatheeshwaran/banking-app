import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const UserRoles = () => {
  const onFinish = (values) => {
    console.log('Submitted User Roles:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Role Name" name="roleName" rules={[{ required: true, message: 'Please input the role name!' }]}>
        <Input placeholder="Enter Role Name" />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input placeholder="Enter Role Description" />
      </Form.Item>
      <Form.Item label="Assign Role to Department" name="department" rules={[{ required: true, message: 'Please select a department!' }]}>
        <Select placeholder="Select Department">
          <Option value="Admin">Admin</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Operations">Operations</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Role</button>
      </Form.Item>
    </Form>
  );
};

export default UserRoles;
