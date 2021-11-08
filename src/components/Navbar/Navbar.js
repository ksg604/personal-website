import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>   
      </div>
    );
  }
  
}

export default Navbar;