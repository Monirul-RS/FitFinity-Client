import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {

    const { _id, img, price, title, ratings, description } = useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 mr-4'>
                    {/* <img src={img} className="rounded-lg shadow-2xl w-full h-full" alt='' /> */}
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="rounded-lg shadow-2xl w-full h-full" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <p className='text-2xl  font-semibold'>Price: ${price}</p>
                    <div className=' flex text-lg font-semibold'>
                        <FaStar className='text-warning mr-2 mt-1'></FaStar>
                        <span>{ratings}</span>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;