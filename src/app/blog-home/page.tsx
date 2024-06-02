'use client';
import Navbar from '../../components/Navbar';
import FeaturedPosts from '../../components/blog-home/FeaturedPosts';
import HomeCoverSection from '../../components/blog-home/HomeCoverSection';
import { allBlogs } from '@contentlayer/generated';
import RecentPosts from '../../components/blog-home/RecentPosts';

const BlogHome = () => {
   return (
      <div>
         <Navbar />
         <div className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
            <RecentPosts blogs={allBlogs} />
         </div>
      </div>
   );
};

export default BlogHome;
