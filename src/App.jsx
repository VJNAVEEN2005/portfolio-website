import React from 'react';
import logo from './Logo_vjn.png';
import './App.css';
import Social from './components/socialmedia/Social';

function App() {
  return (
    <div className="App">

      <div className='row1'>
        <div className='green'>
          <img src={logo} className='Logo' />
        </div>
        <div className='yellow'></div>
      </div>

      <div className='row3'>

        <div className='column2'>
          <div className='about'>

          </div>
          <div className='blue'>
            <Social className="social_blue" />
          </div>

        </div>

        <div className='column1'>
          <div className='row2'>
            <div className='purple'></div>
            <div className='red'></div>
          </div>

          <div className='pink'></div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
