import SalonnLogo from '@public/assets/logos/salonn_logo.png';
import BiomojoLogo from '@public/assets/logos/biomojo_logo.png';
import CeiLogo from '@public/assets/logos/cei_logo.png';
import MxrLogo from '@public/assets/logos/mxr_logo.png';
import { StaticImageData } from 'next/image';

type WorkCardInfo = {
   image: StaticImageData;
   experienceName: string;
   type: string;
   dates: string;
   description: string;
};

const workCards: WorkCardInfo[] = [
   {
      image: SalonnLogo,
      experienceName: 'Salonn',
      type: 'Founder',
      dates: '1/2023 - current',
      description:
         'I am developing a mixed iOS and VR app which will provide a social education hub for art, philosophy, and technology. My aim with this app is to create more fulfilling and interactive social experiences.',
   },
   {
      image: BiomojoLogo,
      experienceName: 'BioMojo LLC',
      type: 'Lead Software Engineering Intern',
      dates: '5/2021 - 8/2021',
      description:
         'My second time at BioMojo, during which I used Natural Language Processing to create an intent classifier for biomedical conversation using state-of-the-art models and techniques. I also was in charge of mentoring another intern assigned to this project.',
   },
   {
      image: CeiLogo,
      experienceName: 'NCSU Innovative Educational Computing Laboratory',
      type: 'Cyberbook Research Assistant',
      dates: '1/2022 - 5/2022',
      description:
         'While researching at this subgroup of the Center for Educational Informatics, I created the data collection mechanisms deployed to universities across the US for the creation of a new adaptive learning textbook. I also developed an intuitive method of extracting and displaying the data collected in previous experiments.',
   },
   {
      image: BiomojoLogo,
      experienceName: 'BioMojo LLC',
      type: 'Software Engineering Intern',
      dates: '5/2021 - 8/2021',
      description:
         'Through this internship, I conducted a study for the Department of Defense into the feasibility of using remote assist software with the Microsoft Hololens 2 to carry out remote surgical operations. I also implemented lemmatization, sentiment analysis, and intent recognition models on biomedical dialogue.',
   },
   {
      image: MxrLogo,
      experienceName: 'NCSU Mixed Reality Lab',
      type: 'VR Hardware Research Assistant',
      dates: '1/2019 - 5/2020',
      description:
         "While researching at this lab under the NCSU design college, I practiced the design methodology of fast iteration on VR-related projects. I namely worked on the VR Hoverboard project to help create field trips in VR and the Pop'n'Play project to provide fun experiences in VR for kids.",
   },
];

export default workCards;

export { type WorkCardInfo };
