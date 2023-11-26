import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa"
import { LuPackageSearch } from "react-icons/lu";

const AdminMenus = () => {
    return (
        <>
            <li><NavLink to={"/dashboard/adminHome"}><FaHome />Admin Home</NavLink></li>
            <li><NavLink to={"/dashboard/allParcels"}><LuPackageSearch />All Parcels  </NavLink></li>
            <li><NavLink to={"/dashboard/allUsers"}><FaUsers />All Users  </NavLink></li>
            <li><NavLink to={"/dashboard/allDeliveryman"}><FaList />Deliverymen list  </NavLink></li>
            {/* <li><NavLink to={"/dashboard/manageBookings"}><FaBook />Manage Bookings  </NavLink></li> */}

        </>
    );
};

export default AdminMenus;