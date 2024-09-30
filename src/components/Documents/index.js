import React from 'react';
import { Tabs } from 'antd';
import Document from './Document';
import Templates from './Templates';
import Security from './Security';

const { TabPane } = Tabs;

const Documents = () => {
  return (
    <div>
      <h2>Documents Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Document Management" key="1">
          <Document />
        </TabPane>
        <TabPane tab="Document Templates" key="2">
          <Templates />
        </TabPane>
        <TabPane tab="Document Security" key="3">
          <Security />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Documents;
