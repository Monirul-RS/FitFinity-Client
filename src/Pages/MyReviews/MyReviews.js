import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewDiv from './ReviewDiv';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to delete the review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Reviews Deleted Succesfully');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2 className='text-center text-5xl font-bold my-10'>You have given : {reviews.length} reviews</h2>
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
            <ToastContainer position='top-center'/>
        </div>
    );
};

export default MyReviews;