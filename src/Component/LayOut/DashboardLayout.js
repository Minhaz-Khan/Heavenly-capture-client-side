import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../asset/main-Logo/pngegg (2).png'
import useUserType from '../../useUserType/useUserType';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const { userType, isLoading } = useUserType(user?.email)
    console.log(userType);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile container mx-auto  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet ></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white md:bg-Beige border-x-2 rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav className="-mx-3 space-y-6 ">
                                <div className="space-y-3 ">
                                    <Link className='flex space-x-2 justify-center items-center'>
                                        <img className="w-auto md:h-10 h-7" src={logo} alt="" />
                                        <h4 className='text-xl font-DM_Serif font-bold'>Heavenly-Capture</h4>
                                    </Link>





                                    <Link to={'/dashboard'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                        <span className="mx-2 text-sm font-medium">Dashboard</span>
                                    </Link>
                                    {userType === 'buyer' && <>
                                        <Link to={'/dashboard/mybooking'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">My Bookings</span>
                                        </Link>
                                        <Link to={'/dashboard/wishlist'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">WishList</span>
                                        </Link></>}


                                    {userType === 'Seller' && <>
                                        <Link to={'/dashboard/addservice'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">Add Service</span>
                                        </Link>
                                        <Link to={'/dashboard/myProduct'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">My Products</span>
                                        </Link>
                                    </>}
                                    {
                                        userType === 'Admin' && <>
                                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                                <span className="mx-2 text-sm font-medium">All Sellers</span>
                                            </Link>
                                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                                <span className="mx-2 text-sm font-medium">
                                                    All Buyers
                                                </span>
                                            </Link></>
                                    }

                                </div>

                                <div className="flex flex-col items-center  -mx-2">
                                    <img className="object-cover w-16 h-16 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
                                </div>


                            </nav>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;