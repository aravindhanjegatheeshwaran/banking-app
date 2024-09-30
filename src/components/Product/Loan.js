import React from 'react';
import { Form, InputNumber, Select } from 'antd';

const { Option } = Select;

const Loan = () => {
  const onFinish = (values) => {
    console.log('Submitted Loan Configurations:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Loan Tenure (in months)" name="loanTenure" rules={[{ required: true, message: 'Please input the loan tenure!' }]}>
        <InputNumber min={1} max={360} defaultValue={12} />
      </Form.Item>
      <Form.Item label="Repayment Schedule" name="repaymentSchedule" rules={[{ required: true, message: 'Please select the repayment schedule!' }]}>
        <Select placeholder="Select Repayment Schedule">
          <Option value="Monthly">Monthly</Option>
          <Option value="Quarterly">Quarterly</Option>
          <Option value="Annually">Annually</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Collateral Requirement" name="collateralRequirement">
        <Select placeholder="Select Collateral Requirement">
          <Option value="Collateral">Collateral</Option>
          <Option value="Non-Collateral">Non-Collateral</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Loan Configurations</button>
      </Form.Item>
    </Form>
  );
};

export default Loan;
