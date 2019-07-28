import * as React from 'react';

import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <a>Home</a>
            <a>Prices</a>
            <a>About Me</a>
            <a>Contact</a>
        </nav>
    )
};

export default Navigation;