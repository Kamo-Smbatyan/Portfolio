import Image from 'next/image';
import { ProjectCardInfo } from './data/projectCards';

type ProjectCardProps = {
   index: number;
   card: ProjectCardInfo;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, card }) => {
   return (
      <div className="p-4 rounded-lg items-center relative overflow-hidden">
         <div
            className="absolute inset-0 z-0"
            style={{
               backgroundImage: `url(/assets/project_pics/project_bubble.png)`,
               backgroundSize: '100% 100%',
               backgroundRepeat: 'no-repeat',
            }}></div>
         <div className="relative z-10 py-4 lg:pt-5 lg:pb-8 px-6 sm:px-14 md:px-16 lg:px-20">
            <p id="project-title" className="text-center mb-2">
               {card.title}
            </p>
            <div className="flex flex-wrap justify-center">
               {card.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="m-1 px-2 py-1 text-xxs md:text-sm bg-salonnblue rounded-lg">
                     {skill}{' '}
                  </div>
               ))}{' '}
            </div>
            <div className="py-2 md:py-4">
               <div className="h-40 lg:h-60 relative">
                  <Image src={card.image} alt={card.title} fill className="object-contain absolute" />
               </div>
            </div>

            <p className="text-xs md:text-base">
               {card.description}
               &nbsp;
               <a href={card.link} target="_blank" rel="noopener noreferrer" className="underline text-salonnblue">
                  Learn more...
               </a>
            </p>
         </div>
      </div>
   );
};

export default ProjectCard;
