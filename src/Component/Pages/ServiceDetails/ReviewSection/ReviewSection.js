import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Triangle } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ReviewSection = ({ serviceinfo }) => {
    const { user } = useContext(AuthContext)
    const { _id, serviceName, sellerEmail, companyName, packagePrice, rating, details, image } = serviceinfo;
    const { data: reviews, refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`https://heavenlycapture.vercel.app/reviews/${_id}`)
            const data = await res.json();
            return data;
        }
    })


    const handleReview = (event) => {
        if (!user) {
            <Navigate to={'/login'}></Navigate>
        }
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value;
        const rating = form.rating.value;
        console.log(feedback, rating);
        const date = new Date().toLocaleString();

        const review = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
            serviceId: _id,
            rating,
            feedback,
            date
        }

        fetch('https://heavenlycapture.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('your review added');
                    form.reset();
                    refetch()
                }
            })

    }

    if (isLoading) {

        <div className='h-screen flex justify-center items-center'>
            <Triangle
                height="80"
                width="80"
                color="blue"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>

    }
    return (
        <div className='container mx-auto p-10 grid grid-cols-5 '>
            <div className="flex flex-col col-span-5 lg:col-span-2 max-w-lg p-5  rounded-xl lg:p-5 shadow-xl h-6/6 lg:h-80">
                <div className="flex flex-col items-center w-full">
                    <span className="text-center text-3xl">How was your experience?</span>

                    <form onSubmit={handleReview} className="flex flex-col w-full">
                        <textarea rows="3" name='feedback' placeholder="Message..." className="p-4 mt-4 rounded-md resize-none bg-gray-100"></textarea>
                        <select name="rating" className='w-10 mt-4 border-2'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <button type="submit" className="py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-themeSecondary rounded-lg hover:bg-lightSecondary focus:outline-none focus:ring focus:ring-lightSecondary focus:ring-opacity-80">{user ? 'Submite feedback' : 'please login first'}</button>
                    </form>
                </div>

            </div>
            <div className='col-span-5 lg:col-span-3 p-5'>
                <h1 className='uppercase text-xl text-center font-bold mb-4'>our castomer service feedback</h1>
                {reviews ? reviews.map(review => <Review key={review._id} review={review} refetch={refetch}></Review>) : <div className='w-full flex justify-center items-center h-5/6'><h2 className='text-5xl '> No reviews ....</h2></div>}
            </div>
        </div>
    );
};

export default ReviewSection;