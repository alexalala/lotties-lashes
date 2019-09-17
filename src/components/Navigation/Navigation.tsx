import * as React from 'react';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </nav>
    )
};

export default Navigation;