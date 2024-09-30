import React from 'react';
import { Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const Templates = () => {
  const onFinish = (values) => {
    console.log('Submitted Document Templates:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Select Template Type" name="templateType" rules={[{ required: true, message: 'Please select a template type!' }]}>
        <Select placeholder="Select Template Type">
          <Option value="Loan Contract">Loan Contract</Option>
          <Option value="Account Statement">Account Statement</Option>
          <Option value="Notice">Notice</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Template Content" name="templateContent" rules={[{ required: true, message: 'Please input the template content!' }]}>
        <TextArea rows={4} placeholder="Enter the content for the document template" />
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Template</button>
      </Form.Item>
    </Form>
  );
};

export default Templates;
