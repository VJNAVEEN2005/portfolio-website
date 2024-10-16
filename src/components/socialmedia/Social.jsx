import React from 'react'
import social_bg from './social_media_background.svg'
import './Social.css'
import github from './icons8-github.svg'
import instagram from './icons8-instagram.svg'
import linkedin from './icons8-linkedin.svg'
import youtube from './icons8-youtube.svg'

function Social() {

    function git(){
        Location.href="https://github.com/VJNAVEEN2005";
    }

    return (
        <div className='Social_div'>

            <div className='images'>
                <a href="https://github.com/VJNAVEEN2005" target='_blank'><img src={github} width={50}/></a>
                <a href="https://www.youtube.com/@vjntech2005" target='_blank'><img src={youtube} width={50}/></a>
                <a href="https://www.linkedin.com/in/naveen-velmourougane-49742a263/" target='_blank'><img src={linkedin} width={50}/></a>
                <a href="https://www.instagram.com/vj_naveen_05?igsh=MXFzNnptZ2MxYnh4NQ==" target='_blank'><img src={instagram} width={50}/>  </a>              
            </div>

            <img src={social_bg} className='Social_bg' />
            
        </div>
    )
}

export default Social