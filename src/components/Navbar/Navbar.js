import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import {faUser, faLaptopCode, faFileAlt, faEnvelopeOpenText, faPaperPlane, faAdjust} from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLaptopCode, faTwitter, faLinkedin, faUser, faFileAlt, faEnvelopeOpenText, faPaperPlane, faAdjust); 

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isNavVisible: false, isDarkMode: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }
  toggleNavigation() {
    this.setState(prevState => ({isNavVisible: 
      !prevState.isNavVisible
    }));
  }

  toggleDarkMode() {
    this.setState(prevState => ({isDarkMode:
      !prevState.isDarkMode
    }));
    this.props.setDarkMode(this.state.isDarkMode);
  }
  render() {
    return(
      <div className="Navbar">
        <div id="Navbar-button-name-container">
          <div id="Navbar-button" onClick={this.toggleNavigation}>
            <div className="Navbar-button-line"></div>
            <div className="Navbar-button-line"></div>
            <div className="Navbar-button-line"></div>
          </div>
          <div id="Navbar-name-container">
            <h2 id="Navbar-name" className="white-text">Kevin San Gabriel</h2>
          </div>
        </div>
        <nav id="navigation" className={this.state.isNavVisible ? "shown" : "hidden"}>
          <section id="Navbar-bio">
            <img id="Navbar-bio-photo" src="./images/bio_photo_placeholder2.jpeg" height="200" width="200" alt="profile_picture"></img>
            <p id="Navbar-bio-description" className="white-text">Hi, my name is Kevin San Gabriel and I'm a junior front-end web developer.  Welcome to my personal website!</p>
            <ul id="Navbar-social-list">
              <li className="Navbar-social-item">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="white"/>
              </li>
              <li className="Navbar-social-item">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="white"/>
              </li>
              <li className="Navbar-social-item">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="white"/>
              </li>
            </ul>
          </section>
          <hr></hr>
          <section id="Navbar-nav-link-container">
            <ul id="Navbar-nav-links">
              <li className="Navbar-nav-item">
                <Link to="/about"> 
                  <FontAwesomeIcon icon={['fas', 'user']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="white-text">About Me</h3>
                  </div>
                </Link>
              </li>
              <li className="Navbar-nav-item">
                <Link to="/portfolio">
                  <FontAwesomeIcon icon={['fas', 'laptop-code']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="white-text">Portfolio</h3>
                  </div>
                </Link>
              </li>
              <li className="Navbar-nav-item">
                <Link to="/resume">
                  <FontAwesomeIcon icon={['fas', 'file-alt']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="white-text">Resume</h3>
                  </div>
                </Link> 
              </li>
              <li className="Navbar-nav-item">
                <Link to="/contact">
                  <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="white-text">Contact</h3>
                  </div>
                </Link> 
              </li>
            </ul>
            <div id="hire-me-button">
              <Link to="/contact">
                <div id="hire-me-container">
                  <FontAwesomeIcon icon={['fas', 'paper-plane']} size="lg" color="white"/>
                  <div>
                    <h3 className="white-text">Hire Me</h3>
                  </div>
                </div>
              </Link>
            </div>
          </section>
          <hr></hr>
          <section id="Navbar-dark-mode-container">
            <div>
              <FontAwesomeIcon icon={['fas', 'adjust']} size="lg" color="white"/>
              <h4 id="dark-mode-title" className="white-text">
                Dark Mode
              </h4>
            </div>
            <input id="dark-mode-toggle"  type="checkbox"></input>
            <label id="dark-mode-toggle-label" htmlFor="dark-mode-toggle" onClick={this.toggleDarkMode}></label>
          </section>
        </nav>   
      </div>
    );
  }
  
}

export default Navbar;