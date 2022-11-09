import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceDetailsReview = ({ review }) => {
    const { _id, serviceName, image, rating, customer, reviewText, service } = review;
    return (
        <div className=" border shadow-xl shadow-violet-400 p-8">
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-4xl font-bold  my-4">{customer}</h1>
                    <p className=''>{reviewText}</p>

                </div>
                <div className=" text-secondary">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={image} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-semibold text-error'>{serviceName}</h1>
                <div className='flex'>
                    <FaStar className='text-warning mt-1 mr-2'></FaStar>
                    <p>{rating}</p>
                </div>
            </div>
            {/* <div className='flex justify-between mt-4'>
                <div className=" text-xl "><button className='btn btn-outline'>Edit Review</button></div>
                <div className=" text-xl "><button onClick={() => handleDelete(_id)} className='btn btn-outline'>Delete Review</button></div>
            </div> */}
        </div>
    );
};

export default ServiceDetailsReview;