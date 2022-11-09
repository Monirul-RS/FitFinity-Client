import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const image = form.photo.value;
        const reviewText = form.review.value;
        const rating = form.rating.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            image,
            reviewText,
            rating

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order Placed Succesfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <h2 className='text-4xl'>{title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4
                mt-8 mb-8'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-primary w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />
                    <input name='photo' type="text" placeholder="Your Image" defaultValue={user?.photoURL} className="input input-bordered input-primary w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
                    <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-primary w-full" />
                </div>
                <textarea name='review' className="textarea textarea-primary text-xl h-32 w-full" placeholder="Review Text"></textarea>
                <button className='btn btn-primary my-8'><input type="submit" value="Add your review" /></button>
            </form>
            <ToastContainer position='top-center'/>
        </div>
    );
};

export default Review;