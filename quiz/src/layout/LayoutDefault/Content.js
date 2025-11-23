import { Flex, Layout } from 'antd';
import './LayoutDefault.scss';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const ContentApp = () => {
  return (
    <>
      <Content className='content'>
        <div className='container'>
          <Outlet />
        </div>
      </Content>
    </>
  );
};