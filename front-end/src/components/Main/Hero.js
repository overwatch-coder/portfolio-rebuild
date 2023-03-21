import OverwatchPhoto from "../../assets/brainy_cute.jpeg";
import Typical from "react-typical";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    const textToAnimate = [' ', 500, 'Overwatch Coder', 1000, ' ', 500, ' ', 500, 'A Web Developer', 1000, ' ', 500, ' ', 500, 'An Embedded Systems Engineer', 1000];

  return (
    <div id="home"
        className='overflow-x-hidden container mx-auto flex flex-col gap-y-3 items-center md:flex-row md:gap-y-0 md:gap-x-5 md:justify-around md:items-center font-[poppins] bg-hero bg-no-repeat bg-cover bg-right md:bg-center bg-fixed py-10'>

        {/* Description Section */}
        <div data-aos="fade-up-right" className='flex flex-col items-start gap-y-3 md:gap-y-4'>
            <h2 className='text-sm md:text-base animate-bounce text-cyan-600'>Hey There !</h2>
            <h4 className='flex items-center gap-x-2 uppercase text-2xl md:text-4xl font-[600]'>
                <p>I am</p>
                <p className='text-cyan-600'>
                    <Typical
                        steps={textToAnimate}
                        loop={Infinity}
                        wrapper="span"
                    />
                </p> 
            </h4>
            <p className='text-gray-700 font-light md:text-lg'>React Developer | MERN Stack</p>
            <p className='flex items-center gap-x-4'>
                <AnchorLink href='#portfolio' className='text-sm md:text-lg transition uppercase border-2 border-cyan-700 rounded-full py-2 px-4 cursor-pointer hover:border-none hover:bg-cyan-600 hover:text-light'>See my Work</AnchorLink>
                <AnchorLink href='#contact' className='text-sm md:text-lg transition uppercase border-2 border-cyan-700 rounded-full py-2 px-4 cursor-pointer hover:border-none hover:bg-cyan-600 hover:text-light'>Hire Me</AnchorLink>
            </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-up-left" className='pt-8 md:pt-0 max-w-[230px] md:max-w-[400px]'>
            <img 
                src={OverwatchPhoto} 
                alt="Overwatch Coder" 
                className='rounded-full object-contain w-full'
            />
        </div>
    </div>
  )
}

export default Hero