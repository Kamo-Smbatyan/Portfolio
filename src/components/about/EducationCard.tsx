import { EducationCardInfo } from './data/educationCards';
import Image from 'next/image';

type EducationCardProps = {
   index: number;
   card: EducationCardInfo;
   selectedEdCard: number | null;
   handleEdClick: (index: number) => void;
};

const EducationCard: React.FC<EducationCardProps> = ({ index, card, selectedEdCard, handleEdClick }) => {
   return (
      <div
         className={`w-full md:w-11/12 mx-auto p-4 transition-all duration-200 ease-in-out border-2 rounded-lg cursor-pointer
                       ${selectedEdCard === index ? 'border-salo-blue' : 'border-transparent'}
                       ${selectedEdCard === index ? 'bg-transparent border-salo-blue' : 'bg-transparent border-transparent hover:bg-gray-100 hover:border-salo-blue'}`}
         onClick={() => handleEdClick(index)}>
         <div className="flex items-start space-y-4">
            <div className="w-1/4 flex justify-center">
               <Image className="relative h-auto w-auto my-4" src={card.image} alt={card.experienceName} width={50} />
            </div>
            <div className="pl-8 text-left tracking-widest w-3/4">
               <p className="text-md md:text-lg font-bold">{card.experienceName}</p>
               <p className="text-sm md:text-base">{card.type}</p>
               <p className="text-sm md:text-base">{card.dates}</p>
            </div>
         </div>
         <div
            className={`w-full text-left text-sm md:text-md pt-2 px-4 md:px-8 tracking-normal transition-all duration-500 ease-in-out overflow-hidden ${selectedEdCard === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="text-xs md:text-base">{card.description}</p>
         </div>
      </div>
   );
};
export default EducationCard;
