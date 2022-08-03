import React from 'react'

const ServiceItem = ({Icon, title, children}) => {
  return (
    <div data-aos="zoom-in-down" className='col-span-1 text-center flex flex-col items-center gap-y-5 bg-light shadow-2xl rounded py-10 px-8'>
        <Icon className='text-6xl md:text-7xl'/>
        <p className='text-blue-800 text-center uppercase text-lg md:text-xl font-[700] font-[georgia]'>
            {title}
        </p>
        <p className='flex flex-col items-center gap-y-3'>
            {children}
        </p>
    </div>
  )
}

export default ServiceItem