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
      <div className="px-2 sm:px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
         <time className="m-3">{format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}</time>
         <span className="m-3">10 views</span>
         <div className="m-3">{blog.readingTime.text}</div>
         <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
            #{blog.tags?.[0]}
         </Link>
      </div>
   );
};

export default BlogDetails;
