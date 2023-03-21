import React from 'react';
import OverwatchImage from "../../assets/brainy.jpg";
import { Link } from "react-router-dom";
import CV from "../../assets/00.atsu_nyamadi_eng.pdf";

const About = () => {
  return (
    <div id="about" className='md:px-5 mt-16 container mx-auto py-10 overflow-hidden font-[poppins] flex flex-col gap-y-5 items-center  md:flex-row md:gap-y-0 md:justify-around md:items-start gap-x-4'>
        <div data-aos="zoom-in-right" className='md:max-w-[500px]'>
            <img 
                src={OverwatchImage} 
                alt="Overwatch Coder"
                className='object-contain w-full md:rounded-md' 
            />
        </div>

        <div data-aos="zoom-in-left" className='pt-5 px-3 flex flex-col items-center gap-y-3'>
            <h2 className='text-gray-500 uppercase font-[600] md:text-lg'>About Overwatch</h2>
            <h3 className='text-center uppercase text-blue-800 font-[600] text-lg md:text-2xl flex flex-col font-[georgia]'>
                <span className='leading-loose tracking-wider'>Front-End React Developer</span>
                <span className='tracking-wider'>UI/UX Designer</span>
            </h3>
            <p className='leading-loose text-start md:text-xl md:pt-5 md:leading-[2.3]'>
                I am a final year<span className='italic text-cyan-500'> Electronics and Optics for Embedded Systems Student</span>. <br />
                I spend most of my free time learning to code. <br />
                When not coding, I enjoy watching movies and series and listening to music. <br />
                I am very determined and passionate about everything techie
            </p>
            <Link 
                to={CV} 
                className='bg-blue-800 py-3 px-4 hover:bg-blue-600 text-light uppercase rounded'
                
                target="_blank"
            >
                Checkout My Resume
            </Link>
        </div>
    </div>
  )
}

export default About