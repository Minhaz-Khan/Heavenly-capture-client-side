import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import image1 from '../../../../asset/pexels-chloe-1043474.jpg'
import image2 from '../../../../asset/pexels-flávio-augusto-1832959.jpg'
import image3 from '../../../../asset/pexels-italo-melo-2379004.jpg'
import image4 from '../../../../asset/pexels-vinicius-wiesehofer-1130626.jpg'


const OurTeam = () => {
    return (
        <div className='container mx-auto my-16 px-5'>
            <p className='text-green-700  font-semibold'>Our Team</p>
            <h2 className='text-5xl '>The Creatives</h2>
            <hr className='mt-3 w-3/12' />
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                <div href="#" class="block group">
                    <div className='overflow-hidden'>
                        <img
                            src={image3}
                            alt=""
                            class="object-cover w-full rounded-lg hover:scale-110 duration-300 aspect-square"
                        />
                    </div>

                    <div class="mt-3 ">
                        <h3
                            class="font-medium text-gray-900 text-xl"
                        >
                            Jeremy Welch
                        </h3>

                        <p class="mt-1 text-sm text-gray-700">Head Of Events</p>
                        <div className='flex space-x-1 mt-1'>
                            <Link to={'https://www.facebook.com'}><BsFacebook className=' text-themePrimary text-lg' /></Link>
                            <Link ><AiFillInstagram className=' text-themePrimary text-lg' /></Link>
                            <Link><AiFillTwitterCircle className=' text-themePrimary text-lg' /></Link>
                        </div>
                    </div>
                </div>
                <div href="#" class="block group">
                    <div className='overflow-hidden'>
                        <img
                            src={image2}
                            alt=""
                            class="object-cover w-full rounded-lg hover:scale-110 duration-300 aspect-square"
                        />
                    </div>

                    <div class="mt-3">
                        <h3
                            class="font-medium text-gray-900 text-xl"
                        >
                            April Ryan
                        </h3>

                        <p class="mt-1 text-sm text-gray-700">Photographer</p>
                        <div className='flex space-x-1 mt-1'>
                            <Link to={'https://www.facebook.com'}><BsFacebook className=' text-themePrimary text-lg' /></Link>
                            <Link ><AiFillInstagram className=' text-themePrimary text-lg' /></Link>
                            <Link><AiFillTwitterCircle className=' text-themePrimary text-lg' /></Link>
                        </div>
                    </div>
                </div>
                <div href="#" class="block group">
                    <div className='overflow-hidden'>
                        <img
                            src={image1}
                            alt=""
                            class="object-cover w-full rounded-lg hover:scale-110 duration-300 aspect-square"
                        />
                    </div>

                    <div class="mt-3">
                        <h3
                            class="font-medium text-gray-900 text-xl"
                        >
                            Robin Smith
                        </h3>

                        <p class="mt-1 text-sm text-gray-700">Client Director</p>
                        <div className='flex space-x-1 mt-1'>
                            <Link to={'https://www.facebook.com'}><BsFacebook className=' text-themePrimary text-lg' /></Link>
                            <Link ><AiFillInstagram className=' text-themePrimary text-lg' /></Link>
                            <Link><AiFillTwitterCircle className=' text-themePrimary text-lg' /></Link>
                        </div>
                    </div>
                </div>
                <div href="#" class="block group ">
                    <div className='overflow-hidden'>
                        <img
                            src={image4}
                            alt=""
                            class="object-cover w-full rounded-lg hover:scale-110 duration-300 aspect-square"
                        />
                    </div>

                    <div class="mt-3">
                        <h3
                            class="font-medium text-gray-900 text-xl"
                        >
                            Olivia Nelson
                        </h3>

                        <p class="mt-1 text-sm text-gray-700">HR Manager</p>
                        <div className='flex space-x-1 mt-1'>
                            <Link to={'https://www.facebook.com'}><BsFacebook className=' text-themePrimary text-lg' /></Link>
                            <Link ><AiFillInstagram className=' text-themePrimary text-lg' /></Link>
                            <Link><AiFillTwitterCircle className=' text-themePrimary text-lg' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;