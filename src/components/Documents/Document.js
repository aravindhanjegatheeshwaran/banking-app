import React from 'react';
import { Form, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const Document = () => {
  const onFinish = (values) => {
    console.log('Submitted Document Management:', values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Upload Documents" name="documents" rules={[{ required: true, message: 'Please upload the required documents!' }]}>
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Document Type" name="documentType" rules={[{ required: true, message: 'Please select a document type!' }]}>
        <Select placeholder="Select Document Type">
          <Option value="KYC Document">KYC Document</Option>
          <Option value="Proof of Address">Proof of Address</Option>
          <Option value="Loan Document">Loan Document</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Save Document</button>
      </Form.Item>
    </Form>
  );
};

export default Document;
