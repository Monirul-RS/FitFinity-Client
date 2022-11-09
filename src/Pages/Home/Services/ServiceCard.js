import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../hooks/useTitle';

const ServiceCard = ({ service }) => {
    

    const { _id, img, price, title, duration, ratings, description } = service;
    return (
        <div className="card  card-compact bg-base-200 shadow-xl sm:w-full">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} className='p-3 rounded-xl'  alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className=''>{description.slice(0, 150) + '...'}.</p>
                <p className='text-2xl  font-semibold'>Price: ${price}</p>
                <div className='flex justify-between'>
                    <div className=' flex text-lg font-semibold'>
                       Rating:<FaStar className='text-warning mr-1 mt-1'></FaStar>
                        <span>{ratings}</span>
                    </div>
                    <button className='btn btn-error btn-outline'>
                        <Link to={`/details/${_id}`}> View Details</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;