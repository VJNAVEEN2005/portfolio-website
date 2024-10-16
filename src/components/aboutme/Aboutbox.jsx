import React from 'react'
import './style.css'
import code_image from './sitcode.png'

function Aboutbox() {
  return (
    <div className="Container">
          <div className='box'>
                <div className="text">
                        <div className="text-wrapper">Hi...</div>
                        <div className="div">I’m Naveen VJ,</div><br /><br /><br />
                        <p className="i-am-pursuing-b-tech">
                          I am pursuing B.tech in <br />
                          Puducherry Technological University
                          <br />
                          in Electrical and Electronics Engineering <br />
                          (EEE).
                          <br />I am interested in software industry, <br />
                          business and management.
                          <br />I am thrilled to upskill myself by learning <br />
                          the trendy technologies.
                        </p>
                      </div>
          </div>

          <div className='Image_box'>
                <img src={code_image} className='code_image'/>
          </div>
    </div>
  )
}

export default Aboutbox