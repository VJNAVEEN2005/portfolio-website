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
                          I am pursuing B.tech in <br />
                          Puducherry Technological <br /> University in Electrical and <br /> Electronics Engineering (EEE).
                          <br />I am interested in software <br /> industry, business and <br /> management.
                          <br />I am thrilled to upskill myself by <br /> learning the trendy technologies.
                        </p>
                      </div>
          </div>
          <br />
          <div className='Image_box'>
                <center>
                <img src={code_image} className='code_image'/>
                </center>
          </div>
    </div>
  )
}

export default Aboutbox