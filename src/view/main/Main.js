import React, { Component } from 'react';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import ContentRoutes from './components/ContentRoutes';
import {setOpenKeys} from "../../actions/layout";

class Main extends Component {

  render () {
    const routes = this.props.routes || [];
    return (
      <Layout className="app">
        <Spin className="page-spin" tip="pages is loading..." spinning={!routes.length} delay={200} />
        <AppNav/>
        <Layout className="relative">
          <AppHeader />
          <ContentRoutes routes={this.props.routes} setOpenKyes={this.props.setOpenKeys}/>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return state.layout;
}
function mapDispatchToProps(dispatch) {
  return {
    setOpenKeys(keys) {
      dispatch(setOpenKeys(keys));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
