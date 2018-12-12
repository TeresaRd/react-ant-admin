import React, { Component } from 'react';
import Card from '@/Card';
import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <Card>
        <Button className="mr-10" onClick={() => {this.props.history.push('/home1')}}>home1</Button>
        <Button className="mr-10" onClick={() => {this.props.history.push('/home2')}}>home2</Button>
        <Button onClick={() => {this.props.history.goBack()}}>back</Button>
      </Card>
    )
  }
}

export default Home;
