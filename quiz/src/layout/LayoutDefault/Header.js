import { Button, Flex, Layout, Space } from 'antd';
import './LayoutDefault.scss';
import { NavLink } from 'react-router-dom';
import { getCookie } from '../../helpers/cookie';
import { useSelector } from 'react-redux';
import { DashboardOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export const HeaderApp = () => {
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);

  return (
    <>
      <Header className='header'>
        <div className='container'>
          <NavLink to="/">
            <h2 className='site-name'>Quiz</h2>
          </NavLink>

          <Space className='nav-wrap'>
            <NavLink to="/">
              <Button className='btn1'>Home</Button>
            </NavLink>
            {token && (
              <>
                <NavLink to="/topic">
                  <Button className='btn1'>Topics</Button>
                </NavLink>
                <NavLink to="/answers">
                <Button className='btn1'>Answers</Button>
                </NavLink>
              </>
            )}
          </Space>

          {token ? (
            <Space size="middle">
              <NavLink to="/dashboard">
                <Button icon={<DashboardOutlined />}>Dashboard</Button></NavLink>
              <NavLink to="/logout">
                <Button icon={<LogoutOutlined />}>Logout</Button></NavLink>
            </Space>
          ) : (
            <Space size="middle">
              <NavLink to="/login">
                <Button icon={<LoginOutlined />}>Login</Button></NavLink>
              <NavLink to="/register">
                <Button icon={<UserOutlined />}>Register</Button></NavLink>
            </Space>
          )}
        </div>
      </Header>
    </>
  );
};