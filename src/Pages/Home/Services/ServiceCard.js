import React from 'react';
import { FaArrowRight } from "react-icons/fa";
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
                    <p className='text-2xl  font-semibold'>Rating: {ratings}</p>
                    <Link to={`/details/${_id}`}>
                        <button className='btn btn-error'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;