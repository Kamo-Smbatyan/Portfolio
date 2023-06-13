import React, { useState } from 'react'
import Image from 'next/image';
import NCStateLogo from '../../../public/assets/logos/ncstate_logo.png';
import NCSSMLogo from '../../../public/assets/logos/ncssm_logo.png';
import SalonnLogo from '../../../public/assets/logos/salonn_logo.png';
import BiomojoLogo from '../../../public/assets/logos/biomojo_logo.png';
import CeiLogo from '../../../public/assets/logos/cei_logo.png';
import MxrLogo from '../../../public/assets/logos/mxr_logo.png';

const About = () => {
  const educationCards = [
    {
      image:
        NCStateLogo,
      experienceName: 'North Carolina State University',
      type: 'Master\'s Degree in Computer Science',
      dates: '1/2022 - 12/2022',
      description: 'Throughout the duration of my graduate degree, I intensified my study of NLP and reinforcement learning as they apply to the education system. I aided in the the creation of an adaptive cyberbook through my work with an educational research lab at NC State and completed advanced coursework related to nerual networks. I also began developing my app Salonn in order to try to shape the education system with my own beliefs.',
    },
    {
      image:
        NCStateLogo,
      experienceName: 'North Carolina State University',
      type: 'Bachelor\'s Degree in Computer and Electrical Engineering',
      dates: '8/2018 - 12/2021',
      description: 'While in my undergrad, I had great opportunities to learn and further explore my interests. I conducted research into new VR hardware for educational opportunites, self-studied machine learning and deep learning through numerous third-party courses, and thrived in internships creating natural language processing solutions for a defense contractor.',
    },
    {
      image:
        NCSSMLogo,
      experienceName: 'North Carolina School of Science and Math',
      type: 'High School Diploma',
      dates: '8/2016 - 5/2018',
      description: 'During my time here, I took active part in the community. I led the drone engineering club, represented the school as a student ambassador, and conducted research into drone modules for emergency rescue situtations at NCSU.',
    },
  ]

  const workCards = [
    {
      image:
        SalonnLogo,
      experienceName: 'Salonn',
      type: 'Founder',
      dates: '1/2023 - current',
      description: 'I am developing a mixed iOS and VR app which will provide a social education hub for art, philosophy, and technology. My aim with this app is to create more fulfilling and interactive social experiences.',
    },
    {
      image:
        BiomojoLogo,
      experienceName: 'BioMojo LLC',
      type: 'Lead Software Engineering Intern',
      dates: '5/2021 - 8/2021',
      description: 'My second time at BioMojo, during which I used Natural Language Processing to create an intent classifier for biomedical conversation using state-of-the-art models and techniques. I also was in charge of mentoring another intern assigned to this project.',
    },
    {
      image:
        CeiLogo,
      experienceName: 'NCSU Innovative Educational Computing Laboratory',
      type: 'Cyberbook Research Assistant',
      dates: '1/2022 - 5/2022',
      description: 'While researching at this subgroup of the Center for Educational Informatics, I created the data collection mechanisms deployed to universities across the US for the creation of a new adaptive learning textbook. I also developed an intuitive method of extracting and displaying the data collected in previous experiments.',
    },
    {
      image:
        BiomojoLogo,
      experienceName: 'BioMojo LLC',
      type: 'Software Engineering Intern',
      dates: '5/2021 - 8/2021',
      description: 'Through this internship, I conducted a study for the Department of Defense into the feasibility of using remote assist software with the Microsoft Hololens 2 to carry out remote surgical operations. I also implemented lemmatization, sentiment analysis, and intent recognition models on biomedical dialogue.',
    },
    {
      image:
        MxrLogo,
      experienceName: 'NCSU Mixed Reality Lab',
      type: 'VR Hardware Research Assistant',
      dates: '1/2019 - 5/2020',
      description: 'While researching at this lab under the NCSU design college, I practiced the design methodology of fast iteration on VR-related projects. I namely worked on the VR Hoverboard project to help create field trips in VR and the Pop\'n\'Play project to provide fun experiences in VR for kids.',
    },
  ]

  const [selectedEdCard, setSelectedEdCard] = useState<number | null>(null);

  const handleEdClick = (index: number) => {
    setSelectedEdCard(selectedEdCard === index ? null : index);
  };

  const [selectedWorkCard, setSelectedWorkCard] = useState<number | null>(null);

  const handleWorkClick = (index: number) => {
    setSelectedWorkCard(selectedWorkCard === index ? null : index);
  };

  return (
    <div id='about' className='w-full p-2 flex py-16'>
        <div className='w-full text-center gap-8'>
              <h2 className='py-4 tracking-widest'>About Me</h2>
              <div className='grid md:grid-cols-2 gap-4 pt-8'>
                <div className='p-6'>
                  <div className='inline-block pb-4'>
                    <h3 className='relative pb-1'>Education</h3>
                    <svg viewBox="0 0 120 4" preserveAspectRatio="none" fill="#163898" className='relative bottom-1 w-full'>
                      <path d="M0 2 Q 30 4 60 2 T 120 2" />
                    </svg>
                  </div>
                  {educationCards.map((card, index) => (
                    <div 
                    key={index}
                    className={`w-full md:w-4/5 mx-auto p-4 transition-all duration-200 ease-in-out border-2 rounded-lg cursor-pointer
                      ${selectedEdCard === index ? 'border-salonnblue' : 'border-transparent'}
                      ${selectedEdCard === index ? 'bg-transparent border-salonnblue' : 'bg-transparent border-transparent hover:bg-gray-100 hover:border-salonnblue'}`}
                    onClick={() => handleEdClick(index)}>
                      <div className='flex items-start space-y-4'>
                        <div className='w-1/4 flex justify-center'>
                          <Image className='relative h-auto w-auto my-4' src={card.image} alt={card.experienceName} width={50} />
                        </div>
                        <div className='pl-8 text-left tracking-widest w-3/4'>
                          <p className='text-sm md:text-lg font-bold'>{card.experienceName}</p>
                          <p className='text-xs md:text-base'>{card.type}</p>
                          <p className='text-xs md:text-base'>{card.dates}</p>
                        </div>
                      </div>
                      <div className={`w-full text-left pt-2 px-8 tracking-normal transition-all duration-500 ease-in-out overflow-hidden ${selectedEdCard === index ? 'max-h-screen' : 'max-h-0'}`}>
                        <p className='text-xs md:text-base'>{card.description}</p>
                      </div>
                    </div>
                  ))}

                </div>
                <div className='p-6'>
                <div className='inline-block pb-4'>
                    <h3 className='relative pb-1'>Work Experience</h3>
                    <svg viewBox="0 0 120 4" preserveAspectRatio="none" fill="#163898" className='relative bottom-1 w-full'>
                      <path d="M0 2 Q 30 4 60 2 T 120 2" />
                    </svg>
                  </div>
                  {workCards.map((card, index) => (
                    <div 
                    key={index}
                    className={`w-full md:w-4/5 mx-auto p-4 transition-all duration-200 ease-in-out border-2 rounded-lg cursor-pointer
                      ${selectedWorkCard === index ? 'border-salonnblue' : 'border-transparent'}
                      ${selectedWorkCard === index ? 'bg-transparent border-salonnblue' : 'bg-transparent border-transparent hover:bg-gray-100 hover:border-salonnblue'}`}
                    onClick={() => handleWorkClick(index)}>
                      <div className='flex items-start space-y-4'>
                        <div className='w-1/4 flex justify-center'>
                          <Image className='relative h-auto w-auto my-4' src={card.image} alt={card.experienceName} />
                        </div>
                        <div className='pl-8 text-left tracking-widest w-3/4'>
                          <p className='text-sm md:text-lg font-bold'>{card.experienceName}</p>
                          <p className='text-xs md:text-base'>{card.type}</p>
                          <p className='text-xs md:text-base'>{card.dates}</p>
                        </div>
                      </div>
                      <div className={`w-full text-left pt-2 px-8 tracking-normal transition-all duration-500 ease-in-out overflow-hidden ${selectedWorkCard === index ? 'max-h-screen' : 'max-h-0'}`}>
                        <p className='text-xs md:text-base'>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;