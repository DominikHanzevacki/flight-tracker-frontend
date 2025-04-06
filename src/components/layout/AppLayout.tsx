import {AppHeader} from "@components/layout/header/AppHeader";
import {AppSidebar} from "@components/layout/sidebar/AppSidebar";
import {Layout} from "antd";
import {AppContent} from "@components/layout/content/Content";
import {useState} from "react";

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="h-full">
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <AppContent/>
      </Layout>
    </Layout>)
}
