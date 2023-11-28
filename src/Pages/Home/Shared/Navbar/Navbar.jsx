import useAuth from '../../../../hooks/useAuth';
import auth from '../../../../Firebase/firebase.config';
import logo from "../../../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useAuth()
    const handleLogout = () => {
        // console.log("trying to logout");
        logout()
            .then(() => {
                toast.error("Logged out")
            })
            .catch(() => {
                toast.error("something went wrong")
            })
    }
    const navBarLinks = <>
        <li><NavLink to={"/"}>Home</NavLink> </li>
        {/* {
            user &&
        } */}
    </>
    return (
        <div className='my-2'>

            <div className='  w-full  md:flex md:justify-between  lg:justify-center'>
                <div className='md:w-full lg:max-w-[1280px]'>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navBarLinks}
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
                            <Link to={"/"} className="btn btn-ghost text-xl h-fit">
                                <img src={logo} width={"55px"} className='h-fit'></img>
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navBarLinks}
                                {/* <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li> */}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            {
                                user ? <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={auth.currentUser?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 cursor-pointer">
                                        <li className='hover:bg-black hover:bg-opacity-40 rounded px-4 w-fit'>
                                            {auth.currentUser?.displayName}
                                        </li>
                                        <li><NavLink to={"/dashboard"} className="hover:bg-black hover:bg-opacity-40 rounded px-4 w-fit">DashBoard</NavLink> </li>

                                        <li className='hover:bg-black hover:bg-opacity-40 rounded px-4 w-fit' onClick={handleLogout}>Logout</li>
                                    </ul>
                                </div> :
                                    <>
                                        {/* <button className='btn-sm btn-success'>Sign in</button> */}
                                        <Link to={"/login"} className='btn  btn-sm btn-info text-white'>Sign in</Link></>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Navbar;