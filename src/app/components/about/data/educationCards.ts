import NCStateLogo from '@public/assets/logos/ncstate_logo.png';
import NCSSMLogo from '@public/assets/logos/ncssm_logo.png';
import { StaticImageData } from 'next/image';

type EducationCardInfo = {
   image: StaticImageData;
   experienceName: string;
   type: string;
   dates: string;
   description: string;
};

const educationCards: EducationCardInfo[] = [
   {
      image: NCStateLogo,
      experienceName: 'North Carolina State University',
      type: "Master's Degree in Computer Science",
      dates: '1/2022 - 12/2022',
      description:
         'Throughout the duration of my graduate degree, I intensified my study of NLP and reinforcement learning as they apply to the education system. I aided in the the creation of an adaptive cyberbook through my work with an educational research lab at NC State and completed advanced coursework related to nerual networks. I also began developing my app Salonn in order to try to shape the education system with my own beliefs.',
   },
   {
      image: NCStateLogo,
      experienceName: 'North Carolina State University',
      type: "Bachelor's Degree in Computer and Electrical Engineering",
      dates: '8/2018 - 12/2021',
      description:
         'While in my undergrad, I had great opportunities to learn and further explore my interests. I conducted research into new VR hardware for educational opportunites, self-studied machine learning and deep learning through numerous third-party courses, and thrived in internships creating natural language processing solutions for a defense contractor.',
   },
   {
      image: NCSSMLogo,
      experienceName: 'North Carolina School of Science and Math',
      type: 'High School Diploma',
      dates: '8/2016 - 5/2018',
      description:
         'During my time here, I took active part in the community. I led the drone engineering club, represented the school as a student ambassador, and conducted research into drone modules for emergency rescue situtations at NCSU.',
   },
];

export default educationCards;
export { type EducationCardInfo };
