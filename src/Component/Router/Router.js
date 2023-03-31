import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../LayOut/DashboardLayout";
import Main from "../LayOut/Main";
import Chat from "../Pages/Chat/Chat";
import AddServices from "../Pages/Dashboard/AddServices/AddServices";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/User/Login";
import SignUp from "../Pages/User/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AdminRoute from '../PrivetRoute/AdminRoute'
import MyProduct from "../Pages/Dashboard/MyProducts/MyProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services/:category',
                element: <PrivetRoute><Services></Services></PrivetRoute>,
                loader: ({ params }) => fetch(`https://heavenlycapture.vercel.app/services?category=${params.category}`)
            },
            {
                path: '/service/:id',
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://heavenlycapture.vercel.app/service/${params.id}`)
            },
            {
                path: '/chat',
                element: <PrivetRoute><Chat></Chat></PrivetRoute>,
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
            },
            {
                path: '/dashboard/mybooking',
                element: <AdminRoute><MyBookings></MyBookings></AdminRoute>
            },
            {
                path: '/dashboard/addservice',
                element: <AdminRoute><AddServices></AddServices></AdminRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <AdminRoute><MyProduct></MyProduct></AdminRoute>
            },
        ]
    }
])