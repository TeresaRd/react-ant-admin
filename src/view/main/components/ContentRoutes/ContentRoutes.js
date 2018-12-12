import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const { Content } = Layout;

class ContentRoutes extends Component {
  getComponent = (importComponent) => {
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
        return C ? <C {...this.props} /> : null;
      }
    }
    return AsyncComponent;
  }

  render() {
    const routes = this.props.routes || [];
    const _router = this.getRouter(routes, [], true);
    return (
      <Content className="pd-10">
        <Switch>
          {_router}
        </Switch>
      </Content>
    )
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
               const Comp = this.getComponent(() => import('./../../../' + item.component));
               return <Comp {...props} />
             }}
             key={item.path} />
        )
      }
    });
    return result;
  }
}

function mapStateToProps (state) {
  return state.layout;
}

export default connect(mapStateToProps)(withRouter(ContentRoutes));
