import React from 'react';
import { Link } from 'react-router-dom';
import overwatchPortfolio from "../../assets/overwatch-portfolio.png";
import qlikStudio from "../../assets/qlikstudio.png";
import qrcode from "../../assets/qrcode.png";
import weatherApp from "../../assets/weather-app.png";
import drwoy from "../../assets/drwoy.png";
import PortfolioItem from './PortfolioItem';
import mernBlog from "../../assets/mern-project.png";

const WebProjects = ({goToUrl}) => {
  return (
    <div className='relative mt-10 px-2 gap-y-7 md:gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    >
        <PortfolioItem imgSrc={overwatchPortfolio}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>Portfolio Website</h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-2'>
                        <span>This project is the current Website you are on.</span>
                        <span>
                            This Project was made to showcase the projects I've worked on.
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>React Js,</span>
                        <span>Tailwind CSS,</span>
                        <span>Node JS,</span>
                        <span>Express JS</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://overwatch-coder-portfolio.herokuapp.com/')}
                    >
                        View Live Project
                    </Link>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl("https://github.com/overwatch-coder/portfolio-rebuild")}
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
        </PortfolioItem>

        <PortfolioItem imgSrc={qlikStudio}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>Qlik Studios Website - Client</h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-1'>
                        <span>
                            You can view the some of the client's recent works on photography as well as services available
                        </span>
                        <span>
                            Appointment Booking of Services can also be achieved easily
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>HTML,</span>
                        <span>CSS,</span>
                        <span>JavaScript,</span>
                        <span>Bootstrap</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://qlikstudios.vercel.app/')}
                    >
                        View Live Project
                    </Link>
                </div>
            </div>
        </PortfolioItem>

        <PortfolioItem imgSrc={weatherApp}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>Weather App</h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-2'>
                        <span>A Simple Weather App In React JS</span>
                        <span>
                            You can search for the details of any city at all in the world easily
                            as well as save viewed cities to local storage
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>React Js,</span>
                        <span>Tailwind CSS</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://overwatch-coder.github.io/weather-app/')}
                    >
                        View Live Project
                    </Link>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl("https://github.com/overwatch-coder/weather-app")}
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
        </PortfolioItem>

        <PortfolioItem imgSrc={qrcode}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>QR Code Generator</h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-2'>
                        <span>A Simple QR Code Generator made in React JS</span>
                        <span>
                            You can encode any url, simple text or contact details in the form of url as well as download it and share
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>React Js,</span>
                        <span>Tailwind CSS</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://overwatch-coder.github.io/qrcode-generator/')}
                    >
                        View Live Project
                    </Link>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl("https://github.com/overwatch-coder/qrcode-generator")}
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
        </PortfolioItem>

        <PortfolioItem imgSrc={mernBlog}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>
                    Full Stack MERN Blog Application
                </h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-2'>
                        <span>
                            The frontend was created with React Js with Context API and Tailwind CSS.
                            <br />
                            Authentication was done with JWT.
                        </span>
                        <span>
                            Backend is made with NodeJs and Express and storage with MongoDB
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>Tailwind CSS, </span>
                        <span>React Js</span>
                        <span>MongoDB</span>
                        <span>Express JS</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://mern-project-overwatch-coder.vercel.app/')}
                    >
                        View Live Project
                    </Link>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl("https://github.com/overwatch-coder/mern_project")}
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
        </PortfolioItem>

        <PortfolioItem imgSrc={drwoy}>
            <div>
                <h3 className='text-2xl text-light font-[georgia]'>Artist Music Website</h3>
                <div className='text-sm flex flex-col items-center gap-y-1'>
                    <h3 className='flex flex-col items-center gap-y-2'>
                        <span>A Music Portfolio for an artist which shows the recent songs</span>
                        <span>
                            Also, users can find merch, subscribe to newsletters as well as find social media details.
                        </span>
                    </h3>
                    <h4 className='text-center flex items-center gap-x-1 italic text-yellow-500 flex-wrap'>
                        <span>Skillset: </span>
                        <span>Tailwind CSS,</span>
                        <span>HTML & CSS,</span>
                        <span>JavaScript</span>
                    </h4>
                </div>
                <div className='pt-3 flex items-center justify-center gap-x-3 uppercase'>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl('https://overwatch-coder.github.io/drwoy-website/')}
                    >
                        View Live Project
                    </Link>
                    <Link 
                        to={'#'} 
                        className='text-sm transition px-2 py-2 text-dark bg-light hover:bg-dark hover:text-light'
                        onClick={() => goToUrl("https://github.com/overwatch-coder/drwoy-website")}
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
        </PortfolioItem>
    </div>
  )
}

export default WebProjects