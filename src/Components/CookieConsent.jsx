import React, { useState } from 'react';
import '../styling/CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
    };

    const handleDecline = () => {
        window.location.href = 'https://www.youtube.com/watch?v=mgxqSNfkeHU';
    };

    return isVisible ? (
        <div className="cookie-consent">
            <h3 className='cookie-consent-summary'> We use cookies on this site to enhance your user experience.
                By using our site, you agree to our use of cookies.</h3>
            <div className='cookie-consent-button-wrapper'>
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handleDecline}>Decline</button>
            </div>

        </div>
    ) : null;
};

export default CookieConsent;