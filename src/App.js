import React from 'react';
import './App.scss';
import Link from './components/Link';
import Rotator from './components/Rotator';
import ContentToggle from './components/ContentToggle';
import Toggle from './components/Toggle';
import About from './components/About';
import Work from './components/Work';
import Curtain from './components/Curtain';
import Resume from './documents/resume.pdf';
import ReactGA from 'react-ga';

export function logReactEvent(eventData) {
  ReactGA.event(eventData)
} 

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // represents the color mode of the application
    this.state = {
      mode: "light",
      content: "work",
      showCurtain: false
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.contentToggleHandler = this.contentToggleHandler.bind(this)
    this.logUserAction = this.logUserAction.bind(this)
  }

  initializeReactGA() {
    ReactGA.initialize('UA-104943545-2');
    ReactGA.pageview('/homepage');
  }

  logUserAction(action, label) {
    logReactEvent({
      category: "User Action", action, label
    })
  }

  // toggle the dark mode
  toggleMode() {
    this.setState((state, props) => {
      const mode = state.mode === "light" ? "dark" : "light"
      this.logUserAction('Dark Mode Toggle', mode);
      return { mode }
    })
  }

  contentToggleHandler(content) {
    this.setState({showCurtain: true})
    setTimeout(() => {
      this.logUserAction('Content Toggle', content);
      this.setState({ content, showCurtain: false })
    }, 500)
  }

  componentDidMount() {
    this.initializeReactGA();
  }

  render() {
    return (
      <div className={`${this.state.mode} App`}>
        <div className="left-grid">
          {/* grid lines */}
          <div className="grid-lines" id="left-grid-line-1"></div>
          <div className="grid-lines" id="left-grid-line-2"></div>
          {/* grid lines */}

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
                <Link href="https://www.behance.net/eccentricdz" id="behance">Behance</Link>
                <Link href="https://dribbble.com/eccentricdz" id="dribbble">Dribbble</Link>
                <Link href="https://github.com/eccentricdz" id="github">Github</Link>
              </section>
              <section className="account-links-2">
                <Link href="https://www.instagram.com/createdbyrahul/" id="instagram">Instagram</Link>
                <Link href="https://www.linkedin.com/in/simplyrahul93/" id="linkedin">Linkedin</Link>
                <Link href="https://soundcloud.com/rahul-agarwal-397883738" id="soundcloud">Soundcloud</Link>
              </section>
            </div>
            <div className="left-grid-2-3">
              <Link href={Resume} id="resume-bottom">Resume</Link>
            </div>
          </div>
        </div>
        <div className="right-grid">
          {/* grid lines */}
          <div className="grid-lines" id="right-grid-line-1"></div>
          <div className="grid-lines" id="right-grid-line-2"></div>
          <div className="grid-lines" id="right-grid-line-3"></div>
          {/* grid lines */}

          <div className="right-grid-1">
            <ContentToggle initialContent={this.state.content} contentToggleHandler={this.contentToggleHandler}></ContentToggle>
          </div>
          <div className="right-grid-2">
            {this.state.showCurtain ? <Curtain shouldClose></Curtain> : null}
            {(this.state.content === "about")
                ? <About></About>
                : <Work clickHandler={(id) => this.logUserAction("Project Click", id)}></Work>
            }
          </div>

          <footer>
            {/* <div className="left">Built with ❤ during the COVID-19 lockdown.</div> */}
            Stay home, <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">stay informed,</a> stay safe!
          </footer>
        </div>
      </div>
    );
  }
}

