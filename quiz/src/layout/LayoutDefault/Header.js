import { Button, Flex, Layout, Space } from 'antd';
import './LayoutDefault.scss';
import { NavLink } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const HeaderApp = () => {
  return (
    <>
      <Header className='header'>
        <div className='container'>
          <NavLink to="/">
            <h2>Quiz</h2>
          </NavLink>

          <div className='nav-wrap'>
            <NavLink to="/">Home</NavLink>
          </div>

          <Space size="middle">
            <NavLink to="/login">
              <Button>Login</Button></NavLink>
            <NavLink to="/register">
              <Button>Register</Button></NavLink>
          </Space>
        </div>
      </Header>
    </>
  );
};