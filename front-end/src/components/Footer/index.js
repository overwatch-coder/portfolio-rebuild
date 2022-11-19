import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Index = () => {
  const goToUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className='w-screen container mx-auto text-center py-10 bg-blue-900 font-[poppins] text-light'>
      <div className='pt-5 md:pt-10 px-5 container mx-auto place-items-start grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-0 md:gap-x-8'>

      {/* Column 1 */}
        <div className='md:px-20 flex flex-col gap-y-5 col-span-1 md:col-span-2'>
          <h3 className='flex items-end gap-x-1 text-cyan-300 font-[georgia]'>
            <span className='uppercase tracking-wider text-4xl md:text-5xl'>Overwatch</span>
            <GoPrimitiveDot className='text-2xl' />
          </h3>
          <div className='pt-3 flex flex-col items-start gap-y-3'>
            <h2 className='tracking-wider text-sm uppercase text-gray-300 border-b-2 border-yellow-600'>
              Let's Link Up On Social Media
            </h2>
            <p className='pt-3 flex items-center gap-x-5'>
              <Link to={'#'} onClick={() => goToUrl('https://www.instagram.com/overwatch_coder/')}>
                <BsInstagram  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
              <Link to={'#'} onClick={() => goToUrl('https://www.twitter.com/overwatch_coder')}>
                <BsTwitter  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
              <Link to={'#'} onClick={() => goToUrl('https://www.github.com/overwatch-coder')}>
                <BsGithub  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
              <Link to={'#'} onClick={() => goToUrl('https://www.linkedin.com/in/nyamadi-atsu/')}>
                <BsLinkedin  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
              <Link to={'#'} onClick={() => goToUrl('https://wa.me/+212698551516')}>
                <BsWhatsapp  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
              <Link to={'#'} onClick={() => goToUrl('mailto:devbrainy98@gmail.com?subject=Request Help From Overwatch Coder')}>
                <MdOutlineEmail  className='text-xl md:text-2xl hover:text-cyan-500' />
              </Link>
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className='text-start col-span-1 flex flex-col items-start gap-y-4'>
          <h2 className='uppercase text-cyan-300 border-yellow-600 border-b-2 text-lg md:text-2xl'>Go To</h2>
          <div className='flex flex-col gap-y-6'>
            <AnchorLink href='#home' className="hover:text-yellow-500 transition">Home</AnchorLink>
            <AnchorLink href='#about' className="hover:text-yellow-500 transition">About</AnchorLink>
            <AnchorLink href='#services' className="hover:text-yellow-500 transition">Services</AnchorLink>
            <AnchorLink href='#portfolio' className="hover:text-yellow-500 transition">Portfolio</AnchorLink>
            <AnchorLink href='#contact' className="hover:text-yellow-500 transition">Contact</AnchorLink>
          </div>
        </div>

        {/* Column 2 */}
        <div className='text-start col-span-1 flex flex-col items-start gap-y-4'>
          <h2 className='uppercase text-cyan-300 border-yellow-600 border-b-2 text-lg md:text-2xl'>Services</h2>
          <div className='flex flex-col gap-y-6'>
            <AnchorLink href='#services' className="hover:text-yellow-500 transition">Web Development</AnchorLink>
            <AnchorLink href='#services' className="hover:text-yellow-500 transition">UI/UX Design</AnchorLink>
            <AnchorLink href='#services' className="hover:text-yellow-500 transition">Search Engine Optimization</AnchorLink>
          </div>
        </div>
      </div>

     <div className='flex flex-col md:items-center'>
      <div className='py-16 border-b-2 w-full md:w-[80%] border-light/50'></div>
      <div>
        <h2 className='pt-10 flex flex-col flex-start gap-y-2 md:gap-y-0 md:flex-row md:items-center md:gap-x-3 text-sm tracking-wider leading-loose'>
          <span>Copyright &copy; {new Date().getFullYear()} Overwatch Coder | </span>
          <span className='hover:underline cursor-pointer'>Privacy Policy | </span>
          <span className='hover:underline cursor-pointer'>All Rights Reserved </span>
        </h2>
      </div>
     </div>
    </div>
  )
}

export default Index
