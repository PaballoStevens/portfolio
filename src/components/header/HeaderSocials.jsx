import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/paballo-monareng-30523a275/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/PaballoStevens" target="_blank"><BsGithub /></a>
        <a href="https://www.facebook.com/stevens.monareng/" target="_blank"><BsFacebook /></a>
        <a href="https://twitter.com/PaballoStevens" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials