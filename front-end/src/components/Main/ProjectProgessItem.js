import React from 'react';
import CountUp from "react-countup";

const ProjectProgessItem = ({countNumber, description, suffix, duration}) => {
  return (
    <div data-aos="zoom-in-up" className='bg-gradient-to-tr from-cyan-800 to-blue-800 w-full h-[200px] py-4 shadow-2xl flex justify-center items-center gap-y-4 font-[poppins]'>
        <div className='text-center flex flex-col gap-y-5'>
            <h3 className='text-5xl md:text-6xl text-light font-[700]'>
              <CountUp end={countNumber} duration={duration} suffix={suffix} />
            </h3>
            <p className='text-lg md:text-xl text-light/70 font-[400]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectProgessItem