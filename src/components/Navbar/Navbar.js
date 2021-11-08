import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import {faUser, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLaptopCode); 
library.add(faTwitter);
library.add(faLinkedin);
library.add(faUser);


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isNavVisible: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }
  toggleNavigation() {
    this.setState(prevState => ({isNavVisible: 
      !prevState.isNavVisible
    }));
  }
  render() {

    const { isNavVisible } = this.state;
    return(
      <div className="Navbar">
        <div id="Navbar-button-name-container">
          <div id="Navbar-button" onClick={this.toggleNavigation}>
            <div className="Navbar-button-line"></div>
            <div className="Navbar-button-line"></div>
            <div className="Navbar-button-line"></div>
          </div>
          <div id="Navbar-name-container">
            <h2 id="Navbar-name">Kevin San Gabriel</h2>
          </div>
        </div>
        <nav id="navigation" className={isNavVisible ? "shown" : "hidden"}>
          <section id="Navbar-bio">
            <img id="Navbar-bio-photo" src="./images/bio_photo_placeholder2.jpeg" height="200" width="200" alt="profile_picture"></img>
            <p id="Navbar-bio-description">Hi, my name is Kevin San Gabriel and I'm a junior front-end web developer.  Welcome to my personal website!</p>
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
                  <FontAwesomeIcon icon={['fas', 'user']} size="2x" color="white" fixedWidth/>
                  <div>
                    <h3>About Me</h3>
                  </div>
                </Link>
              </li>
              <li className="Navbar-nav-item">
                <Link to="contact">
                  <FontAwesomeIcon icon={['fas', 'laptop-code']} size="2x" color="white" fixedWidth/>
                  <div>
                    <h3>Portfolio</h3>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </nav>   
      </div>
    );
  }
  
}

export default Navbar;