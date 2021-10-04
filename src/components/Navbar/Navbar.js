import './Navbar.css';
import { Link, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';

function Navbar(props) {
  return(
    <div className="Navbar">
      <nav>
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

      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      
    </div>
  );
}

export default Navbar;