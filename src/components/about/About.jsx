import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import IMG from '../../assets/image/about.jpg'

const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

     <div className="container about__container">
       <div className="about__me">
          <div className="about__me-image">
             <img src={IMG} alt="about_me" />
          </div>
       </div>

       <div className="about__content">
         <div className="about__cards">
           <article className='about__card'>
           < FaAward />
             <h5>Experience</h5>
             <small>4+ Years</small>
           </article>
           <article className='about__card'>
             < VscFolderLibrary />
             <h5>Projects</h5>
             <small>13+ Completed</small>
           </article>
         </div>
         <p>Hi, I'm Paballo, a programmer who is interested in creating innovative and user-friendly applications for web. 
          I have over five years of experience developing applications using various programming languages and frameworks, such as PHP, Laravel and React.
          I enjoy solving complex problems and learning new technologies. Some of my projects include a Leave Management System that allows users to apply for a leave digitally and reduces paperwork by 80%, and a No Code Website Builder that helps users to build websites using drag and drop and generates unique templates. 
          My goal is to help you achieve your business objectives by delivering high-quality applications that meets the requirements and the exceed expectations. 
          Whether you need web application, I can be a resource that can exceed in creating applications that meets any minimum requirements.
          If you're looking for a web developer with the skills and knowledge that I have acquired through Geekulcha ,
           please feel free to contact me at stevens.monareng@gmail.com or check out my portfolio here. You can also follow me on GitHub and Twitter to see more of my work and connect with me. I look forward to hearing from you soon!</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>  
    </section> 
  )
}

export default About