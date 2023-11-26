import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import DashboardLayout from '../Layouts/DashboardLayOut';
import PrivateRoute from './PrivateRoute';
import AddBooking from '../Pages/DashBoard/User/AddBooking/AddBooking';
import MyParcels from '../Pages/DashBoard/User/MyParcel/MyParcels';
import UserProfile from '../Pages/DashBoard/User/UserProfile/UserProfile';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, {
                path: "/register",
                element: <Register></Register>
            }, {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }, {
        path: "dashboard",
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            // user bookings
            {
                path: "userProfile",
                element: <UserProfile />
            },
            {
                path: "addbooking",
                element: <AddBooking></AddBooking>

            }, {
                path: "myparcels",
                element: <MyParcels />
            }

        ]
    }
])

export default MainRoute;