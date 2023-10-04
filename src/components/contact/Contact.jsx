import React, { useRef, useState } from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsSlack} from 'react-icons/bs'

import emailjs from 'emailjs-com'

const Contact = () => {

/* CHECK IF EMAIL IS CORRECT */

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          setMessage("Successfully send!");
        } else if (!regEx.test(email) && email !== "") {
          setMessage("Email is Not Valid");
        } else {
          setMessage("");
        }
      };

      const handleOnChange = (e) => {
        setEmail(e.target.value);
      };



/* EMAILJS API */

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_aovrbp8', 'template_qhfix4j', form.current, 'W3z8cr8LbV0RZ6L30')
          
        e.target.reset();
      };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>plazinicbogdana@gmail.com</h5>
                        <a href='mailto:plazinicbogdana@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsSlack className='contact__option-icon'/>
                        <h4>Slack</h4>
                        <h5>@Bogdana</h5>
                        <a href='https://slack.com/app_redirect?channel=U04QNDDR3L4' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+381 66 xxx xxx</h5>
                        <a href="https://wa.me/38166063709?text=Hello%20Bogdana.%20I'm%20(your%20name)%20from%20(company%20name)%20company.%20I%20would%20like%20to%20know%20more%20about%20you." 
                        target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required onChange={handleOnChange}/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' onClick={emailValidation}>Send Message</button>
                    <p>{message}</p>
                </form>
            </div>
        </section>
    )
}

export default Contact;