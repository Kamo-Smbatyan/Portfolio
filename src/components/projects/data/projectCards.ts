import { StaticImageData } from 'next/image';
import bonappetourProject from '@public/assets/project_pics/bonappetour_project.png';
import PortfolioProject from '@public/assets/project_pics/portfolio_project.png';
import ShipBob from '@public/assets/project_pics/shipbob.png';

import URentMe from '@public/assets/project_pics/urentme_project.png';

type ProjectCardInfo = {
   title: string;
   skills: string[];
   image: StaticImageData;
   description: string;
   link: string;
};

const shipbobCard: ProjectCardInfo = {
   title: 'ShipBob',
   skills: ['PHP','Laravel','React','MongoDB','MySql','PostgreSql'],
   image: ShipBob,
   description:
      'ShipBob is a global ecommerce fulfillment service offering warehousing, packing, shipping, tracking, and returns management.',
   link: 'https://www.shipbob.com/',
};
const bonappetourProjectCard: ProjectCardInfo = {
   title: 'Authentic Food Experiences',
   skills: ['Python', 'Machine Learning'],
   image: bonappetourProject,
   description:
      'Community marketplace that connects travelers with local home chefs for a unique home-dining experience, anywhere around the world.',
   link: 'https://www.bonappetour.com/',
};
const urentmeCard: ProjectCardInfo = {
   title: 'U rent Me',
   skills: ['Agile', 'Scrum', 'React','Node','axios'],
   image: URentMe,
   description:
      'The project is an online rental system that provides boat, off load vehicle rental services all over the United States.',
   link: 'https://urentme-56412.web.app/',
};
const portfolioCard: ProjectCardInfo = {
   title: 'My Portfolio',
   skills: ['React.js', 'Tailwind CSS', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
   image: PortfolioProject,
   description: 'My website that you are looking at right now!',
   link: 'https://github.com/xander-carruth/x-carruth-portfolio',
};

const projectCards: ProjectCardInfo[] = [shipbobCard, bonappetourProjectCard, urentmeCard, portfolioCard];

export default projectCards;
export { type ProjectCardInfo };
