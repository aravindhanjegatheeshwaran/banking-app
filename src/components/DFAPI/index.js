import React from 'react';
import { Tabs } from 'antd';
import ApiAccessControl from './ApiAccessControl';
import CoreApiFunctions from './CoreApiFunctions';
import ThirdPartyIntegration from './ThirdPartyIntegration';
import ApiMonitoring from './ApiMonitoring';

const { TabPane } = Tabs;

const DFAPI = () => {
  return (
    <div>
      <h2>DF API Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="API Access Control" key="1">
          <ApiAccessControl />
        </TabPane>
        <TabPane tab="Core API Functions" key="2">
          <CoreApiFunctions />
        </TabPane>
        <TabPane tab="Third-Party Integration" key="3">
          <ThirdPartyIntegration />
        </TabPane>
        <TabPane tab="Monitoring & Analytics" key="4">
          <ApiMonitoring />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DFAPI;
