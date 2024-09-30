import React from 'react';
import { Tabs } from 'antd';
import Profile from './Profile';
import Accounts from './Accounts';
import RiskCompliance from './RiskCompliance';

const { TabPane } = Tabs;

const Customer = () => {
  return (
    <div>
      <h2>Customer Module Configuration</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <Profile />
        </TabPane>
        <TabPane tab="Accounts" key="2">
          <Accounts />
        </TabPane>
        <TabPane tab="Risk & Compliance" key="3">
          <RiskCompliance />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Customer;
