import {Component} from "react";
import React from "react";

export const setTitle = (title) => {
  document.title = title;
}

export const getComponent = (importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      })
    }
    render() {
      const C = this.state.component;
      return C ? <C /> : null;
    }
  }
  return AsyncComponent;
}
