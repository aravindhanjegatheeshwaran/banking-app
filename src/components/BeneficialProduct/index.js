import React from 'react';
import { Tabs } from 'antd';
import ProductSpecific from './ProductSpecific';
import AuditLogs from './AuditLogs';
import SecurityCompliance from './SecurityCompliance';

const { TabPane } = Tabs;

const BeneficialProduct = () => {
  return (
    <div>
      <h2>Beneficial Product Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Product-Specific" key="1">
          <ProductSpecific />
        </TabPane>
        <TabPane tab="Audit Logs & Activity Monitoring" key="2">
          <AuditLogs />
        </TabPane>
        <TabPane tab="Security & Compliance" key="3">
          <SecurityCompliance />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BeneficialProduct;
