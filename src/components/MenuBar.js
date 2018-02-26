
import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from "gatsby-link";


class MenuBar extends React.Component {
  // state = {
  //   current: 'mail',
  // }
  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // }
  render() {
    return (
      <Menu
        style={{backgroundColor:'#BFBFBF'}}
        // onClick={this.handleClick}
        // selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
        <Link to="/Ozihouse/">OZIHOUSE </Link>
        </Menu.Item>
        <Menu.Item key="app" >
          <Link to="/Mission/">Who we are</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScDbWf-MCqdio6DQTb7hp674pSBgRYZQ4u-kBFCQLR1Osmj0A/formResponse" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Brochure Download</a>
        </Menu.Item>
        <Menu.Item key="students">
          Students Say 
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;