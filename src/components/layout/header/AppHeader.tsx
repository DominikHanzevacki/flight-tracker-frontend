import {Button, Flex, Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import type {ICollapsedProps} from "@interfaces/layout/sidebar/interface";
import {AppTranslations} from "@components/translations/AppTranslations";

const {Header} = Layout;

export const AppHeader = ({collapsed, setCollapsed}: ICollapsedProps) => {
  return (
    <Header className="!bg-primary">
      <Flex className="h-full" gap={32} justify="space-between" align="center">
        <Button
          className="!text-blue-dark w-16 h-16 rounded-lg hover:!text-blue-light"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          onClick={() => setCollapsed(!collapsed)}
          size="large"
        />
        <AppTranslations/>
      </Flex>
    </Header>
  )
}
