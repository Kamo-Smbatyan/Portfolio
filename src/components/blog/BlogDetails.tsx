import { Blog } from '@contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { slug } from 'github-slugger';
import Link from 'next/link';
import React from 'react';

type BlogDetailsProps = {
   blog: Blog;
   slug: string;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog, slug: blogSlug }) => {
   // console.log(blog);
   return (
      <div className="px-2 sm:px-10 text-light/50 py-2 flex items-center justify-center text-center flex-wrap text-sm sm:text-md md:text-lg lg:text-xl font-medium mx-5 md:mx-10">
         <div className="m-1 md:m-3">{blog.author}</div>
         <div className="m-1 md:m-3">•</div>
         <time className="m-1 md:m-3">{format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}</time>
         <div className="m-1 md:m-3">•</div>
         <div className="m-1 md:m-3">{blog.readingTime.text}</div>
      </div>
   );
};

export default BlogDetails;
