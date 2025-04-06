import type {MenuProps} from "antd";
import {Link} from "react-router-dom";
import {CloudOutlined, DashboardOutlined, FlagOutlined, GoogleOutlined} from "@ant-design/icons";

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
  {
    key: 'airports-live-location',
    label: <Link to="/airports-live-location">Airport live location</Link>,
    icon: <GoogleOutlined/>
  },
]
