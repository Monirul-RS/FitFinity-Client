import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';


const AddServices = () => {
  
    const {user } = useContext(AuthContext);

    useTitle('AddServices')

    const handleAddService = event =>{
        event.preventDefault();


        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const duration = form.duration.value;
        const description = form.description.value;
        
            const service = {
                title,
                price,
                img,
                rating,
                duration,
                description
                
            }
            // console.log(title, price, img,rating,duration, description );
            fetch('https://assignment-11-server-eta.vercel.app/addServices', {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(service)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            if(data.acknowledged){
                form.reset();
                toast.success('Service added successfully')
            }
            })
            .catch(err => console.error(err))

    }

    
    return (
        <div className='mx-auto w-3/4'>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4
            mt-8 mb-8'>
                    <input name='title' type="text" placeholder="Title"  className="input input-bordered input-primary w-full" />
                    <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full" />
                    <input name='img' type="text" placeholder="Service Image" className="input input-bordered input-primary w-full" />
                    <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-primary w-full" />
                    <input name='duration' type="text" placeholder="Duration" className="input input-bordered input-primary w-full" />
                </div>
                <textarea name='description' className="textarea textarea-primary text-xl h-32 w-full" placeholder="Service Description"></textarea>
                <button className='btn btn-primary my-8'><input type="submit" value="Add Services" /></button>
            </form>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default AddServices;