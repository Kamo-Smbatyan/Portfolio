import { WorkCardInfo } from './data/workCards';
import Image from 'next/image';

type WorkCardProps = {
   index: number;
   card: WorkCardInfo;
   selectedWorkCard: number | null;
   handleWorkClick: (index: number) => void;
};

const WorkCard: React.FC<WorkCardProps> = ({ index, card, selectedWorkCard, handleWorkClick }) => {
   return (
      <div
         key={index}
         className={`w-full md:w-11/12 mx-auto p-4 transition-all duration-200 ease-in-out border-2 rounded-lg cursor-pointer
                      ${selectedWorkCard === index ? 'border-salo-blue' : 'border-transparent'}
                      ${selectedWorkCard === index ? 'bg-transparent border-salo-blue' : 'bg-transparent border-transparent hover:bg-gray-100 hover:border-salo-blue'}`}
         onClick={() => handleWorkClick(index)}>
         <div className="flex items-start space-y-4">
            <div className="w-1/4 flex justify-center">
               <Image className="relative h-auto w-auto my-4" src={card.image} alt={card.experienceName} />
            </div>
            <div className="pl-8 text-left tracking-widest w-3/4">
               <p className="text-md md:text-lg font-bold">{card.experienceName}</p>
               <p className="text-sm md:text-base">{card.type}</p>
               <p className="text-sm md:text-base">{card.dates}</p>
            </div>
         </div>
         <div
            className={`w-full text-left pt-2 px-4 md:px-8 tracking-normal transition-all duration-500 ease-in-out overflow-hidden ${selectedWorkCard === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="text-sm md:text-base">{card.description}</p>
         </div>
      </div>
   );
};

export default WorkCard;
