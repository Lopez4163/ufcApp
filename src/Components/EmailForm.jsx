import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styling/Navbar.css';

export const EmailForm = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false); // Add this line
    const [nameError, setNameError] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        const emailInput = form.current.elements.user_email.value;
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);

        if (!emailIsValid) {
            setEmailError(true);
            return;
        }

        setEmailError(false);

        emailjs.sendForm('service_6o63xqk', 'template_se3hehh', form.current, 'glu_5_JOPetRDj_AP')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='newsletter-container overlay'>
            <div className='newsletter-signup'>
                <h2 className='newsletter-title'>Subscribe to Our Newsletter</h2>
                <p className='newsletter-summary'>Thank you for visiting and checking out what i do on my time off. Get fighter updates and possibly more! </p>
                {emailSent ? (
                    <h2 className='email-sent-text'>Thanks!!</h2>
                ) : (
                    <form className='newsletter-signup-form' ref={form} onSubmit={sendEmail}>
                        <input className={`user-email-input ${emailError ? "error" : ""}`} type="text" name="user_name" placeholder=' Full Name' />
                        <input className={`user-email-input ${emailError ? "error" : ""}`} type="email" name="user_email" placeholder='Email' />
                        <input className='user-email-submit' type="submit" value="Send" />
                    </form>
                )}

            </div>
        </div>
    );
};

export default EmailForm;