import * as React from 'react';
import * as ServicesCopy from '../../../content/services.json';

import './Services.css';

const Services: React.FunctionComponent = () =>
<div className="services-container-outer">
    <div>
        <div>
            <h2>{ServicesCopy.title}</h2>
            {
                ServicesCopy.services.map((service, k) =>
                    <div key={k}>
                        <h3>{service.title} - £{service.price}</h3>
                        <p>{service.description}</p>
                    </div>
                )
            }
        </div>
    </div>
</div>

export default Services;