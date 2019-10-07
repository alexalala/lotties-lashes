import * as React from 'react';

import ImageWithBorder from '../../ImageWithBorder/ImageWithBorder';

import * as ContactCopy from '../../../content/contact.json';

import Lashes from '../../../assets/lashes.jpg';

import './Contact.css';

const Contact: React.FunctionComponent = () =>
    <div className="contact">
        <ImageWithBorder source={Lashes} />
        <div className="background-panel">
            <div>
                <h1>{ContactCopy.title}</h1>
                <div className="gutter-container">
                    <p>{ContactCopy.description}</p>
                    <h2>Hours:</h2>
                    {
                        Object.keys(ContactCopy.hours).map((key, i) => (
                            <div className="day" key={i}>
                                <p>{key}</p>
                                <p>{ContactCopy.hours[key]}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>

export default Contact;