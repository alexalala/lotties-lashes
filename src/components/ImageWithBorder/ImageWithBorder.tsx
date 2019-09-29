import * as React from 'react';

import './ImageWithBorder.css';

const ImageWithBorder = (props: {source:string}) =>
    <div className="image-container">
        <img src={props.source} alt="eyelash process picture" />
        <div className="image-overlay" />
    </div>

export default ImageWithBorder;