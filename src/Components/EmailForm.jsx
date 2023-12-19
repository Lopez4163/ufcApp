import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styling/Navbar.css';

export const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='newsletter-container'>

            <div className='newsletter-signup'>
                <h2 className='newsletter-title'>Subscribe to Our Newsletter</h2>
                <p className='newsletter-summary'>Thank you for visiting and checking out what i do on my time off. Get fighter updates and possibly more! </p>
                <form className='newsletter-signup-form' ref={form} onSubmit={sendEmail}>
                    <input className='user-email-input' type="text" name="user_name" placeholder=' Full Name' />
                    <input className='user-email-input' type="email" name="user_email" placeholder='Email' />
                    <input className='user-email-submit' type="submit" value="Send" />
                </form>
        </div>
        </div>

    );
};;

export default EmailForm;