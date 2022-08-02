import React from 'react';
import NavItems from './NavItems';
import NavLogo from './NavLogo';


const Desktop = () => {
  return (
    <div className='px-5 w-screen flex justify-between items-center bg-dark/90 py-5 overflow-hidden'>
        <div>
            <NavLogo />
        </div>
        <nav className="flex items-center gap-x-2">
            <NavItems />
        </nav>
    </div>
  )
}

export default Desktop
