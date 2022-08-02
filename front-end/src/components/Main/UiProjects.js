import React from 'react';
import PortfolioItem from './PortfolioItem';
import UiQlikStudios from "../../assets/UI_qlikstudio.png";
import UiDrwoy from "../../assets/UI_drwoy.png";
import UiPortfolio from "../../assets/UI_Portfolio.png";
import UiETL from "../../assets/UI_ETL.png";
import UiNelia from "../../assets/UI_Nelia.png";
import { Link } from 'react-router-dom';

const UiProjects = ({goToUrl}) => {
  return (
    <div className='relative mt-10 px-2 gap-y-7 md:gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    >
      <PortfolioItem imgSrc={UiQlikStudios}>
          <div>
              <h3 className='text-2xl text-light font-[georgia]'>Photography Website UI Design</h3>
              <div className='text-sm flex flex-col items-center gap-y-1'>
                  <h3 className='pt-2 flex flex-col items-center gap-y-2'>
                      <span>A Visual Design of a Photography Website</span>
                  </h3>
                  <h4 className='pt-2 text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                      <span>Skillset: </span>
                      <span>Adobe XD</span>
                  </h4>
              </div>
              <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                  <Link 
                      to={'#'} 
                      className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                      onClick={() => goToUrl('https://xd.adobe.com/view/e6ddd72d-b391-45f8-8ace-48166367e234-b38e/')}
                  >
                      View Live Design
                  </Link>
              </div>
          </div>
      </PortfolioItem>
      
      <PortfolioItem imgSrc={UiDrwoy}>
          <div>
              <h3 className='text-2xl text-light font-[georgia]'>Music Website UI Design</h3>
              <div className='text-sm flex flex-col items-center gap-y-1'>
                  <h3 className='pt-2 flex flex-col items-center gap-y-2'>
                      <span>A Visual Design of a Music Artist's Website</span>
                  </h3>
                  <h4 className='pt-2 text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                      <span>Skillset: </span>
                      <span>Adobe XD</span>
                  </h4>
              </div>
              <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                  <Link 
                      to={'#'} 
                      className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                      onClick={() => goToUrl('https://xd.adobe.com/view/5604b42a-8b1a-4f6c-a8e0-fed7d5d2b497-0357/')}
                  >
                      View Live Design
                  </Link>
              </div>
          </div>
      </PortfolioItem>

      <PortfolioItem imgSrc={UiETL}>
          <div>
              <h3 className='text-2xl text-light font-[georgia]'>Transport & Logistics UI Design</h3>
              <div className='text-sm flex flex-col items-center gap-y-1'>
                  <h3 className='pt-2 flex flex-col items-center gap-y-2'>
                      <span>A Visual Design of a Transport & Logistics Website</span>
                  </h3>
                  <h4 className='pt-1 text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                      <span>Skillset: </span>
                      <span>Adobe XD</span>
                  </h4>
              </div>
              <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                  <Link 
                      to={'#'} 
                      className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                      onClick={() => goToUrl('https://xd.adobe.com/view/6f6a3d33-5293-4940-a14c-ef1bf2027b38-3a39/')}
                  >
                      View Live Design
                  </Link>
              </div>
          </div>
      </PortfolioItem>

      <PortfolioItem imgSrc={UiNelia}>
          <div>
              <h3 className='text-2xl text-light font-[georgia]'>Ecommerce UI Design</h3>
              <div className='text-sm flex flex-col items-center gap-y-1'>
                  <h3 className='pt-2 flex flex-col items-center gap-y-2'>
                      <span>A Visual Design of an Ecommerce Website</span>
                  </h3>
                  <h4 className='pt-1 text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                      <span>Skillset: </span>
                      <span>Adobe XD</span>
                  </h4>
              </div>
              <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                  <Link 
                      to={'#'} 
                      className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                      onClick={() => goToUrl('https://xd.adobe.com/view/7b6f2930-ba44-425c-ada1-d9033785f0e4-2e3c/')}
                  >
                      View Live Design
                  </Link>
              </div>
          </div>
      </PortfolioItem>

      <PortfolioItem imgSrc={UiPortfolio}>
          <div>
              <h3 className='text-2xl text-light font-[georgia]'>Portfolio UI Design</h3>
              <div className='text-sm flex flex-col items-center gap-y-1'>
                  <h3 className='pt-2 flex flex-col items-center gap-y-2'>
                      <span>A Visual Design of a Personal Portfolio Website</span>
                  </h3>
                  <h4 className='pt-1 text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                      <span>Skillset: </span>
                      <span>Adobe XD</span>
                  </h4>
              </div>
              <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                  <Link 
                      to={'#'} 
                      className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                      onClick={() => goToUrl('https://xd.adobe.com/view/8708e89a-5b70-408b-918a-80f9928fe000-d25b/?fullscreen')}
                  >
                      View Live Design
                  </Link>
              </div>
          </div>
      </PortfolioItem>
    </div>
  )
}

export default UiProjects