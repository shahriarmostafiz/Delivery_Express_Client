import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import DashboardLayout from '../Layouts/DashboardLayOut';

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
        element: <DashboardLayout />,
        children: [
            {

            }

        ]
    }
])

export default MainRoute;