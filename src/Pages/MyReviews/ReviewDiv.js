import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewDiv = ({ review, handleDelete }) => {
    const { _id, serviceName, image, rating, customer, reviewText, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service]);


    return (
        <div className=" border shadow-xl shadow-violet-400 p-8">
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-4xl font-bold  my-4">{serviceName}</h1>
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
            <div className='mt-4 '>
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
                <h1 className='text-lg ml-2 font-semibold text-error'>{customer}</h1>
            </div>
            <div className='flex justify-between mt-4'>
                <div className=" text-xl "><button className='btn btn-outline'>Edit Review</button></div>
                <div className=" text-xl "><button onClick={() => handleDelete(_id)} className='btn btn-outline'>Delete Review</button></div>
            </div>
        </div>
    );
};

export default ReviewDiv;