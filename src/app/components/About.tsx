import { useRef } from 'react'
import Image from 'next/image';
import NCStateLogo from '../../../public/assets/carousel_logos/ncstate_logo.png';
import NCSSMLogo from '../../../public/assets/carousel_logos/ncssm_logo.png';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid';
import Slider from './Slider';
import '../Slider.css';

const About = () => {
  const educationCards = [
    {
      image:
        NCSSMLogo,
      schoolName: 'North Carolina School of Science and Math',
      type: 'High School Diploma',
      dates: '8/2016 - 5/2018',
      description: 'During my time here, I took active part in the community. I led the drone engineering club, represented the school as a student ambassador, and conducted research into drone modules for emergency rescue situtations at NCSU.',
    },
    {
      image:
        NCStateLogo,
      schoolName: 'North Carolina State University',
      type: 'Bachelor\'s Degree in Computer and Electrical Engineering',
      dates: '8/2018 - 12/2021',
      description: 'While in my undergrad, I had great opportunities to learn and further explore my interests. I conducted research into new VR hardware for educational opportunites, self-studied machine learning and deep learning through numerous third-party courses, and thrived in internships creating natural language processing solutions for a defense contractor.',
    },
    {
      image:
        NCStateLogo,
      schoolName: 'North Carolina State University',
      type: 'Master\'s Degree in Computer Science',
      dates: '1/2022 - 12/2022',
      description: 'Throughout the duration of my graduate degree, I intensified my study of NLP and reinforcement learning as they apply to the education system. I aided in the the creation of an adaptive cyberbook through my work with an educational research lab at NC State and completed advanced coursework related to nerual networks. I also began developing my app Salonn in order to try to shape the education system with my own beliefs.',
    },
  ]

  const sliderRef = useRef(null)

  const sliderSettings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    dots: true
  }

  return (
    <div className='content'>
      <div className='controls'>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
      <div className='w-full h-screen'>
      <Slider items={educationCards.map((card, index) => (
        <div key={index}>
          <Image className='relative h-40 w-auto items-center' src={card.image} alt={card.schoolName} />
          <p className='card-header'>{card.schoolName}</p>
          <p className='card-td'>{card.type}</p>
          <p className='card-td'>{card.dates}</p>
          <div className='w-1/2 text-center'>
            <p className='card-description'>{card.description}</p>
          </div>
        </div>
      ))} />
      </div>
    </div>
  )
}


export default About;