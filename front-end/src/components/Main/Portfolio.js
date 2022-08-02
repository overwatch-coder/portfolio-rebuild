import React from 'react'
import { useState } from 'react';
import UiProjects from './UiProjects';
import WebProjects from './WebProjects';

const Portfolio = () => {
    const [webProjects, setWebProjects] = useState(true); 
    const [uiProjects, setUiProjects] = useState(false); 

    const goToUrl = (url) => {
        window.open(url, "_blank");
    }

    const displayWebPortfolio = () => {
        setWebProjects(true);
        setUiProjects(false);
    }

    const displayUiPortfolio = () => {
        setUiProjects(true);
        setWebProjects(false);
    }


  return (
    <div id="portfolio" className='mt-16 container mx-auto py-10 font-[poppins]'>
        <div className='flex flex-col items-center gap-y-4'>
            <h2 className='uppercase text-gray-700 font-[600] text-lg md:text-xl'>Portfolio</h2>
            <p className='text-center text-cyan-700 uppercase text-xl md:text-4xl'>
                Check Out Some Of My Recent Works
            </p>
            <div className='flex items-center gap-x-6'>
                <span 
                    className='uppercase cursor-pointer py-2 px-4 bg-cyan-700 hover:bg-blue-800 text-light rounded-full'
                    onClick={displayWebPortfolio}
                >
                    Web Dev
                </span>
                <span 
                    className='uppercase cursor-pointer py-2 px-4 bg-cyan-700 hover:bg-blue-800 text-light rounded-full'
                    onClick={displayUiPortfolio}
                >
                    UI Design
                </span>
            </div>

            {/* Websites  */}
            {webProjects && <WebProjects goToUrl={goToUrl} /> }

            {/* UI Design */}
            {uiProjects && <UiProjects goToUrl={goToUrl} /> }
        </div>
    </div>
  )
}

export default Portfolio