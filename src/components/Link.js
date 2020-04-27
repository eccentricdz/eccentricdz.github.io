import React from "react";
import { logReactEvent } from "../App";
import "./Link.scss";

export default class Link extends React.Component {
  render() {
    return (
      <p>
        <a
          className="my-link"
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          id={this.props.id}
          onClick={() =>
            logReactEvent({
              category: "User Action",
              action: "Link Click",
              label: this.props.id,
            })
          }
        >
          {this.props.children}
        </a>
      </p>
    );
  }
}
