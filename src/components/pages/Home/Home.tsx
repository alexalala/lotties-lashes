import * as React from 'react';

import InstaLogo from '../../../assets/insta-logo.png';
import LashPic from '../../../assets/lash-prep.png';
import * as HomeCopy from '../../../content/home.json';
import './Home.css';

const Home: React.FunctionComponent = () =>
    <div>
        <h1 className="visually-hidden">Home</h1>
        <div className="headline-banner">
            <div className="image-container">
                <img src={LashPic} alt="eyelash process picture" />
                <div className="image-overlay" />
            </div>
            <div className="quote-container">
                <h2>{HomeCopy.inspoQuote}</h2>
            </div>
            <div className="about-text">
                <p>{HomeCopy.aboutText}</p>
            </div>
            <div className="socials">
                <h2>{HomeCopy.instagramHeading}</h2>
                <div />
                <a href="https://www.instagram.com/lashesbylottienorwich/">
                    <img src={InstaLogo} />
                    {HomeCopy.instagramText}
                </a>
            </div>
        </div>
    </div>

export default Home;