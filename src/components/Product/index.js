import React from 'react';
import { Tabs } from 'antd';
import ParentProduct from './ParentProduct';
import SubProduct from './SubProduct';
import Loan from './Loan';
import Deposit from './Deposit';

const { TabPane } = Tabs;

const Product = () => {
  return (
    <div>
      <h2>Product Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Parent Products" key="1">
          <ParentProduct />
        </TabPane>
        <TabPane tab="Sub-Product Creation" key="2">
          <SubProduct />
        </TabPane>
        <TabPane tab="Loan Configurations" key="3">
          <Loan />
        </TabPane>
        <TabPane tab="Deposit/Account Configurations" key="4">
          <Deposit />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Product;
