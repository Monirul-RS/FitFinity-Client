import React from 'react';
import pic2 from '../../../assets/images/About/pic2.jpg'

const Mission = () => {
    return (
        <div className=" my-36 bg-base-100">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:w-1/2 '>
                    <img src={pic2} className=" rounded-lg shadow-2xl " alt='' />
                </div>
                <div className='md:w-1/2 md:ml-28'>
                    <h1 className="text-5xl font-bold">MY MISSION</h1>
                    <p className="py-6">I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level..</p>
                    <button className="btn btn-secondary">CONTACT ME</button>
                </div>
            </div>
        </div>
    );
};

export default Mission;