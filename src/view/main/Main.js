import React, { Component } from 'react';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import ContentRoutes from './components/ContentRoutes';

class Main extends Component {

  render () {
    const routes = this.props.routes || [];
    return (
      <Layout className="app">
        <Spin className="page-spin" tip="pages is loading..." spinning={!!!routes.length} delay={200} />
        <AppNav/>
        <Layout>
          <AppHeader />
          <ContentRoutes />
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.layout.routes
  }
}

export default connect(mapStateToProps)(Main);
