import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {MdComputer} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div>
                    <div className='about__me'>
                        <div className='about__me-image'>
                            <img src={ME} alt='me' />
                        </div>
                    </div>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <MdComputer className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <GiBookshelf className='about__icon'/>
                            <h5>Currently Learning</h5>
                            <small>Next.js</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>
                </div>


                <div className='about__content'>
                    <p>I am a dedicated front-end developer with three years of experience, passionate about creating engaging and user-friendly 
                        digital experiences. With a strong work ethic and a knack for creativity, I strive to deliver high-quality solutions that 
                        exceed expectations. <br/><br/>
                        My journey in web development began with a deep curiosity and a desire to constantly learn and grow. 
                        As the saying goes, "When you learn how to learn, you learn for a lifetime," and this mindset has been the driving force 
                        behind my professional development. I believe in the power of continuous learning and staying up-to-date with the latest 
                        technologies and industry trends. Throughout my career, I have honed my skills in HTML, CSS, and JavaScript, leveraging 
                        these tools to build intuitive and visually appealing user interfaces. I am proficient in responsive web design, ensuring 
                        that websites and applications I develop seamlessly adapt to various devices and screen sizes. <br/><br/>
                        Collaboration is a cornerstone of my work ethic. I thrive in dynamic team environments, valuing open communication and the 
                        opportunity to exchange ideas. I believe that the best results are achieved through a combination of individual expertise and collective 
                        brainstorming, and I actively contribute my unique perspective to create innovative solutions. Beyond my technical 
                        abilities, I am committed to delivering projects on time and with meticulous attention to detail. I take pride in producing
                         clean and well-structured code that is maintainable and scalable, fostering a positive user experience. Additionally, I am 
                         familiar with version control systems such as Git, enabling efficient collaboration and effective code management. <br/><br/>
                         In summary, I am a hardworking and creative front-end developer who is dedicated to crafting visually stunning and 
                         user-friendly websites and applications. With a commitment to continuous learning and a passion for innovation, I am 
                         excited to contribute my expertise to projects that leave a lasting impact.</p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;