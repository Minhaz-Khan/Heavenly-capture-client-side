import React from 'react';
import image1 from '../../../../asset/MomentPhoto/pexels-beyza-kaplan-13832465.jpg'
import image2 from '../../../../asset/MomentPhoto/pexels-pavel-danilyuk-7119161.jpg'
import image3 from '../../../../asset/MomentPhoto/pexels-pham-hoang-kha-3785645.jpg'
import image4 from '../../../../asset/MomentPhoto/pexels-victoria-strelkaph-12194459.jpg'
import './Moments.css'
import { AiOutlineArrowRight } from "react-icons/ai";


const Moments = () => {
    return (
        <div className=' bg-themePrimary pt-16 '>
            <div className='container mx-auto grid grid-cols-4 '>
                <div className='flex col-span-4 lg:col-span-2'>
                    <div className='h-20 lg:h-52 w-[2px] bg-themeSecondary ml-10 -mt-16'></div>
                    <div>
                        <h3 className='mt-20 lg:mt-32 ml-10 text-5xl 2xl:text-6xl font-semibold   momentText'>The work we can<br />
                            do for your moments</h3>
                        <AiOutlineArrowRight className='mt-10 text-themeSecondary' />
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 col-span-4 lg:col-span-2 space-x-0 gap-y-5 md:space-x-5 mt-14 lg:mt-0'>
                    <div className=''>

                        <img src={image1} alt="" className='md:h-[360px] w-full' />

                    </div>
                    <div className='md:-mt-16'>
                        <img src={image2} alt="" />
                    </div>
                    <div className=''>
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moments;