import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Navbar/>
        </main>
      </div>
    </Router>
  );
}
