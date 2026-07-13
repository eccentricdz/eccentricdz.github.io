import React from 'react';
import './Toggle.scss';

export default class Toggle extends React.Component {
  render() {
    // The switch position is derived from the active color mode so it always
    // reflects the real theme rather than tracking clicks independently.
    const switchPosition = this.props.isDark ? "right" : "left"
    return (
      <div className={`${switchPosition} toggle-container`} onClick={this.props.handleToggle}>
        <div className="toggle-switch"></div>
      </div>
    )
  }
}