import { StaticImageData } from 'next/image';
import bonappetourProject from '@public/assets/project_pics/bonappetour_project.png';
import PortfolioProject from '@public/assets/project_pics/portfolio_project.png';
import ShipBob from '@public/assets/project_pics/shipbob.png';
import OmniX from '@public/assets/project_pics/omnix_project.png';
import URentMe from '@public/assets/project_pics/urentme_project.png';
import CasinoGame from '@public/assets/project_pics/CasinoGame.png';

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
   skills: [],
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

const OmniXCard: ProjectCardInfo = {
   title: 'Omni X',
   skills: ['Web3', 'React.js', 'Tailwind CSS', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
   image: OmniX,
   description: "One of the most rewarding ventures I've undertaken as a web developer was creating a cutting-edge cross-chain NFT marketplace." ,
   link: 'https://omni-x.io/',
};

const CasinoGameCard: ProjectCardInfo = {
   title: 'KaniCasino',
   skills: ['Web3', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'HTML', 'Rust'],
   image: CasinoGame,
   description: "Users can play games like coin flip, crash, slots games" ,
   link: 'https://github.com/Kamo-Smbatyan/casino-game',
};

const projectCards: ProjectCardInfo[] = [shipbobCard, bonappetourProjectCard, urentmeCard, portfolioCard, OmniXCard, CasinoGameCard];

export default projectCards;
export { type ProjectCardInfo };
