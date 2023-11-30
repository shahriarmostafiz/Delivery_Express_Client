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
import AdminHome from '../Pages/DashBoard/Admin/AdminHome/AdminHome';
import AdminRoute from './AdminRoute';
import AllParcels from '../Pages/DashBoard/Admin/AllParcels/AllParcels';
import AllUsers from '../Pages/DashBoard/Admin/Allusers/AllUsers';
import AllDeliveryman from '../Pages/DashBoard/Admin/AllDeliveryMan/AllDeliveryman';
import DeliveryRoute from './DeliveryRoute';
import Mydeliveries from '../Pages/DashBoard/DeliverMan/MyDeliveries/Mydeliveries';
import MyReviews from '../Pages/DashBoard/DeliverMan/MyReviews.jsx/MyReviews';
import UpdateBooking from '../Pages/DashBoard/User/AddBooking/Updatebooking/UpdateBooking';
import Payment from '../Pages/DashBoard/User/Payment/Payment';
import PaymentCompleted from '../Pages/DashBoard/User/Payment/PaymenCompleted';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SearchPage from '../Pages/SearchPage/SearchPage';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            }, {
                path: "/search/:place",
                element: <SearchPage></SearchPage>
            }
        ]
    }, {
        path: "dashboard",
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            // user routes 
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
            }, {
                path: "updateBooking/:id",
                element: <UpdateBooking />
            }, {
                path: "payment/:id",
                element: <Payment></Payment>
            }, {
                path: "paymentCompleted",
                element: <PaymentCompleted />
            },
            // AdminRoutes
            {
                path: "adminHome",
                element: <AdminRoute>
                    <AdminHome />
                </AdminRoute>
            }, {
                path: "allParcels",
                element: <AdminRoute>
                    <AllParcels />
                </AdminRoute>
            }, {
                path: "allUsers",
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            }, {
                path: "allDeliveryman",
                element: <AdminRoute>
                    <AllDeliveryman />
                </AdminRoute>
            },

            // deliverymanRoutes
            {
                path: "myDeliveryList",
                element: <DeliveryRoute>
                    <Mydeliveries />
                </DeliveryRoute>
            }, {
                path: "myReviews",
                element: <DeliveryRoute>
                    <MyReviews></MyReviews>
                </DeliveryRoute>
            }

        ]
    }
])

export default MainRoute;