import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OliProject from '../../../public/assets/project_pics/oli_project.png';
import PortfolioProject from '../../../public/assets/project_pics/portfolio_project.png';
import SalonnIosProject from '../../../public/assets/project_pics/salonnios_project.png';
import SalonnVrProject from '../../../public/assets/project_pics/salonnvr_project.png';
import SocialProject from '../../../public/assets/project_pics/social_project.png';
import ProjectBubble from '../../../public/assets/project_pics/project_bubble.png';


function Projects() {
    const salonnMobileCard = {
        title: 'Salonn iOS',
        skills: [
            'Swift',
            'XCode',
            'PostgreSQL',
            'Express.js',
            'Node.js',
            'Firestore',
            'AWS',
            'Redis',
            'TypeScript'
        ],
        image: SalonnIosProject,
        description: 'Salonn iOS is an app which allows users to explore their interests in Art, Technology, and Philosophy.',
        link: 'https://www.salonn.info/'
    };
    const salonnVrCard = {
        title: 'Salonn VR',
        skills: [
            'Unity', 'Photon', 'AWS'
        ],
        image: SalonnVrProject,
        description: 'Salonn VR is a VR app which interfaces with Salonn iOS to allow users to experience physical presence with other users in a VR environment.',
        link: 'https://www.salonn.info/'
    };
    const oliCard = {
        title: 'Open Learning Initiative Student Development Analysis',
        skills: [
            'Python', 'Machine Learning'
        ],
        image: OliProject,
        description: 'In this project, I analyzed data from the OLI textbook to identify important trends for further development of our adaptive textbook.',
        link: 'https://github.com/xander-carruth/OLI-Data-Analysis'
    };
    const socialCard = {
        title: 'Facebook User-Connection Probability Detection Based On Social Circles',
        skills: [
            'Python', 'Machine Learning'
        ],
        image: SocialProject,
        description: 'In this project, I created a novel method of predicting connections between users in the Facebook social network by using the Dunbar model of a social network.',
        link: '/assets/downloads/CSC522_Final_Report.pdf'
    };
    const portfolioCard = {
        title: 'My Portfolio',
        skills: [
            'React.js',
            'Tailwind CSS',
            'Next.js',
            'TypeScript',
            'HTML',
            'CSS'
        ],
        image: PortfolioProject,
        description: 'My website that you are looking at right now!',
        link: '/'
    };

    const projectCards = [
        salonnMobileCard,
        salonnVrCard,
        oliCard,
        socialCard,
        portfolioCard,
    ]
    return (
        <div id='projects' className='w-full py-16 bg-black text-white'>
            <div className='text-center'>
                <h2 className='tracking-widest'>Projects</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-16 gap-y-8 pt-10 px-8 md:px-16 mx-auto'>
                {
                projectCards.map((card, index) => (
                    <div key={index}
                        className='p-4 rounded-lg items-center relative overflow-hidden'>
                        <div className="absolute inset-0 z-0"
                            style={
                                {
                                    backgroundImage: `url(/assets/project_pics/project_bubble.png)`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat'
                                }
                        }></div>
                        <div className="relative z-10 py-4 md:py-16 px-6 md:px-2 lg:px-28">
                            <p id='project-title' className='text-center mb-2'>
                                {
                                card.title
                            }</p>
                            <div className='flex flex-wrap justify-center'>
                                {
                                card.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}
                                        className='m-1 px-2 py-1 text-xxs md:text-sm bg-salonnblue rounded-lg'>
                                        {skill} </div>
                                ))
                            } </div>
                            <div className='py-2 md:py-4'>
                                <div className='h-40 md:h-60 relative'>
                                    <Image src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-contain absolute"
                                    /> 
                                </div>
                            </div>

                            {/* <Image className='mx-auto my-4' src={card.image} alt={card.title} height={300} layout='responsive'/> */}
                            <p className='text-xs md:text-base'>
                                {card.description}
                                &nbsp;<a href={card.link} target="_blank" rel="noopener noreferrer" className='underline text-salonnblue'>Learn more...</a>
                            </p>
                        </div>
                    </div>
                ))
            } </div>
        </div>
    )
    }
    
    
    
    
    
    




export default Projects
