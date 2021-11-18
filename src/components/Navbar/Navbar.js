import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import {faUser, faLaptopCode, faFileAlt, faEnvelopeOpenText, faPaperPlane, faAdjust} from '@fortawesome/free-solid-svg-icons';

library.add(faGithubAlt, faLaptopCode, faTwitter, faLinkedinIn, faUser, faFileAlt, faEnvelopeOpenText, faPaperPlane, faAdjust); 

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isNavVisible: false, isDarkModeToggled: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.handleNewPageOpen = this.handleNewPageOpen.bind(this);
  }
  toggleNavigation() {
    this.setState(prevState => ({isNavVisible: 
      !prevState.isNavVisible
    }));
  }

  toggleDarkMode() {
    this.setState(prevState => ({isDarkModeToggled:
      !prevState.isDarkModeToggled
    }), () => { this.props.setDarkMode(this.state.isDarkModeToggled); console.log(this.state.isDarkModeToggled); } );
  }

  handleNewPageOpen() {
    this.setState(() => ({isNavVisible: false}));
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
              <li>
                <FontAwesomeIcon icon={['fab', 'github-alt']} size="xl" color="#54B689" className="Navbar-social-icon"/>
              </li>
              <li>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="xl" color="#54B689" className="Navbar-social-icon"/>
              </li>
              <li>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="xl" color="#54B689" className="Navbar-social-icon"/>
              </li>
            </ul>
          </section>
          <hr></hr>
          <section id="Navbar-nav-link-container">
            <ul id="Navbar-nav-links">
              <li className="Navbar-nav-item">
                <Link to="/about" onClick={this.handleNewPageOpen}> 
                  <FontAwesomeIcon icon={['fas', 'user']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="grey-text nav-link">About Me</h3>
                  </div>
                </Link>
              </li>
              <li className="Navbar-nav-item">
                <Link to="/portfolio" onClick={this.handleNewPageOpen}>
                  <FontAwesomeIcon icon={['fas', 'laptop-code']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="grey-text nav-link">Portfolio</h3>
                  </div>
                </Link>
              </li>
              <li className="Navbar-nav-item">
                <Link to="/resume" onClick={this.handleNewPageOpen}>
                  <FontAwesomeIcon icon={['fas', 'file-alt']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="grey-text nav-link">Resume</h3>
                  </div>
                </Link> 
              </li>
              <li className="Navbar-nav-item">
                <Link to="/contact" onClick={this.handleNewPageOpen}>
                  <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size="2x" color="white" fixedWidth className="nav-link-icon"/>
                  <div>
                    <h3 className="grey-text nav-link">Contact</h3>
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