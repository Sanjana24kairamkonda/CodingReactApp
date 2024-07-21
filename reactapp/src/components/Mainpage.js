import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css'; // Import the CSS file
import code from '../Assets/images.png'
import apt from '../Assets/2.png'
function  Mainpage(){
  const navigate=useNavigate()
  return (
    <div className="main-container">
      <div className="image-section left">
        <img src={code} alt="Left Image" />
        <div className="text-button">
          <h2>Improve and Analyze your coding skills</h2>
          <button onClick={()=>{navigate('/coding')}}>Start Coding</button>
        </div>
      </div>
      <div className="image-section right">
        <img src={apt} alt="Right Image" />
        <div className="text-button">
          <h2>Improve and Analyze your aptitude skills</h2>
          <button onClick={()=>navigate('/aptitude')}>Start Aptitude</button>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
