'use client';
import Navbar from '../../components/Navbar';
import FeaturedPosts from '../../components/blog-home/FeaturedPosts';
import HomeCoverSection from '../../components/blog-home/HomeCoverSection';
import { allBlogs } from '@contentlayer/generated';
import RecentPosts from '../../components/blog-home/RecentPosts';
import { useLayoutEffect } from 'react';

const BlogHome = () => {
   useLayoutEffect(() => {
      window.scrollTo(0, 0);
   });

   return (
      <div>
         <div className="flex flex-col items-center justify-center mb-20">
            <div></div>
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
            <RecentPosts blogs={allBlogs} />
         </div>
      </div>
   );
};

export default BlogHome;
