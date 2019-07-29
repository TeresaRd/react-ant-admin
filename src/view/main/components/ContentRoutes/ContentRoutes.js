import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import GlobalComponent from './RouterComponent';

const { Content } = Layout;

class ContentRoutes extends Component {
  getComponent = (importComponent, route) => {
    class AsyncComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          component: null
        }
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
        return C ? <GlobalComponent openKeys={route.keys}><C {...this.props} /></GlobalComponent> : null;
      }
    }
    return AsyncComponent;
  };

  render() {
    const routes = this.props.routes || [];
    console.log(this.props.setOpenKeys)
    const _router = this.getRouter(routes, [], true);
    return (
      <Content className="pd-10 app-content">
        <Switch>
          {_router}
        </Switch>
      </Content>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
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
               const Comp = this.getComponent(() => import('_v/' + item.component), item);
               return <Comp {...props}/>
             }}
             key={item.path}
          />
        )
      }
    });
    return result;
  }
}

export default withRouter(ContentRoutes);
