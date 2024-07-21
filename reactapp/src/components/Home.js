import React from "react";
import './Home.css';
import Code from '../Assets/images.png';
import Aptitude from '../Assets/2.png'
import iq from '../Assets/iq.png'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const handleclick=()=>{
     navigate('/signup')
  }
  return (
    <div className="home-container">
      <div className="motion-images">
        <div className="motion-image">
          <img
            src={Code}
            alt="Motion Image 1"
          />
          <button className="explore-button" onClick={handleclick}>Explore</button>
        </div>
        <div className="motion-image">
          <img
            src={iq}
            alt="Motion Image 2"
          />
          <button className="explore-button" onClick={handleclick}>Explore</button>
        </div>
        <div className="motion-image">
          <img
            src={Aptitude}
            alt="Motion Image 3"
          />
          <button className="explore-button" onClick={handleclick}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
