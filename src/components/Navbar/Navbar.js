import './Navbar.css';
import { Link} from 'react-router-dom';

function Navbar(props) {
  return(
    <div className="Navbar">

      <div id="Navbar-button">
        <div className="Navbar-button-line"></div>
        <div className="Navbar-button-line"></div>
        <div className="Navbar-button-line"></div>
      </div>
      <nav className="hidden">
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

export default Navbar;