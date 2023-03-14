import React from 'react';
import { Fade } from 'react-slideshow-image';
import image1 from '../../../../asset/slider-image/groom-holds-bride-s-hands-where-are-two-wedding-rings.jpg'
import image2 from '../../../../asset/slider-image/groom-putting-ring-bride-s-finger.jpg'
import image3 from '../../../../asset/slider-image/bride-walking-with-diadem-flowers.jpg'
import 'react-slideshow-image/dist/styles.css'
import './TopBanner.css'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const TopBanner = () => {
    const slideImages = [
        { url: image1, caption: "Capturing the beauty of your everyday life" },
        { url: image2, caption: "Capturing Life,s Priceless Moments" },
        { url: image3, caption: "Capturing the beauty of your everyday life" }
    ]



    const properties = {
        prevArrow: <button className='ml-5 p-2'><AiOutlineLeft className='text-white text-xl' /></button>,
        nextArrow: <button className='mr-5 p-2'><AiOutlineRight className='text-white text-xl' /></button>
    }
    return (
        <div className="slide-container relative ">
            <Fade {...properties}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className='flex flex-col items-center justify-center h-[90vh] bgImage ' style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover' }}>
                            <p className='uppercase font-bold text-xl text-themePrimary font-DM_Serif'>Havenly Capture</p>
                            <p className='text-6xl text-white font-Kaushan'>{slideImage.caption}</p>

                        </div>
                    </div>
                ))}
            </Fade>

        </div>
    );
};

export default TopBanner;