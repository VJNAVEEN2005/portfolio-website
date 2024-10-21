import React from 'react';
import logo from './Logo_vjn.png';
import './App.css';
import Social from './components/socialmedia/Social';
import About from './components/text/About';
import Contact from './components/text/Contact';
import Project from './components/text/Project';
import Resume from './components/text/Resume';
import Myskills from './components/text/Myskills';
import Aboutbox from './components/aboutme/Aboutbox';
import { Routes,Route } from 'react-router-dom'
import Contact_click from './page/contact/contact_click';
import Home from './Home';
import About_click from './page/about/About_click';
import Resume_click from './page/resume/Resume_click';
import Project_click from './page/projects/Project_click';
import Myskills_click from './page/myskills/Myskills_click';

function App() {
  return (

    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact_click/>}/>
    <Route path='/about' element={<About_click/>}/>
    <Route path='/resume' element={<Resume_click/>}/>
    <Route path='/project' element={<Project_click/>}/>  
    <Route path='/myskills' element={<Myskills_click/>}/>  
   </Routes>
   
    </>
    
  );
}

export default App;
