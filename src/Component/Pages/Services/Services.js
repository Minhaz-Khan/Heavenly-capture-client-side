import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Services service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Services;