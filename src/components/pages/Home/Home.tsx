import * as React from 'react';

import LashPic from '../../../assets/lash-prep.png';
import * as HomeCopy from '../../../content/home.json';
import './Home.css';

const Home: React.FunctionComponent = () =>
    <div>
        <div className="headline-banner">
            <div className="image-container">
                <img src={LashPic} alt="eyelash process picture" />
                <div className="image-overlay" />
            </div>
            <div className="quote-container">
                <h2>{HomeCopy.inspoQuote}</h2>
            </div>
        </div>
    </div>

export default Home;