import React from 'react';
import { Tabs } from 'antd';
import GeneralConfiguration from './GeneralConfiguration';
import Interest from './Interest';
import FeesCharges from './FeesCharges';
import Limits from './Limits';
import Miscellaneous from './Miscellaneous';

const { TabPane } = Tabs;

const Bank = () => {
  return (
    <div>
      <h2>General Bank Settings</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="General Configuration" key="1">
          <GeneralConfiguration />
        </TabPane>
        <TabPane tab="Interest" key="2">
          <Interest />
        </TabPane>
        <TabPane tab="Fees & Charges" key="3">
          <FeesCharges />
        </TabPane>
        <TabPane tab="Limits" key="4">
          <Limits />
        </TabPane>
        <TabPane tab="Miscellaneous" key="5">
          <Miscellaneous />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Bank;
