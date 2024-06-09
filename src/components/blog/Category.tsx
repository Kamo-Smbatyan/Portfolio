import { cx } from '@src/utils';
import Link from 'next/link';
import React from 'react';

type CategoryProps = {
   link?: string;
   name: string;
   active: boolean;
   className?: string;
};

const Category: React.FC<CategoryProps> = ({ link = '#', name, active, ...props }) => {
   return (
      <Link
         href={link}
         className={cx(
            'inline-block py-1.5 md:py-2 px-2 md:px-5 rounded-md border transition-all font-bold ease duration-200 m-2',
            props.className ?? '',
            active
               ? 'bg-dark-salo-violet border-dark-salo-violet text-light'
               : 'bg-salo-violet border-salo-violet hover:bg-light-gray text-dark hover:text-light',
         )}>
         {name}
      </Link>
   );
};

export default Category;
