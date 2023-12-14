import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "../css/Contact.css";

export default function Contact () {
    return (
        <>
            <div className="contact-container" id="contact">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <fieldset>
                        <legend>Contact Us</legend>
                        <input type="hidden" name="access_key" value="f390cc8b-c6db-49a7-9921-1ffc331dae32"/>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                        <label for="message">Message</label>
                        <textarea name="message" id="message" required></textarea>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
                <div className="contact-separator"></div>
                <div className="link-icons">
                    <a href="https://www.youtube.com/@bond.dancecollective" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}/></a>
                    <a href="https://www.instagram.com/bond.dancecollective" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="mailto:bondkdance@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </div>
        </>
    )
}