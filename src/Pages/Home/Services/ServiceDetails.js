import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewDiv from '../../MyReviews/ReviewDiv';
import ServiceDetailsReview from './ServiceDetailsReview';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);

    const { _id, img, price, title, duration, ratings, description } = useLoaderData();
    useTitle('Service Details');

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-eta.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                const newReview = data.filter(d => d.service === _id)
                setReviews(newReview);
            })
    }, []);
    // ?email=${user?.email}
    // user?.email
    return (
        <div>
            <div className="hero min-h-screen w-full bg-base-100">
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
                        <p className='text-xl  font-semibold'>Duration: {duration}</p>
                        <div className=' flex text-lg font-semibold'>
                            Rating: <FaStar className='text-warning mr-1 mt-1'></FaStar>
                            <span>{ratings}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-base-100 mt-8'>
                    <div className='text-center p-8'>
                        <h1 className='text-5xl font-bold mb-2'>What My Amazing Client Says!</h1>
                        <p className='mb-2'>Experience what I can do for you first hand. Get a free strategy call via phone or video chat, learn how to maximise your workouts and get advice specific to you and your fitness goals. If you choose to work with me, that's great. If not, that's cool too. </p>
                        {
                            user?.email ?
                                <Link to={`/review/${_id}`}><button className="btn btn-outline btn-error">Add review</button></Link>
                                :
                                <p className='text-xl font-semibold'>Please Login first to add a review.<Link className='btn ' to='/login'>Login</Link></p>
                        }
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 my-16'>
                    {
                        reviews.map(review => <ServiceDetailsReview
                            key={_id}
                            review={review}
                        ></ServiceDetailsReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;