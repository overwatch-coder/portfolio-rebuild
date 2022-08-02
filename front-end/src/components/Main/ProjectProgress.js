import React from 'react';
import ProjectProgessItem from './ProjectProgessItem';

const ProjectProgress = () => {
  return (
    <section className='py-20 bg-progress bg-left md:bg-center bg-no-repeat bg-cover bg-fixed'>
        <div 
            className='px-2 md:px-5 container mx-auto flex flex-col items-center gap-y-5 md:gap-y-0 md:gap-x-5 md:flex-row md:justify-center'>

            <ProjectProgessItem 
                countNumber={10}
                suffix={'+'}
                description={'Total Projects'}
                duration={3}
            />

            <ProjectProgessItem 
                countNumber={3}
                suffix={'+'}
                description={'Ongoing Projects'}
                duration={2}
            />

            <ProjectProgessItem 
                countNumber={97}
                suffix={'%'}
                description={'Client Satisfaction'}
                duration={5}
            />
        </div>
    </section>
  )
}

export default ProjectProgress