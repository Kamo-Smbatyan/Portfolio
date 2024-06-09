import { cx } from '@src/utils';
import Link from 'next/link';
import React from 'react';

type TagProps = {
   link?: string;
   name: string;
   className?: string;
};

const Tag: React.FC<TagProps> = ({ link = '#', name, ...props }) => {
   return (
      <Link
         href={link}
         className={cx(
            'inline-block py-2 sm:py-3 px-1 bg-salo-violet text-white rounded-md capitalize font-semibold hover:scale-105 transition-all ease duration-200 text-sm sm:text-base',
            props.className ?? '',
         )}>
         {name}
      </Link>
   );
};

export default Tag;
