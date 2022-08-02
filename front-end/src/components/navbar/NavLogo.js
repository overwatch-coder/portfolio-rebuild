import React from 'react';
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

const NavLogo = () => {
  return (
    <>
        <Link to={"/"} className='flex items-end text-cyan-500'>
            <span className='uppercase font-[georgia] text-3xl'>Overwatch</span>
            <GoPrimitiveDot className='text-2xl' />
        </Link>
    </>
  )
}

export default NavLogo