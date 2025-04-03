import {Layout} from "antd";
import {AppLogo} from "@components/logo/AppLogo";
import {AppMenu} from "@components/layout/sidebar/menu/Menu";
import {type ICollapsedProps} from "@/interfaces/sidebar/interface";

const {Sider} = Layout;

export const AppSidebar = ({collapsed, setCollapsed}: ICollapsedProps) => {
  return (
    <Sider
      className="!bg-primary"
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onBreakpoint={(isCollapsed) => {
        if (isCollapsed) {
          setCollapsed(true);
        } else {
          setCollapsed(false);
        }
      }}
    >
      <AppLogo/>
      <AppMenu/>
    </Sider>
  );
};
