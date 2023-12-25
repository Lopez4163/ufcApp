import React, { useState } from "react";
import "../styling/SearchBar.css";
import "../styling/Navbar.css";
import emailjs from '@emailjs/browser';
import EmailForm from "./EmailForm.jsx";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [key, setKey] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (error) {
            setError(false);
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setError(true);
            setKey(prevKey => prevKey + 1);
            return;
        }

        setError(false);
        onSearch(searchTerm.toLowerCase());
    };

    return (
        <div key={key} className={`search-bar ${error ? "error" : ""}`} id='search-baar'>
            <div className='search-option'>
                <input
                    type="text"
                    className='search-bar-input'
                    placeholder="Search Fighter..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
            <div className='newsletter-button-wrapper'>
                <button onClick={toggleOverlay} className='newsletter-button'>
                    Click to Subscribe
                </button>
                {showOverlay && (
                    <div className={`newsletter-overlay ${showOverlay ? "" : "hidden"}`}>
                        {/*<div className='newsletter-overlay-container' r>*/}
                        {/*    <div className='newsletter-overlay-title-summary'>*/}
                        {/*        <h2 className='newsletter-title'>Subscribe to Our Newsletter</h2>*/}
                        {/*        <p className='newsletter-summary'>Thank you for visiting and checking out what i do on my time off. Get fighter updates and possibly more! </p>*/}
                        {/*    </div>*/}
                        {/*    <div className='newsletter-overlay-signup'>*/}
                        {/*        {emailSent ? (*/}
                        {/*            <h2 className='email-sent-text'>Thanks!!</h2>*/}
                        {/*        ) : (*/}
                        {/*            <form className='newsletter-signup-form' ref={form} onSubmit={sendEmail}>*/}
                        {/*                <input className={`user-email-input ${emailError ? "error" : ""}`} type="text" name="user_name" placeholder=' Full Name' />*/}
                        {/*                <input className={`user-email-input ${emailError ? "error" : ""}`} type="email" name="user_email" placeholder='Email' />*/}
                        {/*                <input className='user-email-submit' type="submit" value="Send" />*/}
                        {/*            </form>*/}
                        {/*        )}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='signup-form-overlay'>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;