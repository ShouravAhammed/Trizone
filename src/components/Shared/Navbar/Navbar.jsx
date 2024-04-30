import { useContext, useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import DefaultUser from '../../../assets/user.png'
import { MdAirlineSeatReclineExtra, MdLightMode, MdLogin } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const [theme, setTheme] = useState('lemonade')


    const handleLogOut = () => {
      logOut()
      
    }

    const handleThemeChange = (e) => {
      if(e.target.checked){
        setTheme('sunset')
      }else{
        setTheme('lemonade')
      }
    }
    useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const navLinks = 
    <>
        <li className="font-medium text-base"><NavLink data-tooltip-id="home" data-tooltip-content="Home"  to={'/'} className={({isActive}) => isActive ? 'text-green-500' : 'text-white hover:text-green-500 duration-300'}>Home</NavLink> <Tooltip id="home" /></li>
        <li className="font-medium text-base"><NavLink to={'/allTouristSpot'} data-tooltip-id="tourist" data-tooltip-content="All Tourist Spot" className={({isActive}) => isActive ? 'text-green-500' : 'text-white hover:text-green-500 duration-300'}>All Tourist Spot</NavLink>
        <Tooltip id="tourist" />
        </li>
        {
          user && <div className="flex lg:gap-5 gap-2 lg:flex-row flex-col justify-center lg:items-center items-start">
            <li className="font-medium text-base"><NavLink to={'/addTouristSpot'} data-tooltip-id="add" data-tooltip-content="Add Tourist Spot"  className={({isActive}) => isActive ? 'text-green-500' : 'text-white hover:text-green-500 duration-300'}>Add Tourist Spot</NavLink>
            <Tooltip id="add" /></li>
            <li className="font-medium text-base"><NavLink to={'/myList'} data-tooltip-id="list" data-tooltip-content="My List" className={({isActive}) => isActive ? 'text-green-500' : 'text-white hover:text-green-500 duration-300'}>My List</NavLink> <Tooltip id="list" /></li>
          </div>


        }
    </>


    return (
        <div className="bg-[#00000033]">
        <div className="navbar py-6 container mx-auto px-2 lg:px-8 ">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="p-4 lg:hidden">
    <span className="text-xl text-white"><HiMenuAlt1 /></span>
  </div>
  <ul tabIndex={0} className="flex flex-col gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000000CC] rounded-none w-52">
    {navLinks}
  </ul>
</div>
<Link to={'/'} className="md:text-3xl text-xl text-white hover:text-green-300 duration-300 flex justify-center items-center font-normal flex-row">
  <span><MdAirlineSeatReclineExtra /></span><span className="font-extrabold">TRIZONE</span></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="flex justify-center items-center gap-5 font font-semibold">
 {navLinks}
</ul>
</div>
<div className="navbar-end space-x-2">

<label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleThemeChange} type="checkbox" className="theme-controller"  />
  
  {/* sun icon */}
  <span className="swap-off fill-current text-2xl text-green-500"><MdLightMode/></span>
  
  {/* moon icon */}
  <span className="swap-on fill-current text-2xl text-green-500"><BsMoonStars /></span>
  
</label>


{
user ? 
<div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-circle btn-sm hover:border-2 border-green-500 duration-300" data-tooltip-id="drop" data-tooltip-content={user?.displayName}>
   <div className="w-8 rounded-full bg-white">
     <img className="rounded-full" alt="" src={user?.photoURL ? user?.photoURL : DefaultUser} />  
  </div>
 </label>
 <Tooltip id="drop" />
    <ul tabIndex={0} className="flex flex-col gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000000CC] rounded-none w-52">
      <li><p className="text-base font-extrabold text-center text-white">{user?.displayName || 'User Name'}</p></li>
      <li>

      <button onClick={handleLogOut} className="relative inline-flex items-center justify-center py-2 px-6 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
              <MdLogin />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
              LOGIN
              </span>
              <span className="relative invisible">
              LOGIN
              </span>
            </button>

  </li>
    </ul>
  </div> 
  : <Link to={'/login'} class="relative inline-block text-lg group" data-tooltip-id="login" data-tooltip-content="login">
  <span className="relative z-10 block px-5 py-1 overflow-hidden font-semibold uppercase leading-tight text-green-500 transition-colors duration-300 ease-out border-2 border-green-500 rounded-md group-hover:text-white">
  <span className="absolute inset-0 w-full h-full px-5 py-1 rounded-md bg-gray-50"></span>
  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
  <span className="relative">Login</span>
  </span>
  <span className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"></span>
  <Tooltip id="login" />
  </Link>
}

</div>
</div>
    </div>
    );
};

export default Navbar;


