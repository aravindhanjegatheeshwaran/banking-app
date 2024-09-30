import React from 'react';
import { Tabs } from 'antd';
import UserRoles from './UserRoles';
import Permissions from './Permissions';
import UserAuthentication from './UserAuthentication';

const { TabPane } = Tabs;

const UserManagement = () => {
  return (
    <div>
      <h2>User Management Module</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="User Roles" key="1">
          <UserRoles />
        </TabPane>
        <TabPane tab="Permissions" key="2">
          <Permissions />
        </TabPane>
        <TabPane tab="User Authentication" key="3">
          <UserAuthentication />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserManagement;
