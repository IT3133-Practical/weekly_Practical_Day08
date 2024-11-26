import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}
        <Routes>
          <Route path='/' elements={<Login/>}/>
          <Route path='/dash' elements={<Dashboard/>}/>
          {/* <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contactus/>}/> */}

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
