import React from 'react';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

const PortfolioItem = ({imgSrc, children}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip 
      data-aos="flip-down"
      isFlipped={isFlipped} 
      flipDirection={'horizontal'}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1} 
      containerClassName="relative col-span-1 font-[poppins] shadow-2xl drop-shadow-2xl"
    >
      <img 
        src={imgSrc} 
        alt="Project Type" 
        onMouseEnter={() => setIsFlipped(prev => !prev)} 
        onMouseLeave={() => setIsFlipped(isFlipped)} 
        className="cursor-pointer"
      />

      <div  
        onMouseEnter={() => setIsFlipped(isFlipped)}
        onMouseLeave={() => setIsFlipped(prev => !prev)}
        className="flex justify-center items-center p-3 text-center cursor-pointer h-full w-full bg-cyan-600"
      >
        {children}
      </div>

    </ReactCardFlip>
  )
}

export default PortfolioItem