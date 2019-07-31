import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from "../../../../config/router";

const { Content } = Layout;

class ContentRoutes extends Component {

  render() {
    const routes = this.props.routes || [];
    const _router = this.getRouter(routes, [], true);
    return (
      <Content className="pd-10 app-content">
        <Switch>
          {_router}
        </Switch>
      </Content>
    )
  }

  shouldComponentUpdate() {
    if (this.props.routes.length > routes.length) {
      return false;
    }
    return true;
  }

  getRouter = (routes, result, flag) => {
    routes.forEach(item => {
      const children = Array.isArray(item.children)?item.children:[];
      if (children && children.length) {
        this.getRouter(children, result);
      } else {
        result.push(
          <Route path={item.path}
             render={(props) => {
               document.title = item.title;
               const selectedKeys = [item.path];
               const openKeys = item.keys.slice(0, item.keys.length-1);
               this.props.setKeys(openKeys, selectedKeys);
               const Comp = this.getComponent(() => import('_v/' + item.component));
               return <Comp {...props}/>
             }}
             key={item.path}
          />
        )
      }
    });
    return result;
  };

  getComponent = (importComponent) => {
    class AsyncComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          component: null
        };
      }
      async componentDidMount() {
        this._isMounted = true;
        const { default: component } = await importComponent();
        if (this._isMounted) {
          this.setState({
            component: component
          })
        }
      }
      componentWillUnmount() {
        this._isMounted = false;
      }
      render() {
        const C = this.state.component;
        return C ? <C {...this.props} /> : null;
      }
    }
    return AsyncComponent;
  };
}

export default withRouter(ContentRoutes);
