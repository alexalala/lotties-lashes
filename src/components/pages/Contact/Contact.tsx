import * as React from 'react';

import ImageWithBorder from '../../ImageWithBorder/ImageWithBorder';

import * as ContactCopy from '../../../content/contact.json';

import LashPic from '../../../assets/lash-prep.png';

import './Contact.css';

const Contact: React.FunctionComponent = () =>
    <div className="contact">
        <ImageWithBorder source={LashPic} />
        <div>
            <div>
                <h1>{ContactCopy.title}</h1>
                <p>{ContactCopy.description}</p>
                <div>
                    <p>Hours:</p>
                    <div>
                        {
                            Object.keys(ContactCopy.hours).map((key, i) => (
                                <div key={i}>
                                    <p>{key}</p>
                                    <p>{ContactCopy.hours[key]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Contact;