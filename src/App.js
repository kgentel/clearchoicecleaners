import React from 'react';
import './App.css';
import logoDark from './assets/logo/logoDark.png';

const App = () => {
  return (
    <div>
      <h2 className="primary-color" >Coming Soon...</h2>
      <img 
        src={logoDark} 
        alt="Clear Choice Cleaners"
        style={{height: '300px'}}
       />
    </div>
  );
}

export default App;

