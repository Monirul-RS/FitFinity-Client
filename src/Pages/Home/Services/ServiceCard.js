import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title } = service;
    return (
        <div className="card  card-compact bg-base-200 shadow-xl sm:w-full">
            <figure><img className='p-3 rounded-xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    <Link to={`/details/${_id}`}><FaArrowRight className='text-2xl text-orange-600'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;