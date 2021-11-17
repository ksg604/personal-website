import './Header.css';
import Navbar from '../../components/Navbar/Navbar';
import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.darkModeCallback = this.darkModeCallback.bind(this);
  }

  darkModeCallback(isDarkMode) {
    this.props.setDarkMode(isDarkMode);
  }

  render() {
    return (
      <div className="Header">
        <Navbar setDarkMode={this.darkModeCallback}/>
      </div>
    );
  }
}

export default Header;