import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute  justify-end transform w-3/5 -translate-y-1/2 left-24 top-2/4">
                <div className=" transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl text-error font-bold mb-4 text-white'>
                        Take Your Fitness <br />
                        To The Next Level
                    </h1>
                </div>
                <div className=" mb-5 transform w-3/5 -translate-y-1/2 left-24 ">
                    <p className='text-white text-xl'>Its a private personal training studio in Milton Keynes who help busy men & women stop "trying to get in shape", and finally achieve a health & body transformation they won’t rebound from
                    </p>
                </div>
                <div className="  transform w-2/5 -translate-y-1/2 left-24 ">
                    <button className="btn btn-error btn-outline mr-5">Discover More</button>
                    <button className="btn btn-outline btn-secondary">Start Now</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;