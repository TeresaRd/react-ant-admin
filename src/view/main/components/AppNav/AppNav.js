import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;

class AppNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openList: [],
      selectList: [],
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      openList: props.openKeys,
      selectList: props.selectedKeys
    })
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
        <Menu theme="dark" mode="inline" openKeys={this.props.openKeys} selectedKeys={this.props.selectedKeys} onOpenChange={this.openHandler} onSelect={this.selectHandler}>
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
          );
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
  };

  // 菜单状态
  openHandler = (openList) => {
    this.setState({
      openList: openList
    });
    this.props.setKeys(openList, this.state.selectList, true);
  };
  selectHandler = (config) => {
    this.setState({
      selectList: config.selectedKeys
    });
    this.props.setKeys(this.state.openList, config.selectedKeys);
  };
  // 路由跳转
  menuItemHandler = (url) => {
    this.props.history.push(url);
  }
}

function mapStateToProps (state) {
  return {
    routes: state.layout.routes
  };
}

export default connect(mapStateToProps)(withRouter(AppNav));
