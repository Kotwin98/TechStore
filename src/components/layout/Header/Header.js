import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <div className="header-container">
        <NavLink exact to="/" className="header-link">
            HOME
        </NavLink>
        <NavLink exact to="/faq" className="header-link">
            FAQ
        </NavLink>
        <NavLink exact to="/policy" className="header-link">
            STORE POLICY
        </NavLink>
        <NavLink exact to="/contact" className="header-link">
            CONTACT
        </NavLink>
    </div>
);

export default Header;