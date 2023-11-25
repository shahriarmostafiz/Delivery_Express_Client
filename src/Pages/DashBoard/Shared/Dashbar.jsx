// import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa"
import { MdLogout, MdOutlineRateReview, MdOutlineRestaurantMenu, MdShoppingBag } from "react-icons/md";
import { Helmet } from 'react-helmet-async';
import AdminMenus from './AdminMenus';
import UserMenus from './UserMenus';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const Dashbar = () => {
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.error("Logged Out")
            })
    }
    const isAdmin = true;

    return (
        <div>

            <div className=" hidden md:block w-[250px] bg-blue-100 min-h-screen px-4 py-12">
                <ul className='menu text-lg text-black '>
                    {
                        isAdmin ?
                            <AdminMenus />
                            :
                            <UserMenus />

                    }
                    <div className="divider"></div>
                    <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
                    <li><NavLink to={"/menu"}><MdOutlineRestaurantMenu /> Menu </NavLink></li>
                    <li><NavLink to={"/order"}><MdShoppingBag /> Shop </NavLink></li>
                    <li><button onClick={handleLogout} className='btn-ghost'><MdLogout /> Logout  </button></li>
                </ul>


            </div>

        </div>
    );
};

export default Dashbar;