import React, { useContext, useState } from 'react';
import { useQuery, } from '@tanstack/react-query'
import { Triangle } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import BookingItem from './BookingItem';
import PaymentModal from './PaymentModal';

const MyBookings = () => {
    const [paymentItem, setPaymentItem] = useState(null)
    const { user } = useContext(AuthContext);

    const { data: MyOders, isLoading, refetch } = useQuery({
        queryKey: ['mybooking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://heavenlycapture.vercel.app/mybooking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <dir className='h-screen flex justify-center items-center'>
            <Triangle
                height="80"
                width="80"
                color="#820000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </dir>
    }
    console.log(MyOders);
    const handleOrderDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://heavenlycapture.vercel.app/booking/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })

            }
        })
    }
    return (
        <div className='mt-6'>

            <section className="container px-4 mx-auto">
                <div className="flex items-center justify-center gap-x-3">
                    <h2 className="text-xl font-medium text-gray-800 dark:text-white ">My Order List</h2>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <span>IMAGE</span>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <span>Product Name</span>
                                            </th>



                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>price</span>


                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>


                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>


                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {MyOders?.length > 0 ? MyOders.map(order => <BookingItem key={order._id} setPaymentItem={setPaymentItem} handleOrderDelete={handleOrderDelete} order={order} />) : <div className='flex justify-center w-full'>
                                            <h2 className=' text-lg font-medium'>No Booking....</h2></div>}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {paymentItem && <PaymentModal paymentItem={paymentItem} setPaymentItem={setPaymentItem}></PaymentModal>}
        </div>
    );
};

export default MyBookings;