import { Layout } from 'antd';
import './LayoutDefault.scss';
import { HeaderApp } from './Header';
import { FooterApp } from './Footer';
import { ContentApp } from './Content';

export const LayoutDefault = () => {
  return (
    <>
      <Layout className='layout-default'>
        <HeaderApp />
        <ContentApp />
        <FooterApp />
      </Layout>
    </>
  );
};