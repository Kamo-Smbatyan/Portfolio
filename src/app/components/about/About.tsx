import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import TitleUnderline from './TitleUnderline';
import educationCards from './data/educationCards';
import workCards from './data/workCards';
import EducationCard from './EducationCard';
import WorkCard from './WorkCard';

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
         <div className="w-full text-center">
            <h2 className="py-4 tracking-widest">About Me</h2>
            <div className="grid md:grid-cols-2 pt-8">
               <div className="p-2 pb-4">
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
               <div className="p-2">
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
