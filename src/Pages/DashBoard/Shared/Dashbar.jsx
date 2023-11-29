// import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaUser, } from "react-icons/fa"

import AdminMenus from './AdminMenus';
import UserMenus from './UserMenus';


import useRole from '../../../hooks/useRole';
import DeliveryMenus from './DeliveryMenus';
import logo from "../../../assets/logo.png"

const Dashbar = () => {
    // const { logout } = useAuth()
    // const handleLogout = () => {
    //     logout()
    //         .then(() => {
    //             toast.error("Logged Out")
    //         })
    // }
    const [userRole] = useRole()
    // if (isRoleLoading) {
    //     return <h1>loading ...</h1>
    // }
    console.log(userRole);
    const isAdmin = userRole?.admin
    // const isAdmin = 
    const isDeliveryMan = userRole?.deliveryman
    // const isDeliveryMan = false

    const DashbarLinks = <>
        <li><NavLink to={"/dashboard/userProfile"}><FaUser /> My Profile</NavLink></li>


        {
            isAdmin ?
                <AdminMenus />
                :
                isDeliveryMan ?
                    <DeliveryMenus />
                    :
                    <UserMenus />

        }
        <div className="divider"></div>
        <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
        {/* <li><button onClick={handleLogout} className='btn-ghost'><MdLogout /> Logout  </button></li> */}

    </>

    return (
        <div>
            <div className='md:hidden flex flex-row-reverse justify-between'>
                <div>
                    <Link to={"/"} className="btn btn-ghost text-xl h-fit">
                        <img src={logo} width={"55px"} className='h-fit'></img>
                    </Link>
                </div>
                <div>
                    <Link to={"/dashboard"} className='btn btn-ghost text-xl text-blue-400 '>
                        DashBoard
                    </Link>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {DashbarLinks}
                        {/* <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li> */}
                    </ul>
                </div>
            </div>

            <div className=" hidden md:block w-[250px] bg-blue-100 min-h-screen px-4 py-12">
                <ul className='menu text-lg text-black '>
                    {DashbarLinks}
                    {/* {
                        isAdmin ?
                            <AdminMenus />
                            :
                            isDeliveryMan ?
                                <DeliveryMenus />
                                :
                                <UserMenus />

                    }
                    <div className="divider"></div>
                    <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
                    <li><button onClick={handleLogout} className='btn-ghost'><MdLogout /> Logout  </button></li> */}
                </ul>


            </div>

        </div>
    );
};

export default Dashbar;