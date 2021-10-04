import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './parts/Header/Header';

export default function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header/>
        </main>
      </div>
    </Router>
  );
}
