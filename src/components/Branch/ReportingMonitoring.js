import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const ReportingMonitoring = () => {
  const onFinish = (values) => {
    console.log('Submitted Reporting & Performance Monitoring:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Branch Transaction Monitoring" name="transactionMonitoring">
        <Input placeholder="Enter Monitoring Criteria" />
      </Form.Item>
      <Form.Item label="Select Branch KPI" name="branchKPI">
        <Select placeholder="Select KPI to monitor" mode="multiple">
          <Option value="Transaction Volume">Transaction Volume</Option>
          <Option value="Loan Disbursement">Loan Disbursement</Option>
          <Option value="Deposit Growth">Deposit Growth</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Performance Report Frequency" name="reportFrequency">
        <Select placeholder="Select Report Frequency">
          <Option value="Daily">Daily</Option>
          <Option value="Weekly">Weekly</Option>
          <Option value="Monthly">Monthly</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Generate Report</button>
      </Form.Item>
    </Form>
  );
};

export default ReportingMonitoring;
