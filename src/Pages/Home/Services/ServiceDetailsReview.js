import React, { useEffect, useState } from 'react';


const ServiceDetailsReview = ({ review }) => {
    const { _id, serviceName, image, rating, customer, reviewText, service } = review;
    console.log(serviceName)

   
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
                <div className="rating rating-md rating-half">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsReview;