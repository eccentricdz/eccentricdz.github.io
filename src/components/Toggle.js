import React from 'react';
import './Toggle.scss';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPosition: "left"
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((state, props) => {
      const switchPosition = state.switchPosition === "left" ? "right" : "left"
      return { switchPosition }
    })

    this.props.handleToggle();
  }

  render() {
    return (
      <div className={`${this.state.switchPosition} toggle-container`} onClick={this.toggle}>
        <div className="toggle-switch"></div>
      </div>
    )
  }
}