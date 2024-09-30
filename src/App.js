import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import all the components
import GeneralBankConfiguration from './components/BankSettings/GeneralBankConfiguration';
import InterestSettings from './components/BankSettings/InterestSettings';
import FeesChargesSettings from './components/BankSettings/FeesChargesSettings';
import LimitsSettings from './components/BankSettings/LimitsSettings';
import MiscellaneousSettings from './components/BankSettings/MiscellaneousSettings';
import BranchCreationManagement from './components/BranchSettings/BranchCreationManagement';
import BranchInterestFeesLimits from './components/BranchSettings/BranchInterestFeesLimits';
import BranchReportingMonitoring from './components/BranchSettings/BranchReportingMonitoring';
import CustomerProfileManagement from './components/CustomerSettings/CustomerProfileManagement';
import CustomerAccountsManagement from './components/CustomerSettings/CustomerAccountsManagement';
import CustomerRiskCompliance from './components/CustomerSettings/CustomerRiskCompliance';
import ParentProducts from './components/ProductSettings/ParentProducts';
import SubProductCreation from './components/ProductSettings/SubProductCreation';
import LoanSpecificConfigurations from './components/ProductSettings/LoanSpecificConfigurations';
import DepositAccountConfigurations from './components/ProductSettings/DepositAccountConfigurations';
import UserRoles from './components/UserManagement/UserRoles';
import PermissionsSettings from './components/UserManagement/PermissionsSettings';
import UserAuthentication from './components/UserManagement/UserAuthentication';
import NotificationTypes from './components/NotificationSettings/NotificationTypes';
import NotificationTemplates from './components/NotificationSettings/NotificationTemplates';
import SchedulingAutomation from './components/NotificationSettings/SchedulingAutomation';
import DocumentManagement from './components/DocumentsSettings/DocumentManagement';
import DocumentTemplates from './components/DocumentsSettings/DocumentTemplates';
import DocumentSecurity from './components/DocumentsSettings/DocumentSecurity';
import APIAccessControl from './components/DFAPISettings/APIAccessControl';
import CoreAPIFunctions from './components/DFAPISettings/CoreAPIFunctions';
import ThirdPartyIntegration from './components/DFAPISettings/ThirdPartyIntegration';
import MonitoringAnalytics from './components/DFAPISettings/MonitoringAnalytics';
import ProductSpecificSettings from './components/ProductAdmin/ProductSpecificSettings';
import AuditLogs from './components/ProductAdmin/AuditLogs';
import SecurityCompliance from './components/ProductAdmin/SecurityCompliance';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to="/">General Bank Configuration</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/interest-settings">Interest Settings</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/fees-charges-settings">Fees & Charges Settings</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/limits-settings">Limits Settings</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/miscellaneous-settings">Miscellaneous Settings</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/branch-creation-management">Branch Creation & Management</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/branch-interest-fees-limits">Branch Interest, Fees & Limits</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/branch-reporting-monitoring">Branch Reporting & Monitoring</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/customer-profile-management">Customer Profile Management</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/customer-accounts-management">Customer Accounts Management</Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/customer-risk-compliance">Customer Risk & Compliance</Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link to="/parent-products">Parent Products</Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link to="/sub-product-creation">Sub Product Creation</Link>
            </Menu.Item>
            <Menu.Item key="14">
              <Link to="/loan-specific-configurations">Loan-Specific Configurations</Link>
            </Menu.Item>
            <Menu.Item key="15">
              <Link to="/deposit-account-configurations">Deposit/Account Configurations</Link>
            </Menu.Item>
            <Menu.Item key="16">
              <Link to="/user-roles">User Roles</Link>
            </Menu.Item>
            <Menu.Item key="17">
              <Link to="/permissions-settings">Permissions Settings</Link>
            </Menu.Item>
            <Menu.Item key="18">
              <Link to="/user-authentication">User Authentication</Link>
            </Menu.Item>
            <Menu.Item key="19">
              <Link to="/notification-types">Notification Types</Link>
            </Menu.Item>
            <Menu.Item key="20">
              <Link to="/notification-templates">Notification Templates</Link>
            </Menu.Item>
            <Menu.Item key="21">
              <Link to="/scheduling-automation">Scheduling & Automation</Link>
            </Menu.Item>
            <Menu.Item key="22">
              <Link to="/document-management">Document Management</Link>
            </Menu.Item>
            <Menu.Item key="23">
              <Link to="/document-templates">Document Templates</Link>
            </Menu.Item>
            <Menu.Item key="24">
              <Link to="/document-security">Document Security</Link>
            </Menu.Item>
            <Menu.Item key="25">
              <Link to="/api-access-control">API Access Control</Link>
            </Menu.Item>
            <Menu.Item key="26">
              <Link to="/core-api-functions">Core API Functions</Link>
            </Menu.Item>
            <Menu.Item key="27">
              <Link to="/third-party-integration">Third-Party Integration</Link>
            </Menu.Item>
            <Menu.Item key="28">
              <Link to="/monitoring-analytics">Monitoring & Analytics</Link>
            </Menu.Item>
            <Menu.Item key="29">
              <Link to="/product-specific-settings">Product Specific Settings</Link>
            </Menu.Item>
            <Menu.Item key="30">
              <Link to="/audit-logs">Audit Logs</Link>
            </Menu.Item>
            <Menu.Item key="31">
              <Link to="/security-compliance">Security & Compliance</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/" element={<GeneralBankConfiguration />} />
                <Route path="/interest-settings" element={<InterestSettings />} />
                <Route path="/fees-charges-settings" element={<FeesChargesSettings />} />
                <Route path="/limits-settings" element={<LimitsSettings />} />
                <Route path="/miscellaneous-settings" element={<MiscellaneousSettings />} />
                <Route path="/branch-creation-management" element={<BranchCreationManagement />} />
                <Route path="/branch-interest-fees-limits" element={<BranchInterestFeesLimits />} />
                <Route path="/branch-reporting-monitoring" element={<BranchReportingMonitoring />} />
                <Route path="/customer-profile-management" element={<CustomerProfileManagement />} />
                <Route path="/customer-accounts-management" element={<CustomerAccountsManagement />} />
                <Route path="/customer-risk-compliance" element={<CustomerRiskCompliance />} />
                <Route path="/parent-products" element={<ParentProducts />} />
                <Route path="/sub-product-creation" element={<SubProductCreation />} />
                <Route path="/loan-specific-configurations" element={<LoanSpecificConfigurations />} />
                <Route path="/deposit-account-configurations" element={<DepositAccountConfigurations />} />
                <Route path="/user-roles" element={<UserRoles />} />
                <Route path="/permissions-settings" element={<PermissionsSettings />} />
                <Route path="/user-authentication" element={<UserAuthentication />} />
                <Route path="/notification-types" element={<NotificationTypes />} />
                <Route path="/notification-templates" element={<NotificationTemplates />} />
                <Route path="/scheduling-automation" element={<SchedulingAutomation />} />
                <Route path="/document-management" element={<DocumentManagement />} />
                <Route path="/document-templates" element={<DocumentTemplates />} />
                <Route path="/document-security" element={<DocumentSecurity />} />
                <Route path="/api-access-control" element={<APIAccessControl />} />
                <Route path="/core-api-functions" element={<CoreAPIFunctions />} />
                <Route path="/third-party-integration" element={<ThirdPartyIntegration />} />
                <Route path="/monitoring-analytics" element={<MonitoringAnalytics />} />
                <Route path="/product-specific-settings" element={<ProductSpecificSettings />} />
                <Route path="/audit-logs" element={<AuditLogs />} />
                <Route path="/security-compliance" element={<SecurityCompliance />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Bank Management System ©2024 Created by You
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
