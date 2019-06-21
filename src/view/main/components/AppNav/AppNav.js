import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;

class AppNav extends Component {
  constructor(props) {
    super(props);
    const openList = sessionStorage.getItem('navOpenList');
    const selectList = sessionStorage.getItem('navSelectList');
    this.state = {
      openList: openList ? JSON.parse(openList) : [],
      selectList: selectList ? JSON.parse(selectList) : []
    }
  }

  render () {
    const menus = this.getMenus(this.props.routes);
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" openKeys={this.state.openList} selectedKeys={this.state.selectList} onOpenChange={this.openHandler} onSelect={this.selectHandler}>
          {menus}
        </Menu>
      </Sider>
    )
  }
 // 递归遍历菜单
  getMenus = (routes) => {
    return routes.map(item => {
      if (!item.notMenu) {
        if (item.children && item.children.length) {
          const title = (
            <span>
              <Icon type="user"/>
              <span>{item.title}</span>
            </span>
          )
          return (
            <Menu.SubMenu key={item.path} title={title}>
              {this.getMenus(item.children)}
            </Menu.SubMenu>
          )
        } else {
          return (
            <Menu.Item key={item.path} onClick={() => this.menuItemHandler(item.path)}>
              <Icon type='user'/>
              <span>{item.title}</span>
            </Menu.Item>
          )
        }
      } else {
        return null;
      }
    })
  }

  // 菜单状态
  openHandler = (openList) => {
    this.setState({
      openList: openList
    })
    sessionStorage.setItem('navOpenList', JSON.stringify(openList));
  }
  selectHandler = (config) => {
    this.setState({
      selectList: config.selectedKeys
    })
    sessionStorage.setItem('navSelectList', JSON.stringify(config.selectedKeys));
  }
  // 路由跳转
  menuItemHandler = (url) => {
    this.props.history.push(url);
  }
}

function mapStateToProps (state) {
  return state.layout;
}

export default connect(mapStateToProps)(withRouter(AppNav));
