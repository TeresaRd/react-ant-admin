import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './main/Main';

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
