import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa"
import { MdOutlineRateReview, MdOutlineRestaurantMenu, MdShoppingBag } from "react-icons/md";
import { LuPackage } from "react-icons/lu";


const UserMenus = () => {
    return (
        <>
            {/* <li><NavLink to={"/dashboard/userProfile"}><FaUsers /> Home</NavLink></li> */}
            <li><NavLink to={"/dashboard/addbooking"}><FaCalendar /> Book a Parcel </NavLink></li>
            <li><NavLink to={"/dashboard/myparcels"}><LuPackage /> My Parcels </NavLink></li>

            {/* <li><NavLink to={"/dashboard/paymenthistory"}><FaWallet /> Payment History</NavLink></li>
            <li><NavLink to={"/dashboard/myBookings"}><FaCalendarCheck /> My Booking </NavLink></li> */}
        </>
    );
};

export default UserMenus;