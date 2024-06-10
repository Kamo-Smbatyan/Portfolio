import { allBlogs } from '@contentlayer/generated';
import BlogLayoutThree from '@src/components/blog/BlogLayoutThree';
import Categories from '@src/components/blog/Categories';
import GithubSlugger, { slug } from 'github-slugger';
import React from 'react';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
   const categories: string[] = [];
   const paths = [{ slug: 'all' }];

   allBlogs.map(blog => {
      if (blog.isPublished) {
         blog.tags.map(tag => {
            const slugified = slugger.slug(tag);
            if (!categories.includes(slugified)) {
               categories.push(slugified);
               paths.push({ slug: slugified });
            }
         });
      }
   });

   return paths;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
   return {
      title: `${params.slug
         .split('-')
         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
         .join(' ')} Blogs`,
      description: `Learn more about ${params.slug == 'all' ? 'education' : params.slug.replaceAll('-', ' ')} through my blogs!`,
   };
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
   const allCategories = ['all'];
   const blogs = allBlogs.filter(blog => {
      return blog.tags.some(tag => {
         const slugified = slug(tag);
         if (!allCategories.includes(slugified)) {
            allCategories.push(slugified);
         }
         if (params.slug === 'all') {
            return true;
         }
         return slugified === params.slug;
      });
   });

   const blogTopic = `${params.slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')} Blogs`;

   return (
      <article className="mt-12 flex flex-col text-light">
         <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
            <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">{blogTopic}</h1>
         </div>
         <Categories categories={allCategories} currentSlug={params.slug} />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 sm:gap-16 mt-8 sm:mt-14 md:mt-20 px-5 sm:px-10 md:px-24 sxl:px-32 mb-20">
            {blogs.map((blog, index) => (
               <article key={index} className="col-span-1 row-span-1 relative">
                  <BlogLayoutThree blog={blog} />
               </article>
            ))}
         </div>
      </article>
   );
};

export default CategoryPage;
