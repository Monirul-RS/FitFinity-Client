import React from 'react';
import pic1 from '../../../assets/images/About/pic1.jpg'
import pic2 from '../../../assets/images/About/pic2.jpg'

const About = () => {

    return (
        <div className="hero lg:min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse  lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={pic1} className=" rounded-lg shadow-2xl right-24 relative mask mask-hexagon-2" alt='' />
                    <img src={pic2} className=" rounded-lg shadow-2xl absolute right-16 top-2/3 w-4/5  mask mask-hexagon-2"  alt=''/>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-error">BE A BETTER​ YOU!</h1>
                    <p className="py-6"> Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are but would like a healthier lifestyle, RCotterill PT is the right choice for you. Everyone wants to feel comfortable in their own skin, therefore, even if you are working a busy schedule, finding it hard to meet your fitness goals or would like to get fit, RCotterill PT gives you the flexibility to reach your full potential with a variety of different online and individual personal training plans..</p>
                    <button className="btn btn-error btn-outline">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;