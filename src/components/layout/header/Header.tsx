import {Button, Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import type {ICollapsedProps} from "@/interfaces/sidebar/interface";

const {Header,} = Layout;

export const AppHeader = ({collapsed, setCollapsed}: ICollapsedProps) => {
  return (
    <Header className="!bg-primary">
      <Button
        className="!text-fill w-16 h-16 rounded-lg hover:!text-secondary"
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        onClick={() => setCollapsed(!collapsed)}
        size="large"
      />
    </Header>
  )
}
