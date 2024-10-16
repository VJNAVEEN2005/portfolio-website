import React from 'react'
import social_bg from './social_media_background.svg'
import './Social.css'

function Social() {
  return (
    <div className='Social_div'>
        <img src={social_bg} className='Social_bg'/>
    </div>
  )
}

export default Social