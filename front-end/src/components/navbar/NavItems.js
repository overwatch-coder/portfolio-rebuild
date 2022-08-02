import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavItems = () => {
  return (
    <>
    <AnchorLink href='#index' className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Home</AnchorLink>
    <AnchorLink href='#about' className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">About</AnchorLink>
    <AnchorLink href='#services' className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Services</AnchorLink>
    <AnchorLink href='#portfolio' className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Portfolio</AnchorLink>
    <AnchorLink href='#contact' className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Contact</AnchorLink>
    </>
  )
}

export default NavItems