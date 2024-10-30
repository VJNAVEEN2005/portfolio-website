import React from 'react'
import './style.css'
import ptu_cgpa from './ptu_cgpa.png'
import todo from './todo.png'
import ParticlesComponent from '../../components/particles'

function Project_click() {
  return (
    <>
    <ParticlesComponent id="particles"/>
    <div className='backbutton'><a href="/">&#8249;</a></div>
      <div className='project-fixed'><h1>Project</h1></div>
      <div className='card-container'>

        <div className="card">

          <div className="card-body">
            <h5 className="card-title">PTU CGPA</h5>
            <p className="card-text"> Created a CGPA calculator using
              HTML, CSS, and JavaScript
              to compute CGPA
              based on input grades and credits. The project improved my problem-solving
              skills and provided a practical tool for students</p>
            
          </div>

          <div className='back-card-body'>
            <img src={ptu_cgpa} className='ptu_cgpa' />
            <p className="card-text">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>  
            </p>
              <a href="https://vjnaveen2005.github.io/ptu_cgpa_html/" target='blank' className="btn-primary">Viewsite</a>
          </div>
        </div>

        <div className="card">

          <div className="card-body">
            <h5 className="card-title">TASK MAINTAIN</h5>
            <p className="card-text">Developed a simple To do list app using  that allows users to create and
              delete tasks. This project enhanced my skills in mobile app development.</p>
          </div>

          <div className='back-card-body'>
            <img src={todo} className='ptu_cgpa' />
          <p className="card-text">
            <li>FLUTTER</li>
            <li>FLUTTER HIVE(Database)</li>
          </p>
            <a href="https://totolist-vjn.web.app/" target='blank' className="btn-primary">Viewsite</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Project_click