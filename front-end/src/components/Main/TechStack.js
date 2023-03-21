import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiReact, SiNextdotjs, SiTypescript, SiBootstrap, SiGithub, SiExpress, SiNodedotjs } from "react-icons/si";

const TechStack = () => {
  return (
    <div className='overflow-x-hidden mt-16 container py-10 font-[poppins] flex flex-col gap-y-3 items-center' data-aos="slide-up">
        <h2 className="uppercase font-bold text-xl font-[georgia] py-5 text-cyan-600">
            Tech Stack
        </h2>
        <div className="flex items-center justify-center gap-8 flex-wrap animate-marquee">
          <span className="flex flex-col items-center gap-y-2">
            <SiJavascript size={35} className="text-yellow-500" />
            <small className="font-medium">JavaScript</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiHtml5 size={35} className="text-orange-600" />
            <small className="font-medium">HTML</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiCss3 size={35} className="text-blue-600" />
            <small className="font-medium">CSS</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiTailwindcss size={35} className="text-cyan-600" />
            <small className="font-medium">Tailwind CSS</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiMongodb size={35} className="text-green-600" />
            <small className="font-medium">MongoDB</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiReact size={35} className="text-cyan-500"/>
            <small className="font-medium">React JS</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiTypescript size={35} className="text-blue-700" />
            <small className="font-medium">TypeScript</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiNodedotjs size={35} className="text-green-600" />
            <small className="font-medium">Node JS</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiBootstrap size={35} className="text-purple-900" />
            <small className="font-medium">Bootstrap</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiGithub size={35} className="text-black" />
            <small className="font-medium">Github</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiExpress size={35} className="text-black" />
            <small className="font-medium">Express Js</small>
          </span>

          <span className="flex flex-col items-center gap-y-2">
            <SiNextdotjs size={35} className="text-black" />
            <small className="font-medium">Next Js</small>
          </span>
        </div>
    </div>
  )
}

export default TechStack