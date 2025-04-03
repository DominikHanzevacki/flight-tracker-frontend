import {Menu} from "antd";
import {useLocation} from "react-router-dom";
import {items} from "@/constants/sidebar-items/Items";

export const AppMenu = () => {
  const location = useLocation();
  const selectedKey = location.pathname.substring(1);

  return (
    <Menu className="!bg-primary"
          mode="inline"
          items={items}
          defaultSelectedKeys={[selectedKey]}
    />
  )
}
