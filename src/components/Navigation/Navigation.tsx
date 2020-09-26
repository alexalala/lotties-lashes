import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.jpg';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <img src={Logo} alt="Lotties lashes logo" />
            <div className="nav-banner" />
            <div className="navigation-links">
                <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/services">Services</NavLink>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
};

export default Navigation;