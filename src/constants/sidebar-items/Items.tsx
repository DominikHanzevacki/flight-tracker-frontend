import type {MenuProps} from "antd";
import {Link} from "react-router-dom";
import {CloudOutlined, DashboardOutlined, FlagOutlined} from "@ant-design/icons";

export const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardOutlined/>,
  },
  {
    key: 'airlines',
    label: <Link to="/airlines">Airlines</Link>,
    icon: <CloudOutlined/>
  },
  {
    key: 'airports',
    label: <Link to="/airports">Airports</Link>,
    icon: <FlagOutlined/>
  },
]
