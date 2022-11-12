import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className="w-full  carousel-img   rounded-xl" />
            </div>
            <div className="absolute justify-end transform md:w-3/5 translate-y md:left-24 lg:top-2/4 md:top-1/4 top-1/3 left-8  ">
                <div className=" transform -translate-y-1/2 mb-8 left-24 top-1/4">
                    <h1 className='text-5xl md:text-6xl text-error font-bold mb-4 text-error'>
                        Take Your Fitness <br />
                        To The Next Level
                    </h1>
                </div>
                <div className=" mb-5 transform lg:w-3/5 md:w-4/5 -translate-y-1/2 left-24 ">
                    <p className='text-white text-xl text'>Its a private personal training studio in Milton Keynes who help busy men & women stop "trying to get in shape", and finally achieve a health & body transformation they won’t rebound from
                    </p>
                </div>
                <div className="  transform w-2/5 flex -translate-y-1/2 carousel-btn left-24 ">
                    <button className="btn btn-error btn-outline mr-5">Discover More</button>
                    <button className="btn btn-outline btn-secondary">Start Now</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle  mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;