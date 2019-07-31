import React, { Component } from 'react';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import ContentRoutes from './components/ContentRoutes';
import {router} from "../../config/router";
import {initRoute} from "../../actions/layout";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: []
    }
  }

  render () {
    const routes = this.props.routes || [];
    return (
      <Layout className="app">
        <Spin className="page-spin" tip="pages is loading..." spinning={!routes.length} delay={200} />
        <AppNav openKeys={this.state.openKeys} selectedKeys={this.state.selectedKeys} setKeys={this.setKeys}/>
        <Layout className="relative">
          <AppHeader />
          <ContentRoutes routes={this.props.routes} setKeys={this.setKeys}/>
        </Layout>
      </Layout>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.initRoutes(router);
    }, 2000)
  }

  setKeys = (openKeys, selectedKeys, flag) => {
    if (selectedKeys[0] != this.state.selectedKeys[0] || flag) {
      this.setState({
        openKeys,
        selectedKeys
      })
    }
  };

}

function mapStateToProps(state) {
  return {
      routes: state.layout.routes
  };
}

function mapDispatch(dispatch) {
    return {
        initRoutes(routes) {
            dispatch(initRoute(routes))
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(Main);
