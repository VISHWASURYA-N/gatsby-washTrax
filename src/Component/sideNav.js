
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
  } 
  from "@ant-design/icons";
  import { Menu, Button } from 'antd';
  import React from 'react';
import { sidenav } from "../../data/navbarData/headerbarMenu";
const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 ,height:"100vh",position:"absolute",top:"0px"}}>
        <Button type="primary"  onClick={this.toggleCollapsed} style={{ marginBottom: 16 ,position:"relative",top:"17px",left:"110px",color:"black",background:"white"}}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          style={{height:"100vh"}}
        >
          {sidenav.map((nav,index)=>(
          <Menu.Item key={index.toString()} icon={nav.icon}>
          {nav.name}
         </Menu.Item>

          ))}

        </Menu>
      </div>
    );
  }
}
export default Navbar