import { StaticImageData } from 'next/image';
import OliProject from '@public/assets/project_pics/oli_project.png';
import PortfolioProject from '@public/assets/project_pics/portfolio_project.png';
import SalonnIosProject from '@public/assets/project_pics/salonnios_project.png';
import SalonnVrProject from '@public/assets/project_pics/salonnvr_project.png';
import SocialProject from '@public/assets/project_pics/social_project.png';

type ProjectCardInfo = {
   title: string;
   skills: string[];
   image: StaticImageData;
   description: string;
   link: string;
};

const salonnMobileCard: ProjectCardInfo = {
   title: 'Salonn iOS',
   skills: ['Swift', 'XCode', 'PostgreSQL', 'Express.js', 'Node.js', 'Firestore', 'AWS', 'Redis', 'TypeScript'],
   image: SalonnIosProject,
   description:
      'Salonn iOS is an app which allows users to explore their interests in Art, Technology, and Philosophy.',
   link: 'https://www.salonn.info/',
};
const salonnVrCard: ProjectCardInfo = {
   title: 'Salonn VR',
   skills: ['Unity', 'Photon', 'AWS'],
   image: SalonnVrProject,
   description:
      'Salonn VR is a VR app which interfaces with Salonn iOS to allow users to experience physical presence with other users in a VR environment.',
   link: 'https://www.salonn.info/',
};
const oliCard: ProjectCardInfo = {
   title: 'Open Learning Initiative Student Development Analysis',
   skills: ['Python', 'Machine Learning'],
   image: OliProject,
   description:
      'In this project, I analyzed data from the OLI textbook to identify important trends for further development of our adaptive textbook.',
   link: 'https://github.com/xander-carruth/OLI-Data-Analysis',
};
const socialCard: ProjectCardInfo = {
   title: 'Facebook User-Connection Probability Detection Based On Social Circles',
   skills: ['Python', 'Machine Learning'],
   image: SocialProject,
   description:
      'In this project, I created a novel method of predicting connections between users in the Facebook social network by using the Dunbar model of a social network.',
   link: '/assets/downloads/CSC522_Final_Report.pdf',
};
const portfolioCard: ProjectCardInfo = {
   title: 'My Portfolio',
   skills: ['React.js', 'Tailwind CSS', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
   image: PortfolioProject,
   description: 'My website that you are looking at right now!',
   link: 'https://github.com/xander-carruth/x-carruth-portfolio',
};

const projectCards: ProjectCardInfo[] = [salonnMobileCard, salonnVrCard, oliCard, socialCard, portfolioCard];

export default projectCards;
export { type ProjectCardInfo };
