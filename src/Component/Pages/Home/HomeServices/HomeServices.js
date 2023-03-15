import React from 'react';
import { Link } from 'react-router-dom';
import films from '../../../../asset/films.jpg'
import films2 from '../../../../asset/films2.jpg'
import Portrait from '../../../../asset/portrait-1.jpg'
import Portrait2 from '../../../../asset/portrait-2.jpg'
import wedding from '../../../../asset/wedding.jpg'
import wedding2 from '../../../../asset/wedding2.jpg'


const HomeServices = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-y-10 mx-auto justify-items-center my-16'>
            <div class="md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relative h-64 group">
                    <img
                        src={wedding}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src={wedding2}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-0 group-hover:opacity-100"
                    />
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-themePrimary ">Wedding Photography</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to={'/services/Wedding Photography'} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-themeSecondary rounded-lg hover:bg-lightSecondary focus:ring-4 focus:outline-none focus:ring-lightSecondary ">
                        View more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
            <div class="md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relative h-64 group">
                    <img
                        src={films}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src={films2}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-0 group-hover:opacity-100"
                    />
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-themePrimary ">Wedding Films</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to={'/services/Wedding films'} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-themeSecondary rounded-lg hover:bg-lightSecondary focus:ring-4 focus:outline-none focus:ring-lightSecondary ">
                        View more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
            <div class=" md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relative h-64 group">
                    <img
                        src={Portrait}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src={Portrait2}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover duration-200 opacity-0 group-hover:opacity-100"
                    />
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-themePrimary ">Portrait</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to={'/services/Portrait'} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-themeSecondary rounded-lg hover:bg-lightSecondary focus:ring-4 focus:outline-none focus:ring-lightSecondary ">
                        View more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default HomeServices;