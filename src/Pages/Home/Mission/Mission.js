import React from 'react';
import pic3 from '../../../assets/images/About/pic3.jpg'

const Mission = () => {
    return (
        <div className="hero my-36 bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img src={pic3} className="max-w-sm rounded-lg shadow-2xl w-4/5 h-1/2 " alt='' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">MY MISSION</h1>
                    <p className="py-6">I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level..</p>
                    <button className="btn btn-secondary">CONTACT ME</button>
                </div>
            </div>
        </div>
    );
};

export default Mission;