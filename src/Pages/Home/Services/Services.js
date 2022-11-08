import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-server-rho-ashy.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-40'>
                <p className="text-2xl font-bold text-orange-600 mb-4">Services</p>
                <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
                <p className='mb-8'>
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    <br />
                    Words Which Don't Look Even Slightly Believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 mb-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;