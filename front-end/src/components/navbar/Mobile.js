import React, { useState } from 'react';
import { IoMdList, IoMdClose } from "react-icons/io";
import NavItems from './NavItems';
import NavLogo from './NavLogo';

const Mobile = () => {
    const [showNavClass, setShowNavClass] = useState('translate-x-[1000px] absolute top-[68px]');
    const [showCloseButton, setShowCloseButton] = useState(false);

    const showNavMenu = () => {
        setShowNavClass('translate-x-[0] bg-dark/90 relative top-0');
        setShowCloseButton(!showCloseButton);
    }

    const hideNavMenu =  () => {
        setShowNavClass('translate-x-[1000px] absolute top-[68px]');
        setShowCloseButton(!showCloseButton);
    }

  return (
    <div className='flex flex-col items-center overflow-hidden'>
        {/* Logo & Hamburger Menu */}
        <div className='flex justify-between items-center w-screen py-4 px-3 bg-dark/90'>
            <NavLogo />
            <div className='cursor-pointer text-light'>
                {showCloseButton && 
                    <IoMdClose className='text-4xl' onClick={hideNavMenu} />
                }
                {!showCloseButton && 
                    <IoMdList className='text-4xl' onClick={showNavMenu} />
                }
            </div>
        </div>

        {/* Menu Items */}
        <nav 
            className={`${showNavClass} container mx-auto transition duration-1000 flex flex-col gap-y-4 items-start py-5`}
        >
            <NavItems />
        </nav>
    </div>
  )
}

export default Mobile
