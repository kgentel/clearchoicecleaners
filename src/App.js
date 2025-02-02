import React from 'react';
import './App.css';
import logoDark from './assets/logo/logoDark.png';

const App = () => {
  return (
    <div>
      <h2 style={{marginTop: '150px'}}>Closed for cleaning; coming soon!</h2>
      <img 
        src={logoDark} 
        alt="Clear Choice Cleaners"
        style={{height: '300px'}}
       />
    </div>
  );
}

export default App;

