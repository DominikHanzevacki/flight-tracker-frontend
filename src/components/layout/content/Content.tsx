import {Layout} from 'antd';
import {Outlet} from "react-router-dom";

const {Content} = Layout;

export const AppContent = () => {
  return (
    <Content className="p-6 bg-white h-full">
      <Outlet/>
    </Content>
  )
}
