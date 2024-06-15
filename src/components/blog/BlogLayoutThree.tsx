import { Blog } from '@contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tag from '../elements/Tag';
import { format } from 'date-fns';

const BlogLayoutThree: React.FC<{ blog: Blog }> = ({ blog }) => {
   return (
      <div className="group flex flex-col items-center border border-salo-violet rounded-xl">
         <Link href={blog.url} className="h-full rounded-t-xl overflow-hidden">
            <Image
               src={blog.image?.filePath.replace('../public', '') ?? ''}
               placeholder="blur"
               blurDataURL={blog.image?.blurhashDataUrl}
               alt={blog.title}
               width={blog.image?.width}
               height={blog.image?.height}
               layout="responsive"
               className="aspect-[4/3] w-full h-full object-center group-hover:scale-105 transition-all ease duration-300"
            />
         </Link>
         <div className="flex flex-col w-full p-4">
            <span className="uppercase text-accent font-semibold text-xs sm:text-sm">{blog.tags?.[0]}</span>
            <Link href={blog.url} className="inline-block my-1">
               <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span className="text-light font-bold bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                     {blog.title}
                  </span>
               </h2>
            </Link>
            <span className="capitalize text-light/50 font-semibold text-sm sm:text-base">
               {format(new Date(blog.publishedAt), 'MMMM dd yyyy')}
            </span>
         </div>
      </div>
   );
};

export default BlogLayoutThree;
