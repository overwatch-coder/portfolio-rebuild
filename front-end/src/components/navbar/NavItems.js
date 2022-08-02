import React from 'react';
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
    <Link to={'/#home'} className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Home</Link>
    <Link to={'/#about'} className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">About</Link>
    <Link to={'/#services'} className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Services</Link>
    <Link to={'/#portfolio'} className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Portfolio</Link>
    <Link to={'/#contact'} className="uppercase text-sm px-3 rounded transition py-2 text-light/70 hover:text-light hover:bg-cyan-600 w-full md:hover:bg-transparent md:hover:text-cyan-600">Contact</Link>
    </>
  )
}

export default NavItems