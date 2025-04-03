import {AppHeader} from "@components/layout/header/Header";
import {AppSidebar} from "@components/layout/sidebar/Sidebar";
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
