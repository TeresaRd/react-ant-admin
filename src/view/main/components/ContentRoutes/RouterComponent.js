import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import store from './../../../../store'
import {setOpenKeys} from "../../../../actions/layout";

class RouterComponent extends Component {
  render() {
    const path = this.props.match.path;
    return <>
      {this.props.children}
    </>
  }
}

export default withRouter(RouterComponent);
