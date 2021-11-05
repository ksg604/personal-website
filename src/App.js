import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './parts/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header/>
        </main>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </div>
    </Router>
  );
}
