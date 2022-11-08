import React from 'react';
import pic1 from '../../../assets/images/Banner/pic1.jpg';
import pic2 from '../../../assets/images/Banner/pic2.jpg';
import pic3 from '../../../assets/images/Banner/pic3.jpg';
import pic4 from '../../../assets/images/Banner/pic4.jpg';
import pic5 from '../../../assets/images/Banner/pic5.jpg';
import pic6 from '../../../assets/images/Banner/pic6.jpg';

import './Banner.css'
import BannerItem from './BannerItem';


const Banner = () => {

    const bannerData = [
        {
            image: pic1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: pic2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: pic3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: pic4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: pic5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: pic6,
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