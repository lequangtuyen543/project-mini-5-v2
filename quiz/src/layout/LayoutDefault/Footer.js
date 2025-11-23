import { Flex, Layout } from 'antd';
import './LayoutDefault.scss';
import { NavLink } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const FooterApp = () => {
  return (
    <>
      <Footer className='footer'>
        <div className='container'>
          Copyright @ 2025 by NakaiSoft
        </div>
      </Footer>
    </>
  );
};