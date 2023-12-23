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
            <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
        </div>
    ) : null;
};

export default CookieConsent;