import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);
    useTitle('Services')

    useEffect(() => {
        fetch('https://assignment-11-server-eta.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/CbYrtyv/shirtless-bodybuilder-doing-side-plank-exercise.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content pt-32 pb-10 mb-2">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-error font-bold">MY SERVICES</h1>
                        <p className="mb-5">READ EVERYTHING FITNESS, TRAINING, NUTRITION AND HEALTH RELATED FROM ROBERT COTTERILL.</p>

                    </div>
                </div>
            </div>
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