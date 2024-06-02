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
            'inline-block py-3 px-10 bg-black text-white rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200',
            props.className ?? '',
         )}>
         {name}
      </Link>
   );
};

export default Tag;
