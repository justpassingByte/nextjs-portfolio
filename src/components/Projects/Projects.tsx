import { projects } from '@/data/portfolio'
import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <section id="projects" className='my-20  justify-center flex flex-col animate__animated animate__fadeIn animate__delay-2s'>
     <p className='text-[30px] font-semibold text-center dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] 
        dark:bg-clip-text dark:text-transparent'>PROJECTS</p>
        <div className='flex justify-center'>
            <div className='flex flex-wrap items-center content-center lg:grid-cols-2 p-20 gap-40'>
                  {projects.map((project,index)=>{  
                    return(
                        <div key={project.title + index} className='flex flex-col items-center w-[330px] md:w-[380px]
                        border rounded-2xl border-none shadow-2xl shadow-blue-900 cursor-pointer hover:-translate-y-20'>
                        <Image src={project.image} alt={project.title} height={220} width={350}
                            className='border rounded-xl bg-cover bg-center mt-4 border-none'/>
                            <p className='text-lg text-center p-4 font-bold'>{project.title}</p>
                            <p className='text-lg text-center p-4 dark:text-gray-400'>{project.description}</p>
                            <div className='flex flex-wrap p-8 gap-4'>
                             {project?.tech_stack?.map((Tech,index)=> {
                              return <Tech key={project.title +index}/>
                             })}
                             </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects
