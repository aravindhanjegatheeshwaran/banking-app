import React from 'react';
import { Tabs } from 'antd';
import Types from './Types';
import Templates from './Templates';
import Scheduling from './Scheduling';

const { TabPane } = Tabs;

const Notification = () => {
  return (
    <div>
      <h2>Notification Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Notification Types" key="1">
          <Types />
        </TabPane>
        <TabPane tab="Notification Templates" key="2">
          <Templates />
        </TabPane>
        <TabPane tab="Scheduling & Automation" key="3">
          <Scheduling />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Notification;
