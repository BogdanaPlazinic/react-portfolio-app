import React from 'react'
import './services.css'
import {RxDrawingPin} from 'react-icons/rx'


const Services = () => {
    return (
        <section id='work-experience'>
            <h5>The development of my career and</h5>
            <h2>What I learned along the way</h2>
            

            <div className='container work-exp__container'>
                <article className='work-exp'>
                    <div className='work-exp__head'>
                        <h3>Freelance</h3>
                    </div>

                    <ul className='work-exp__list'>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Creation of a Newspaper Portal (Blog Form) from Scratch, Following Design</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Creation of Presentation Sites from Scratch</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Creation of Smaller Web Shops on WordPress and Shopify</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Web Store Migration from WordPress to Shopify</p>
                        </li>

                        <p>By creating sites from scratch without using a theme, I gained a clearer picture of 
                        the structure of web sites and web stores. A clear understanding of how CMS platforms work 
                        and how to connect them to the front-end.
                        <br></br><br></br>
                        Communication with Clients, Understanding, and Problem-Solving
                        <br></br><br></br>
                        Through the creation of websites with custom designs, I have acquired the skills of implementing 
                        designs from various programs such as Photoshop, Illustrator, Adobe XD, and Figma.</p>
                    </ul>
                </article>
                {/* END OF FREELANCE BOX */}
                <article className='work-exp'>
                    <div className='work-exp__head'>
                        <h3>Restart</h3>
                    </div>

                    <ul className='work-exp__list'>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Development of the Entire Web Shop from Scratch</p>
                        </li>
                        <p>1st Phase</p>
                        <br></br>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Contribution to the Planning of the Entire Project</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Organizing and Sorting Out the Old Database</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Detailed Elaboration of the Plan With a Focus on Optimization (Achieved Page Load 
                            Time Under 2s Without Caching, Performed Comprehensive SEO following Google
                            Standards for each Category and Product)</p>
                        </li>
                        <p>2nd Phase</p>
                        <br></br>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Creation of Main Site Components (Menu, Homepage, Cart, Checkout, Category Template, Product Template, Landing Pages)</p>
                        </li>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Integration of the Web Shop With the Bank and Payment Methods</p>
                        </li>
                        <p>3nd Phase</p>
                        <br></br>
                        <li>
                            <div>
                                <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Development of Components with Descriptive Content for Each Product (Including Display Logic)</p>
                        </li>
                        <p>I had the opportunity to work directly with the client, getting to know their way of doing business. 
                        Based on that, I collaborated with the team to create an appropriate solution for the client's business.
                        <br></br><br></br>
                        In addition to technical development, working in a small family company provided me with the opportunity to 
                        learn a lot: SEO, creating Google ads, gaining a clearer understanding of Google standards and the elements that are 
                        important for a website to achieve results, technical SEO. Moreover, I improved my knowledge of Photoshop.</p>
                    </ul>
                </article>
                {/* END OF RESTART BOX */}
                <article className='work-exp'>
                    <div className='work-exp__head'>
                        <h3>Personal Projects</h3>
                    </div>

                    <ul className='work-exp__list'>
                        <li>
                            <div>
                            <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Solving issues I've previously encountered using new technology and in a new work environment.</p>
                        </li>
                        <li>
                            <div>
                            <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Improving the skill of translating designs into web development in a new environment and using new technology.</p>
                        </li>
                        <li>
                            <div>
                            <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>After a long-term and thorough mastery of the fundamental principles of JavaScript, HTML, and CSS, experimenting through
                            projects with JavaScript frameworks such as React.js and Next.js, using CSS frameworks like Sass and Tailwind.</p>
                        </li>
                        <li>
                            <div>
                            <RxDrawingPin className='work-exp__icon' />
                            </div>
                            <p>Testing and implementing various APIs through projects.</p>
                        </li>
                        <li>
                        <p>Each project in my portfolio is accompanied by technical documentation located on GitHub within the README.md file.
                        <br></br><br></br>
                        Working independently on more complex projects, I have strengthened my skills in troubleshooting and problem solving, 
                        while paying attention to optimizing each project.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF PERSONAL PROJECTS BOX */}
            </div>
        </section>
    )
}

export default Services;
