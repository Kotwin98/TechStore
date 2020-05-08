import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink exact to="/">
            HOME
        </NavLink>
        <NavLink exact to="/faq">
            FAQ
        </NavLink>
        <NavLink exact to="/policy">
            STORE POLICY
        </NavLink>
        <NavLink exact to="/contact">
            CONTACT
        </NavLink>
    </div>
);

export default Header;