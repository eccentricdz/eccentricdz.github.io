import React from 'react';
import './Link.css'

export default class Link extends React.Component {
  render() {
    return (
    <p>
      <a className="my-link" href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.children}</a>
    </p>
    )
  }
}