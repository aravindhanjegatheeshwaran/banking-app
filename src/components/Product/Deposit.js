import React from 'react';
import { Form, InputNumber, Select } from 'antd';

const { Option } = Select;

const Deposit = () => {
  const onFinish = (values) => {
    console.log('Submitted Deposit Configurations:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Deposit Type" name="depositType" rules={[{ required: true, message: 'Please select the deposit type!' }]}>
        <Select placeholder="Select Deposit Type">
          <Option value="Fixed">Fixed</Option>
          <Option value="Recurring">Recurring</Option>
          <Option value="Flexible">Flexible</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Minimum Balance" name="minBalance" rules={[{ required: true, message: 'Please input the minimum balance!' }]}>
        <InputNumber min={0} defaultValue={1000} />
      </Form.Item>
      <Form.Item label="Maximum Balance" name="maxBalance" rules={[{ required: true, message: 'Please input the maximum balance!' }]}>
        <InputNumber min={0} defaultValue={1000000} />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Deposit Configurations</button>
      </Form.Item>
    </Form>
  );
};

export default Deposit;
