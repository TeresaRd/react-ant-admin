import React, { Component } from 'react';
import {Layout, Icon} from "antd";
import {toggleCollapsed} from "../../../../actions/layout";
import connect from "react-redux/es/connect/connect";

const { Header } = Layout;

class AppHeader extends Component {
  render () {
    return (
      <Header className="bgfff cursor pl-5 pr-15 app-header">
        <Icon
          className="trigger"
          type={this.props.layout.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggleCollapsed}
        />
      </Header>
    )
  }
}

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    toggleCollapsed() {
      dispatch(toggleCollapsed());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
