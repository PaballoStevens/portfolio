import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: 'https://live.staticflickr.com/1870/43756034034_a89960b9dc_k_d.jpg',
    title: 'NCDEV Ecosystem',
    github: 'https://github.com',
    live : 'https://www.ncdev.co/'
    
  },
  {
    id: 2,
    image: 'https://live.staticflickr.com/1870/43756034034_a89960b9dc_k_d.jpg',
    title: 'The Blog',
    github: 'https://github.com/PaballoStevens/blog.git',
    live : ''
    
  },
  {
    id: 3,
    image: 'https://live.staticflickr.com/1870/43756034034_a89960b9dc_k_d.jpg',
    title: 'Leave Management System',
    github: 'https://github.com/PaballoStevens/leave.git',
    live : ''
    
  },
  {
    id: 4,
    image: 'https://live.staticflickr.com/1870/43756034034_a89960b9dc_k_d.jpg',
    title: 'No code website builder',
    github: 'https://github.com/PaballoStevens/No_code_website_builder.git',
    live : ''
    
  },

  {
    id: 5,
    image: 'https://live.staticflickr.com/1870/43756034034_a89960b9dc_k_d.jpg',
    title: 'Checklist',
    github: 'https://github.com/PaballoStevens/checklist.git',
    live : ''
    
  },

]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title, github, live}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={live} className='btn btn-primary' target='_blank'>Live</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio