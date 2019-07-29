import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './main/Main';
import { initRoute } from './../actions/layout';
import {router} from "../config/router";

class RootRouter extends Component {

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

export default RootRouter;
