import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewDiv from './ReviewDiv';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    useTitle('My Reviews')

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('trainer-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                // console.log('received',data);
                setReviews(data);
            })
    }, [user?.email, logOut]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete the review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('trainer-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Reviews Deleted Succesfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/CbYrtyv/shirtless-bodybuilder-doing-side-plank-exercise.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content pt-32 pb-10 mb-2">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-error font-bold">MY REVIEWS</h1>
                        <p className="mb-5">READ EVERYTHING FITNESS, TRAINING, NUTRITION AND HEALTH RELATED FROM ROBERT COTTERILL.</p>

                    </div>
                </div>
            </div>
            {
                reviews?.length > 0 ?
                    <h2 className='text-center text-5xl font-bold my-10'>You have given : {reviews.length} reviews</h2>
                    :
                    <h2 className='text-center text-5xl font-bold my-10'>No review added.</h2>
            }
            <div className=" w-full mb-16">
                <div className='grid grid-cols-2 gap-6'>
                    {
                        reviews.map(review => <ReviewDiv
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ReviewDiv>)
                    }

                </div>
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default MyReviews;