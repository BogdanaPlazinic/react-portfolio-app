import React from 'react'
import './footer.css'

import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href='#top' className='footer__logo'>Bogdana</a>

            <ul className='permalinks'>
                <li><a href='#top'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Skills</a></li>
                <li><a href='#work-experience'>Work Experience</a></li>
                <li><a href='#projects'>My Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.linkedin.com/in/bogdana-plazinic/' target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
                <a href='https://github.com/BogdanaPlazinic' target='_blank' rel="noreferrer"><FaGithub/></a>
            </div>

            <div className='footer__copyright'>
                <small>Bogdana Plazinić 2024</small>
            </div>

        </footer>
    )
}

export default Footer;