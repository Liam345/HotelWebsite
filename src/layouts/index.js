import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from './ozihouse_group_logo.jpg';
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
import MenuLink from '../components/MenuLink';
import Link,{ navigateTo } from 'gatsby-link';

const handleClick = (e)=>{
  console.log('click',e);

  
}
const MainApp = ({children}) => (
  <Layout>
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
        <Menu.Item key="Ozihouse">
        <span className="nav-text"><MenuLink to="/Ozihouse/">Ozihouse</MenuLink></span>
        </Menu.Item>
        <SubMenu key="Locations" title="Locations"> 
            <Menu.Item key="SY">
                <span className="nav-text"><Link to="/SY/">South Yarra</Link></span>
            </Menu.Item>
            <Menu.Item key="CW">
            <span className="nav-text"><Link to="/CW/">Collingwood</Link></span>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="Mission">
          <span className="nav-text"><Link to="/Mission/">Mission</Link></span>
        </Menu.Item>
        <Menu.Item key="Contact">
          <span className="nav-text"><Link to="/contact/">Contact</Link></span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        
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