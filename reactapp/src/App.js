import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Home from './components/Home';
import Help from './components/Help';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Mainpage from './components/Mainpage'
import Aptitude from './components/Aptitude';
import Python from './components/quiz/Python';
import Play1 from './components/quiz/Play1'
import Daa from './components/quiz/Daa'
import Dbms from './components/quiz/Dbms'
import Dsa from './components/quiz/Dsa'
import Java from './components/quiz/Java'
import Coding from './Coding';
import Compiler from './components/Compiler';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" className='homepage'>Home</Link></li>
          <li><Link to="/login" className='login'>Login</Link></li>
          <li><Link to="/signup" className='signup'>Sign Up</Link></li>
        </ul>
        <ul>
          <li><Link to="/help" className='help'>Help</Link></li>
          <li><Link to="/contact" className='contact'>Contact</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/help' element={<Help />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mainpage' element={<Mainpage />} />
          <Route path='/aptitude' element={<Aptitude />} />
          <Route path="/Play1" element={<Play1/>}/>
      <Route path="/Daa" element={<Daa/>}/>
      <Route path="/Dbms" element={<Dbms/>}/>
      <Route path="/Dsa" element={<Dsa/>}/>
      <Route path="/Java" element={<Java/>}/>
      <Route path="/Python" element={<Python/>}/>
      <Route path='/coding' element={<Coding/>}/>
      <Route path='/compile' element={<Compiler/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
