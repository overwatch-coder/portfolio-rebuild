import React, { useState } from 'react';
import Desktop from "./Desktop";
import Mobile from './Mobile';

const Index = () => {
    const [heightScrolled, setHeightScrolled] = useState(0);
    const [navFixedClass, setNavFixedClass] = useState(false);
    window.addEventListener('scroll', () => {
        setHeightScrolled(Math.floor(window.scrollY));
        setNavFixedClass(() => heightScrolled >= 120 ? true : false);
    })

  return (
    <div id="index" className={`z-[80] overflow-hidden transition duration-1000 ${navFixedClass ? 'fixed' : ''}`}>
        <div className='z-50 md:hidden'>
            <Mobile />
        </div>
        <div className='hidden md:block'>
            <Desktop />
        </div>
    </div>
  )
}

export default Index
