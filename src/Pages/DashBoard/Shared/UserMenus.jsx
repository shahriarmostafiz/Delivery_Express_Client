import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa"
import { MdOutlineRateReview, MdOutlineRestaurantMenu, MdShoppingBag } from "react-icons/md";


const UserMenus = () => {
    return (
        <>
            <li><NavLink to={"/dashboard/usersHome"}><FaHome /> Home</NavLink></li>
            <li><NavLink to={"/dashboard/reservation"}><FaCalendar /> Reservation</NavLink></li>
            <li><NavLink to={"/dashboard/paymenthistory"}><FaWallet /> Payment History</NavLink></li>
            <li><NavLink to={"/dashboard/cart"}><FaCartPlus /> My Cart</NavLink></li>
            <li><NavLink to={"/dashboard/myBookings"}><FaCalendarCheck /> My Booking </NavLink></li>
            <li><NavLink to={"/dashboard/reviews"}><MdOutlineRateReview /> My Reviews </NavLink></li>
        </>
    );
};

export default UserMenus;