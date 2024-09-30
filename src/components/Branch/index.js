import React from 'react';
import { Tabs } from 'antd';
import BranchDetails from './BranchDetails';
import Level from './Level';
import ReportingMonitoring from './ReportingMonitoring';

const { TabPane } = Tabs;

const Branch = () => {
  return (
    <div>
      <h2>Branch Module Configuration</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Branch Creation & Management" key="1">
          <BranchDetails />
        </TabPane>
        <TabPane tab="Branch-Level Interest, Fees, Charges & Limits" key="2">
          <Level />
        </TabPane>
        <TabPane tab="Reporting & Performance Monitoring" key="3">
          <ReportingMonitoring />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Branch;
