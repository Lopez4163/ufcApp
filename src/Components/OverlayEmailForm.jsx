import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styling/Navbar.css';
import '../styling/OverlayEmailForm.css'

export const OverlayEmailForm = ({ onClose }) => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false); // Add this line
    const [nameError, setNameError] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        const emailInput = form.current.elements.user_email.value;
        const nameInput = form.current.elements.user_name.value;
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);

        if (!nameInput || !emailInput) {
            setNameError(!nameInput);  // Show name error if it's empty
            setEmailError(!emailInput);  // Show email error if it's empty
            return;
        }
        if (!emailIsValid) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
        setNameError(false);


        emailjs.sendForm('service_6o63xqk', 'template_se3hehh', form.current, 'glu_5_JOPetRDj_AP')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);

                // Close the overlay after 2 seconds
                setTimeout(() => {
                    onClose();
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='overlay-container'>
                <button className='close-button' onClick={onClose}>
                    <i className="fa-solid fa-circle-xmark close-icon"></i>
                </button>
            <div className='overlay-summary-nd-signup'>
                <h3 className='newsletter-title'>Subscribe to Our Newsletter</h3>
                <p className='newsletter-summary'>Thank you for visiting and checking out what i do on my time off. Get fighter updates and possibly more! </p>
                {emailSent ? (
                    <h2 className='email-sent-message'>Thanks!!</h2>
                ) : (
                    <form className='overlay-signup-form' ref={form} onSubmit={sendEmail}>
                        <input className={`user-email-input ${nameError ? "error" : ""}`} type="text" name="user_name" placeholder=' Full Name' />
                        <input className={`user-email-input ${emailError ? "error" : ""}`} type="email" name="user_email" placeholder='Email' />
                        <input className='overlay-user-email-submit' type="submit" value="Send" />
                    </form>
                )}

            </div>
        </div>
    );
};

export default OverlayEmailForm;