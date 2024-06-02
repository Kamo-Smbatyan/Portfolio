import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import projectCards from './data/projectCards';

function Projects() {
   return (
      <div id="projects" className="w-full py-16 bg-black text-white">
         <div className="text-center">
            <h2 className="tracking-widest">Projects</h2>
         </div>
         <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 pt-10 px-4 sm:px-16 md:px-32 lg:px-0 xl:px-16  mx-auto">
            {projectCards.map((card, index) => (
               <ProjectCard key={index} index={index} card={card} />
            ))}{' '}
         </div>
      </div>
   );
}

export default Projects;
