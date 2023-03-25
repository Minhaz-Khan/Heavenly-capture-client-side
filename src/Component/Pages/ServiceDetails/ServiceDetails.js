import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ReviewSection from './ReviewSection/ReviewSection';
import ServiceSlider from './ServiceSlider/ServiceSlider';
import { BsFillChatDotsFill } from "react-icons/bs";

const ServiceDetails = () => {
    const serviceinfo = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { _id, serviceName, sellerEmail, companyName, packagePrice, rating, details, image } = serviceinfo;

    return (


        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div>
                    <h1 className="text-2xl font-bold lg:text-3xl">{serviceName}</h1>

                    <p className="mt-1 text-sm text-gray-500">{sellerEmail}</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="relative mt-4">
                            <img
                                alt="Tee"
                                src={image}
                                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                            />


                        </div>


                    </div>

                    <div className="lg:sticky lg:top-0">
                        <form className="space-y-4 lg:pt-8">
                            <fieldset>
                                <legend className="text-lg font-bold">Company:</legend>

                                <div className="mt-2 flex flex-wrap gap-1">
                                    <p>{companyName}</p>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="text-lg font-bold">Rating</legend>

                                <div className="mt-2 flex flex-wrap gap-1">
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="rounded border bg-gray-100 p-4">
                                <p className="text-sm">
                                    <span className="block"> Pay as low as $3/mo with 0% APR. </span>

                                    <a href="" className="mt-1 inline-block underline"> Find out more </a>
                                </p>
                            </div>

                            <div>
                                <p className="text-xl font-bold">${packagePrice}</p>
                            </div>

                            <label
                                onClick={() => setIsModalOpen(true)}
                                htmlFor="Booking-Modal"
                                type="button"
                                className="w-full text-center cursor-pointer rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                            >
                                Book now
                            </label>

                            <Link to={'/chat'}
                                type="button"
                                className="w-full flex justify-center items-center rounded border border-green-300 bg-green-100 hover:bg-green-200 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                            >
                                Talk to Seller <BsFillChatDotsFill className='ml-2 text-xl' />
                            </Link>

                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="prose max-w-none">
                            <p>
                                {details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <p className='text-3xl font-medium mb-10 text-center'>Our others services</p>
                <ServiceSlider sellerEmail={sellerEmail}></ServiceSlider>
            </div>
            <ReviewSection serviceinfo={serviceinfo} />
            {isModalOpen && <BookingModal serviceinfo={serviceinfo} setIsModalOpen={setIsModalOpen}></BookingModal>}
        </section>

    );
};

export default ServiceDetails;