import React from 'react';
import './Rotator.css';

export default class Rotator extends React.Component {
  render() {
    return (
      <div className="my-rotator">
        {
          this.props.elements.map(element => <p className="rotating-element">{element}</p>)
        }
      </div>
    )
  }
}