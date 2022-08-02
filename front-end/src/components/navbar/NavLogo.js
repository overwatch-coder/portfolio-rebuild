import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLogo = () => {
  return (
    <>
        <AnchorLink href='#home' className='flex items-end text-cyan-500'>
            <span className='uppercase font-[georgia] text-3xl'>Overwatch</span>
            <GoPrimitiveDot className='text-2xl' />
        </AnchorLink>
    </>
  )
}

export default NavLogo