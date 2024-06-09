import { Blog } from '@contentlayer/generated';
import { sortBlogs } from '@src/utils';
import React from 'react';
import BlogLayoutOne from '../blog/BlogLayoutOne';
import BlogLayoutTwo from '../blog/BlogLayoutTwo';

type FeaturedPostsProps = {
   blogs: Blog[];
};

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ blogs }) => {
   const sortedBlogs = sortBlogs(blogs);

   return (
      <section className="w-full mt-12 sm:mt-18 md:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
         <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-light">Featured Posts</h2>

         <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-6 sm:mt-8">
            <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
               <BlogLayoutOne blog={sortedBlogs[1]} />
            </article>
            <article className="col-span-2 sm:col-span-1 row-span-1 relative">
               <BlogLayoutTwo blog={sortedBlogs[2]} />
            </article>
            <article className="col-span-2 sm:col-span-1 row-span-1 relative">
               <BlogLayoutTwo blog={sortedBlogs[3]} />
            </article>
         </div>
      </section>
   );
};

export default FeaturedPosts;
