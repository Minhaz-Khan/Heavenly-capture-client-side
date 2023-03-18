import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Review = ({ review, refetch }) => {
    const { user } = useContext(AuthContext)
    const { email, name, data, feedback, rating, serviceId, _id, image } = review
    const [isDisabled, setIsDisabled] = useState(true);
    const [newReview, setNewReview] = useState(feedback)
    console.log(newReview);

    const handleReview = (event) => {
        const newfeedback = event.target.value;
        setNewReview(newfeedback)
        console.log(newReview);
    }
    const handleReviewEdit = (id) => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: newReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('You reviews updated Successfully!',)
                    setIsDisabled(true)
                    refetch()
                }
            })
    }

    const handleDeletButton = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this comment",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/review/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'review deleted successfully',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })



    }
    return (
        <div>
            {review &&
                <div className='my-5'>

                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-x-2">
                            <img className="object-cover w-12 h-12 rounded-full hidden md:block" src={image} alt="" />

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

                                <p className="text-sm text-gray-500 dark:text-gray-400">{data}</p>
                            </div>
                        </div>
                        <div className="-ml-0.5 flex items-center">
                            <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <svg
                                className="h-5 w-5 text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <p className='text-slate-300 ml-2'>{rating}</p>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-around md:justify-between'>
                        <input onChange={handleReview} type="text" name='feedback' value={newReview} disabled={isDisabled} className={`${isDisabled ? 'border-0' : 'border-2'} bg-white w-full `} />
                        {user?.email === email ? <div className='flex md:flex-col lg:flex-row h-10'>
                            <button onClick={() => setIsDisabled(!isDisabled)} className={`py-1 px-2 ring-2 hover:bg-blue-600 hover:text-white ring-blue-500 rounded-xl `}> {isDisabled ? 'Edit' : 'Close'}</button>
                            {isDisabled ? <button onClick={() => handleDeletButton(_id)} className='py-1 px-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl ml-2'> Delete</button> :
                                <button onClick={() => handleReviewEdit(_id)} className='py-1 px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl ml-2'>submit</button>}
                        </div> : <div></div>}
                    </div>

                </div>}
        </div>
    );
};

export default Review;