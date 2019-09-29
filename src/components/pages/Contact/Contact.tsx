import * as React from 'react';

import ImageWithBorder from '../../ImageWithBorder/ImageWithBorder';

import LashPic from '../../../assets/lash-prep.png';

import './Contact.css';

const Contact: React.FunctionComponent = () =>
    <div className="contact">
        <ImageWithBorder source={LashPic} />
    </div>

export default Contact;