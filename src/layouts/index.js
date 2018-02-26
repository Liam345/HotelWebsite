import React from 'react';
import { Layout, Menu, Icon } from 'antd';
//import logo from './ozihouse_group_logo.jpg';
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
import Link,{ navigateTo } from 'gatsby-link';
import MenuBar from '../components/MenuBar';

const handleClick = (e)=>{
  console.log('click',e);

  
}
const MainApp = ({children}) => (
  <Layout>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <h1> 
          <MenuBar/>
          </h1>
        {children()}

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ozihouse Group©2016
      </Footer>
    </Layout>
  </Layout>
);

export default MainApp;