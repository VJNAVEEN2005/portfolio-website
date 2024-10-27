import React from 'react'
import './style.css'
import code_image from './sitcode.png'

function Aboutbox() {
  return (
    <div className="Container">
      <div className='box'>
        <div className="text">
          <div className="text-wrapper">Hi...</div>
          <div className="div">I’m Naveen VJ,</div><br /><br />
          <p className="i-am-pursuing-b-tech">
            I am pursuing B.tech in
            Puducherry Technological  University in Electrical and  Electronics Engineering (EEE).
            I am interested in software industry, business and management.
            I am thrilled to upskill myself by learning the trendy technologies.
          </p>
        </div>
      </div>
      <br />
      <div className='Image_box'>
        <center>
          <img src={code_image} className='code_image' />
        </center>
      </div>
    </div>
  )
}

export default Aboutbox