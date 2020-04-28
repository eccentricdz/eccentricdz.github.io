import React from 'react';
import './ContentToggle.scss'

export default class ContentToggle extends React.Component {
    constructor(props) {
        super(props)
        // represents the content mode of the toggle component
        this.state = {
          content: this.props.initialContent
        }
      }

      setContent(content) {
        this.setState((state) => {
          if (state.content !== content) {
            this.props.contentToggleHandler(content);
            return { content }
          }
        })
      }

      render() {
          return (
              <section className={`${this.state.content}-active content-toggle`}>
                  <div className="content-toggle-button" id="about" onClick={() => this.setContent("about")}>About</div>
                  <div className="content-toggle-button" id="work" onClick={() => this.setContent("work")}>Work</div>
                  <div className="content-toggle-divider">
                    <div className="content-toggle-shifter"></div>
                  </div>
              </section>
          )
      }
}