import { Flex, Layout } from 'antd';
import './LayoutDefault.scss';
import { NavLink } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const HeaderApp = () => {
  return (
    <>
      <Header className='header'>
        <div className='container'>
          <h1>Quiz</h1>
          <NavLink to="/">Home</NavLink>
        </div>
      </Header>
    </>
  );
};