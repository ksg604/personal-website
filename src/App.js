import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './parts/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isDarkMode: false};
    this.darkModeCallback = this.darkModeCallback.bind(this);
  }

  darkModeCallback(isDarkMode) {
    this.setState(() => ({ isDarkMode: isDarkMode }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <main className={this.state.isDarkMode ? "dark-mode" : ""}>
            <Header setDarkMode={this.darkModeCallback}/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
