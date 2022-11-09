import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);
    // useTitle('Services')

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='md:mx-60 mt-40'>

                <h2 className="text-5xl text-error text-center font-bold mb-4">My Services</h2>
                <p className='mb-8 text-center '>
                    My coaching options have been designed from the ground up to put you and your goals first. From one-on-one training in your private studio, to our renowned small group personal training and bespoke nutrition packages- everything we offer has been battle-tested over a decade in the field, to ensure the results you achieve are not only impressive in the short term- but also sustainable for life </p>
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

export default AllServices;