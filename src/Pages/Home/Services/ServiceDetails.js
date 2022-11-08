import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const {title} = useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;