import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
/* import {AiOutlineUser} from 'react-icons/ai' */
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {IoIosGitNetwork} from 'react-icons/io'

import {useState} from 'react'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#top')

    return (
        <nav>
            <a href='#top' onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome/></a>
            {/* <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a> */}
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsCodeSlash/></a>
            <a href='#work-experience' onClick={() => setActiveNav('#work-experience')} className={activeNav === '#work-experience' ? 'active' : ''}><IoIosGitNetwork/></a>
            <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillFolderOpen/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRounded/></a>
        </nav>
    )
}

export default Nav;