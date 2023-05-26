import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
           <h3>Frontend Developement</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML5</h4>
                   <small class="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                    <small class="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Javascript</h4>
               <small class="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Bootstrap5</h4>
                   <small class="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Reactjs</h4>
               <small class="text-light">Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Developement</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Laravel</h4>
               <small class="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>PHP</h4>
               <small class="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>MySQL</h4>
               <small class="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Golang</h4>
               <small class="text-light">Beginner</small>
                </div>
              </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience