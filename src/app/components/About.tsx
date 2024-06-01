import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import TitleUnderline from './about/TitleUnderline';
import educationCards from './about/data/educationCards';
import workCards from './about/data/workCards';
import EducationCard from './about/EducationCard';
import WorkCard from './about/WorkCard';

const About = () => {
   const [selectedEdCard, setSelectedEdCard] = useState<number | null>(null);
   const [selectedWorkCard, setSelectedWorkCard] = useState<number | null>(null);

   const handleEdClick = (cardKey: number) => {
      setSelectedEdCard(selectedEdCard === cardKey ? null : cardKey);
   };
   const handleWorkClick = (index: number) => {
      setSelectedWorkCard(selectedWorkCard === index ? null : index);
   };

   return (
      <div id="about" className="w-full p-2 flex py-16">
         <div className="w-full text-center gap-8">
            <h2 className="py-4 tracking-widest">About Me</h2>
            <div className="grid md:grid-cols-2 gap-4 pt-8">
               <div className="p-6">
                  <div className="inline-block pb-4">
                     <h3 className="relative pb-1">Education</h3>
                     <TitleUnderline />
                  </div>
                  {educationCards.map((card, index) => (
                     <EducationCard
                        key={index}
                        index={index}
                        card={card}
                        selectedEdCard={selectedEdCard}
                        handleEdClick={handleEdClick}
                     />
                  ))}
               </div>
               <div className="p-6">
                  <div className="inline-block pb-4">
                     <h3 className="relative pb-1">Work Experience</h3>
                     <TitleUnderline />
                  </div>
                  {workCards.map((card, index) => (
                     <WorkCard
                        key={index}
                        index={index}
                        card={card}
                        selectedWorkCard={selectedWorkCard}
                        handleWorkClick={handleWorkClick}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
