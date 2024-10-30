import React from 'react'
import logo from './Logo_vjn.png';
import './App.css';
import Social from './components/socialmedia/Social';
import About from './components/text/About';
import Contact from './components/text/Contact';
import Project from './components/text/Project';
import Resume from './components/text/Resume';
import Myskills from './components/text/Myskills';
import Aboutbox from './components/aboutme/Aboutbox';
import ParticlesComponent from './components/particles';

function Home() {
  return (

    <div className="App">


      <ParticlesComponent id="particles"/>


      <div className='logo_div'>
        <img src={logo} className='Logo' />
      </div>

      <div className='Contact'>
        <Contact />
      </div>





      <div className='about'>
        <About />
      </div>

      <div className='social'>
        <Social />
      </div>





      <div className='Aboutbox'>
        <Aboutbox />
      </div>


      <div className='Project'>
        <Project />
        <br /><br /><br /><br /><br /><br />
        <Resume />
      </div>


      <div className='Myskills'>
        <Myskills />
      </div>





    </div>

  )
}

export default Home