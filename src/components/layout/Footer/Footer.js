import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
    <div className="footer-container">
        <p className="footer-p">&copy;2020 Mateusz Kotwiński</p>
        <NavLink exact to="/" className="footer-link">
            HOME
        </NavLink>
        <NavLink exact to="/faq" className="footer-link">
            FAQ
        </NavLink>
        <NavLink exact to="/policy" className="footer-link">
            STORE POLICY
        </NavLink>
        <NavLink exact to="/contact" className="footer-link">
            CONTACT
        </NavLink>
    </div>
);

export default Footer;