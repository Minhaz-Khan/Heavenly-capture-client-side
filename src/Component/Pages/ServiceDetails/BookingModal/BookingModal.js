import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({ serviceinfo, setIsModalOpen }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { _id, serviceName, sellerEmail, companyName, packagePrice, rating, details, image } = serviceinfo;
    const { user } = useContext(AuthContext)
    const handlModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const eventLocation = form.location.value;
        const phoneNum = form.phoneNum.value;
        const bookingDetails = {
            eventLocation,
            phoneNum,
            buyerName: user.displayName,
            buyerEmail: user.email,
            bookedProductId: _id,
            serviceName,
            image,
            packagePrice,
            sellerEmail,
            companyName
        }
        console.log(bookingDetails);
        setIsLoading(true)
        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booked this item')
                }
                else if (data.message === 'alreay booked') {
                    toast.error('this item alreay booked')
                }
                setIsLoading(false)
                setIsModalOpen(false)
            })

    }
    return (
        < div >
            < input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative p-5 bg-Beige">
                    <label htmlFor="Booking-Modal" className="btn btn-sm  btn-circle border-none absolute right-4 top-4">✕</label>
                    <h3 className="text-lg font-bold uppercase text-center ">Give your info</h3>
                    <form onSubmit={handlModal} className='mt-6'>

                        <input value={user.displayName} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input value={user.email} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input value={serviceName} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input name='location' placeholder='Your Event Location' required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                        <input name='phoneNum' placeholder='Phone Number' required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                        <button type='submit' className="px-4 flex justify-center w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-themeSecondary rounded-md mt-3 hover:bg-lightSecondary focus:outline-none focus:bg-lightSecondary">
                            {isLoading ? <Oval
                                height={25}
                                width={25}
                                color="#0c3727"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#ffffff"
                                strokeWidth={6}
                                strokeWidthSecondary={2}

                            /> : "Booked"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default BookingModal;