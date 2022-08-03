import React from 'react';
import { MdDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <div id="services" className='bg-service bg-cover bg-no-repeat bg-center flex flex-col items-center container mx-auto py-16 mt-10 font-[poppins]'>
        <div className='w-96 md:w-[80%] border-t-2 border-blue-700'></div>
        <div className='mt-10 h-32 border-r-2 border-blue-700'></div>

        <div className='text-center py-10 flex flex-col items-center'>
            <h3 className='uppercase text-gray-600 font-[600] md:text-xl'>Services I Can Provide</h3>
            <p data-aos="flip-left" className='text-xl flex flex-col gap-y-2 items-center pt-5 text-blue-600 uppercase font-[georgia] md:text-4xl'>
                <span>Design - Build - Learn & Explore</span>
                <span>The Tech World With Me</span>
            </p>
        </div>

        <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-0 md:gap-x-8'>
            <ServiceItem Icon={MdDeveloperMode} title={'Web Development'}>
                <span>Ecommerce Websites</span>
                <span>Landing Page</span>
                <span>Single Page Applications</span>
                <span>General Purpose Websites</span>
            </ServiceItem>

            <ServiceItem Icon={MdOutlineDesignServices} title={'UI/UX Design'}>
                <span>Creating amazing and lovely</span>
                <span>designs for your brands</span>
                <span>businesses & websites</span>
            </ServiceItem>

            <ServiceItem Icon={GrOptimize} title={'Search Engine Optimization'}>
                <span>You want your business to be noticed online and</span>
                <span>also appear in search engines?</span>
                <span>Do you want more traffic on your website? I am at your service</span>
            </ServiceItem>
        </div>
    </div>
  )
}

export default Services