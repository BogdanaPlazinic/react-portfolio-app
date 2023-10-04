import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/ecomm-dash.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Business_app',
        github: 'https://github.com/BogdanaPlazinic/Business_app',
        demo: 'https://business-app-demo.netlify.app'
    },
    {
        id: 2,
        image: IMG2,
        title: 'dashboard',
        github: 'https://github.com/BogdanaPlazinic/dashboard',
        demo: 'https://bogdana-dashboard.netlify.app'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Javascript-Weather-App',
        github: 'https://github.com/BogdanaPlazinic/Javascript-Weather-App',
        demo: 'https://master--bogdana-weather-app-js.netlify.app'
    },
    {
        id: 4,
        image: IMG4,
        title: 'National-Geographic-video-player',
        github: 'https://github.com/BogdanaPlazinic/National-Geographic-video-player-custom-controls',
        demo: 'https://video-player-custom-controls.netlify.app'
    },
]

const Portfolio = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Preview</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;