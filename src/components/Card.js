import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card pd-15 bgfff">{this.props.children}</div>
    )
  }
}
