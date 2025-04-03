import type {MenuProps} from "antd";
import {Link} from "react-router-dom";
import {DashboardOutlined} from "@ant-design/icons";

export const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardOutlined/>,
  },
]
