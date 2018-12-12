import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RootRouter from './view/RootRouter';
import 'antd/dist/antd.css';
import './assets/css/index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter></RootRouter>
      </Provider>
    );
  }
}

export default App;
