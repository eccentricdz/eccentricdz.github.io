import React from 'react';
import './App.css';
import Link from './components/Link';
import Rotator from './components/Rotator';
import Toggle from './components/Toggle';
import Resume from './documents/resume.pdf';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "light"
    }

    this.toggleMode = this.toggleMode.bind(this)
  }

  toggleMode() {
    this.setState((state, props) => {
      const mode = state.mode === "light" ? "dark" : "light"
      return { mode }
    })
  }

  render() {
    return (
      <div className={`${this.state.mode} App`}>
        <header>
          <section className="left">
            <Toggle handleToggle={this.toggleMode}></Toggle>
          </section>
          <section className="right">
            <Link href={Resume}>Resume</Link>
          </section>
        </header>
        <section className="primary">
            <p id="my-name">Rahul Agarwal</p>
            <Rotator elements={["Developer", "Designer", "Learner"]}></Rotator>
        </section>
        <footer>
          <section className="left">
            <p id="working">Currently working for Amazon <br /> in Seattle.</p>
          </section>
          <section className="right">
            <section className="account-links">
              <Link href="https://github.com/eccentricdz">Github</Link>
              <Link href="https://www.behance.net/eccentricdz">Behance</Link>
              <Link href="https://dribbble.com/eccentricdz">Dribbble</Link>
              <Link href="https://www.instagram.com/simplyrahul93/">Instagram</Link>
              <Link href="https://www.linkedin.com/in/simplyrahul93/">Linkedin</Link>
            </section>
          </section>
        </footer>
      </div>
    );
  }
}
