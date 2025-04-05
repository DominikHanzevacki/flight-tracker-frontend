import {Button, Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import type {ICollapsedProps} from "@/interfaces/layout/sidebar/interface";

const {Header,} = Layout;

export const AppHeader = ({collapsed, setCollapsed}: ICollapsedProps) => {
  return (
    <Header className="!bg-primary">
      <Button
        className="!text-blue-dark w-16 h-16 rounded-lg hover:!text-blue-light"
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        onClick={() => setCollapsed(!collapsed)}
        size="large"
      />
    </Header>
  )
}
