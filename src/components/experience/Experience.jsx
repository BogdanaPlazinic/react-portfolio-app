import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {SiVite} from 'react-icons/si'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {BsWordpress} from 'react-icons/bs'
import {RxMobile} from 'react-icons/rx'
import {SiAdobe} from 'react-icons/si'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>Technology</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <ImHtmlFive className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiCss3 className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <GrReactjs className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbBrandNextjs className='experience__details-icon' />
                            <div>
                                <h4>Next.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTailwindcss className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__workflow'>
                <h3>Other Skills</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsGit className='experience__details-icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiVite className='experience__details-icon' />
                            <div>
                                <h4>Vite</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillGrid3X3GapFill className='experience__details-icon' />
                            <div>
                                <h4>Syncfusion</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsWordpress className='experience__details-icon' />
                            <div>
                                <h4>Wordpress</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <RxMobile className='experience__details-icon' />
                            <div>
                                <h4>Responsive Design</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiAdobe className='experience__details-icon' />
                            <div>
                                <h4>Adobe (Ps, Ai, XD)</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;