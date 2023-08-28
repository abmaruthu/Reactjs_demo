import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bottom from './components/Hero2';
import './App.css';
import Section from './components/Hero3';

function App () {
  return (
    <div className="App">
      <div><Header/></div>

      <div className='col-sm-7 conatiner'><Hero/></div>
  
      <div><Bottom/></div>
      
    </div>
  );
}

export default App;
