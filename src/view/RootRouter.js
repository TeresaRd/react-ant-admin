import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './main/Main';
import { initRoute } from './../actions/layout';
import {router} from "../config/router";

class RootRouter extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.initRoutes(router);
    }, 2000)
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Main}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    initRoutes(routes) {
      dispatch(initRoute(routes));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
