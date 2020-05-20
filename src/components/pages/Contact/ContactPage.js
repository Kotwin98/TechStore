import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './ContactPage.scss';

const ContactPage = () => (
    <div>
        <h1>Contact</h1>
        <div className="contact-wrapper">
            <p><strong>TechStore</strong></p>
            <p><i>4323 Long Street</i></p>
            <p>E-mail: <FontAwesomeIcon icon={faEnvelope} /> office@techstore.com</p>
            <p>Mobile Number: <FontAwesomeIcon icon={faMobileAlt} /> 283-482-847</p>
            <a href="#" target="_blank" className="contact-icon"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#" target="_blank" className="contact-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" target="_blank" className="contact-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" target="_blank" className="contact-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>
);

export default ContactPage;