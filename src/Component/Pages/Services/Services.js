import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Service/Service';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='container mx-auto my-16'>
            <h2 className='text-3xl text-center font-DM_Serif mb-10 text-lightSecondary uppercase'>Category Name  {services[0]?.serviceName}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-20 gap-y-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;