import React, {Component} from "react";
import { withRouter } from 'react-router-dom';

class RouterComponent extends Component {
  render() {
    return <>
      {this.props.children}
    </>
  }
}

export default withRouter(RouterComponent);
