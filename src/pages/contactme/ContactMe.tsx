import React, {useEffect} from 'react'
import './ContactMe.css'
import {ContactForm} from '../../components/contactForm/ContactForm'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const ContactMe: React.FC = () =>{

    useEffect (() => {
        Aos.init({disable: 'mobile'});
        Aos.refresh();
    }, []);

    return (
        <>
        <div className='bg-color' >
            <div className='contactmeWrapper' data-aos='zoom-in' data-aos-duration="500" data-aos-easing="linear">
                <div className="contactme">
                <h1 className='contactmeTitle'>Contact Me</h1><br></br>
                    <ContactForm />
                </div>
            </div>
        </div>
    </>
    )
}
