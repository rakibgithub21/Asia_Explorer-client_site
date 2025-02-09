import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextComponent";
import Loading from "./Loading";
import { toast } from "react-toastify";

import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from '../assets/2072187.png'


const Navbar = () => {
    const { logout, user, loading } = useContext(AuthContext)
    const [theme, setTheme] = useState('light');
   
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    if (loading) {
        return <Loading></Loading>
    }

    const logoutUser = () => {
        logout()
            .then(() => {
                // Sign-out successful.
                toast.success('Log out successful');
            })
            .catch(() => {
                // An error happened.
                // console.log(error);
            });
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        }
    }


    return (
        <div className="bg-base-200">
            <div className="navbar bg-base-200 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'text-lg hover:text-rose-500 '} to={'/'}>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'text-lg hover:text-rose-500 '} to={'/tourist-spot'}>All Tourists Spot</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/add-tourist'}>Add Tourists Spot</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/my-list'}>My List</NavLink>
                        </ul>
                    </div>
                    <a  className="btn flex items-center gap-1 btn-ghost  lg:text-xl"><img className="w-10" src={logo} alt="" />Asia Explorer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex raleway gap-2 font-medium ">
                        <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/'}>Home</NavLink>
                        <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold   text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/tourist-spot'}>All Tourists Spot</NavLink>
                        <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold   text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/add-tourist'}>Add Tourists Spot</NavLink>
                        <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold   text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/my-list'}>My List</NavLink>
                    </div>
                </div>
                <div className="navbar-end flex gap-3">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" className="theme-controller" />
                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                    {
                        user ? <>
                            
                                
                                    <div className="w-12 h-12 rounded-full">
                                <img className="w-full h-full rounded-full" data-tooltip-id="my-tooltip-1"  alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                            
                            <button  className="btn btn-outline btn-error" onClick={logoutUser}>Logout</button>
                               
                           

                        </> : <Link to={'/login'} className="btn btn-success">Login</Link>
                   }

                   


                </div>
            </div>
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                variant="info"
                content={user?.displayName}
            />
            <ReactTooltip
                id="my-tooltip-2"
                place="bottom"
                variant="info"
                content="click me"
            />
           
       </div>
    );
};

export default Navbar;