import React from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, ratings, description } = service;
    return (
        <div className="card  card-compact bg-base-200 shadow-xl sm:w-full">
            <figure><img className='p-3 rounded-xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className=''>{description.slice(0, 250) + '...'}.</p>
                <p className='text-2xl  font-semibold'>Price: ${price}</p>
                <div className='flex justify-between'>
                    <div className=' flex text-lg font-semibold'>
                        <FaStar className='text-warning mr-2 mt-1'></FaStar>
                        <span>{ratings}</span>
                    </div>
                    <button className='btn btn-error'>
                        <Link to={`/details/${_id}`}> View Details</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;