import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa"

const AdminMenus = () => {
    return (
        <>
            <li><NavLink to={"/dashboard/adminHome"}><FaHome />Admin Home</NavLink></li>
            <li><NavLink to={"/dashboard/addItems"}><FaUtensils />Add Items </NavLink></li>
            <li><NavLink to={"/dashboard/manageItems"}><FaList />Manage Items  </NavLink></li>
            <li><NavLink to={"/dashboard/manageBookings"}><FaBook />Manage Bookings  </NavLink></li>
            <li><NavLink to={"/dashboard/allUsers"}><FaUsers />All Users  </NavLink></li>

        </>
    );
};

export default AdminMenus;