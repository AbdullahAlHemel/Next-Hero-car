'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { signOut, useSession } from 'next-auth/react';

const NavBar = () => {
    const session = useSession()
    console.log(session);
    
    return (
        <div>
          <div className="navbar container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-red-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {
                  navItems.map((item) => (
                    <Link href={item.path} key={item.title}>{item.title}</Link>
                  ))
                }
            </ul>
            </div>
              <Link href={'/'}>
                <Image src={'/assets/logo.svg'} height={60} width={100} alt='logo'/>
              </Link>
           </div>
        <div className="navbar-center hidden lg:flex">
            <div className="flex items-center space-x-6">
               {
                  navItems.map((item) => (
                    <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.title}>{item.title}</Link>
                  ))
               }
            </div>
        </div>
        <div className="navbar-end">
            <div className='flex space-x-3 items-center'>
              <IoCartSharp className='text-2xl'/>
              <FaSearch className='text-2xl'/>
              <a className="btn btn-outline btn-primary px-8">Appointment</a>
            
             {session?.data?.user?.image &&
              <div>
                  <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50}/>
              </div>
             }
             {
              session?.status === 'loading' &&
              <h6>Loading...</h6>
             }
             { session?.status === 'unauthenticated' &&
               <Link href={'/login'} className='btn btn-primary px-8'>Login</Link>
             }
             { session.status === 'authenticated' && 
              <button onClick={() => signOut()} className="btn btn-primary px-8">Logout</button> 
             }
            </div>
        </div>
        </div>
       </div>
    );
};

const navItems =[
  {
      title : "Home",
      path  : "/"
  },
  {
      title : "About",
      path  : "/about"
  },
  {
      title : "Services",
      path  : "/services"
  },
  {
      title : "MyBookings",
      path  : "/myBookings"
  },
  {
      title : "Blog",
      path  : "/blog"
  },
  {
      title : "Contact",
      path  : "/contact"
  },
]

export default NavBar;