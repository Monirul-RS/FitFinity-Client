import React from 'react';
import './Banner.css'
import BannerItem from './BannerItem';


const Banner = () => {

    const bannerData = [
        {
            image: 1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: 2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: 3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: 4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: 5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: 6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]

    return (
         <div className="carousel w-full height-carousel ">
            {
                bannerData.map(slide => <BannerItem
                key={slide.id}
                slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;