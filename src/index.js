import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { BankOutlined, BranchesOutlined, UserOutlined, FileOutlined, SettingOutlined } from '@ant-design/icons';
import Bank from './components/Bank';
import Branch from './components/Branch';
import Customer from './components/Customer';
import Product from './components/Product';
import User from './components/User';
import Notification from './components/Notification';
import Documents from './components/Document';
import DFAPI from './components/DFAPI';
import BeneficialProduct from './components/BeneficialProduct';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const onMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <Bank />;
      case '2':
        return <Branch />;
      case '3':
        return <Customer />;
      case '4':
        return <Product />;
      case '5':
        return <User />;
      case '6':
        return <Notification />;
      case '7':
        return <Documents />;
      case '8':
        return <DFAPI />;
      case '9':
        return <BeneficialProduct />;
      default:
        return <Bank />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={onMenuClick}>
          <Menu.Item key="1" icon={<BankOutlined />}>
            Bank Settings
          </Menu.Item>
          <Menu.Item key="2" icon={<BranchesOutlined />}>
            Branch Settings
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Customer Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Product Settings
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            User Management
          </Menu.Item>
          <Menu.Item key="6" icon={<FileOutlined />}>
            Notification Settings
          </Menu.Item>
          <Menu.Item key="7" icon={<FileOutlined />}>
            Document Settings
          </Menu.Item>
          <Menu.Item key="8" icon={<SettingOutlined />}>
            API Settings
          </Menu.Item>
          <Menu.Item key="9" icon={<SettingOutlined />}>
            Beneficial Product
          </Menu.Item>
        </Menu>
      </Sider>
      {/* Main Content */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
