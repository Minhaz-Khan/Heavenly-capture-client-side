import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { BsArrowRight } from "react-icons/bs";

const AddServices = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const handleAddProduct = (data) => {
        const imageHostKey = process.env.REACT_APP_imageKey;
        const postTime = new Date().toLocaleDateString();
        const sellerEmail = user?.email;
        const serviceName = data.serviceName;
        const companyName = data.companyName;
        const packagePrice = data.packagePrice;
        const rating = data.rating;
        const image = data.image[0];
        const details = data.details
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const newProduct = { postTime, sellerEmail, serviceName, companyName, packagePrice, image: data.data.display_url, details, rating }
                fetch(`http://localhost:5000/addProduct?email=${user?.email}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('Your product is added')
                            reset()
                        }
                    })
            })
    }
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <h2 className="text-3xl border-b-2 border-lightSecondary text-lightSecondary font-medium uppercase ">Add Service</h2>
            </div>
            <section className="bg-white dark:bg-gray-900 flex justify-center w-full mt-10">
                <div className="flex justify-center w-5/6 ">
                    <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80)' }}  >
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Create a new service free now
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Monotonectally generate principle-centered leadership skills rather than 24/365 meta-services. Quickly syndicate next-generation communities.
                            </p>



                            <form onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div >
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Service Name</label>
                                    <select {...register('serviceName', { required: true })} className='w-full py-3 px-5   text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'>

                                        <option>Wedding Photography</option>
                                        <option>Wedding films</option>
                                        <option>Portrait</option>

                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Company Name</label>
                                    <input {...register('companyName', { required: true })} type="text" placeholder="companyName" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div >
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">rating</label>
                                    <select {...register('rating', { required: true })} className='w-full py-3 px-5   text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'>

                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>



                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Package Price</label>
                                    <input {...register('packagePrice', { required: true })} type="text" placeholder="Price" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Image</label>
                                    <input {...register('image', { required: true })} type="file" placeholder="" accept='image/*' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className='col-span-2'>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">details</label>


                                    <textarea {...register('details', { required: true })} id="message" rows="4" className=" block p-2.5 w-full text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write your thoughts here..."></textarea>

                                </div>

                                <button
                                    className="flex items-center  justify-between  px-6 py-3 text-base  tracking-wide text-white capitalize transition-colors duration-300 transform bg-themeSecondary rounded-lg hover:bg-lightSecondary focus:outline-none focus:ring focus:ring-lightSecondary focus:ring-opacity-50">
                                    <span>Add Product</span>

                                    <BsArrowRight className='text-2xl hover:translate-x-2 duration-300'></BsArrowRight>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddServices;