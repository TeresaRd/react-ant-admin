import React, {Component} from "react";
import { withRouter } from 'react-router-dom';

class RouterComponent extends Component {
  render() {
    const path = this.props.match.path;
    console.log(this.props.setOpenKeys)
    return <>
      {this.props.children}
    </>
  }
}

export default withRouter(RouterComponent);
