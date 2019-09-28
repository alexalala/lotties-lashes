import * as React from 'react';
import * as ServicesCopy from '../../../content/services.json';

import './Services.css';

const Services: React.FunctionComponent = () =>
<div>
    <div className="back-panel"/>
    <div className="services-container-outer">
        <div>
            <div>
                <h1>{ServicesCopy.title}</h1>
                {
                    ServicesCopy.services.map((service, k) =>
                        <div className="service" key={k}>
                            <h3><span>[</span>{service.title} - £{service.price}<span>]</span></h3>
                            <p>{service.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
</div>

export default Services;