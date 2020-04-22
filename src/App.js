import React from 'react';
import './App.scss';
import Link from './components/Link';
import Rotator from './components/Rotator';
import ContentToggle from './components/ContentToggle';
import Toggle from './components/Toggle';
import About from './components/About';
import Work from './components/Work';
import Resume from './documents/resume.pdf';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // represents the color mode of the application
    this.state = {
      mode: "light",
      content: "work"
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.contentToggleHandler = this.contentToggleHandler.bind(this)
  }

  // toggle the dark mode
  toggleMode() {
    this.setState((state, props) => {
      const mode = state.mode === "light" ? "dark" : "light"
      return { mode }
    })
  }

  contentToggleHandler(content) {
    this.setState({ content })
  }

  render() {
    return (
      <div className={`${this.state.mode} App`}>
        <div className="left-grid">
          <div className="left-grid-1">
            <Toggle handleToggle={this.toggleMode}></Toggle>
            <Link href={Resume} id="resume-top">Resume</Link>
          </div>
          <div className="left-grid-2">
            <div className="left-grid-2-1">
              <section className="primary">
                <p id="my-name">Rahul Agarwal</p>
                <Rotator elements={["Developer", "Designer", "Learner"]} id="primary-rotator"></Rotator>
              </section>
            </div>
            <div className="left-grid-2-2">
              <section className="account-links-1">
                <Link href="https://www.behance.net/eccentricdz">Behance</Link>
                <Link href="https://dribbble.com/eccentricdz">Dribbble</Link>
                <Link href="https://github.com/eccentricdz">Github</Link>
              </section>
              <section className="account-links-2">
                <Link href="https://www.instagram.com/simplyrahul93/">Instagram</Link>
                <Link href="https://www.linkedin.com/in/simplyrahul93/">Linkedin</Link>
                <Link href="https://soundcloud.com/rahul-agarwal-397883738">Sound Cloud</Link>
              </section>
            </div>
            <div className="left-grid-2-3">
              <Link href={Resume} id="resume-bottom">Resume</Link>
            </div>
          </div>
        </div>
        <div className="right-grid">
          <div className="right-grid-1">
            <ContentToggle contentToggleHandler={this.contentToggleHandler}></ContentToggle>
          </div>
          <div className="right-grid-2">
            {(this.state.content === "about")
                ? <About></About>
                : <Work></Work>
            }
          </div>
        </div>
      </div>
    );
  }
}

