import React from 'react';
import Category from './Category';
import { slug } from 'github-slugger';

type CategoriesProps = {
   categories: string[];
   currentSlug: string;
};

const Categories: React.FC<CategoriesProps> = ({ categories, currentSlug }) => {
   return (
      <div className="px-0 md:px-10 sxl:px-20 mt-5 placeholder:text-dark py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
         {categories.map(cat => (
            <Category
               key={cat}
               link={`/categories/${cat}`}
               name={cat
                  .split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ')}
               active={currentSlug == slug(cat)}
            />
         ))}
      </div>
   );
};

export default Categories;
