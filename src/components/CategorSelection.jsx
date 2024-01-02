// CategorySection.jsx

import { useEffect, useState } from "react";

const CategorySection = ({ selectCategory, activeCategory }) => {
  const [categories, setCategories] = useState(["All"]); 

  useEffect(() => {
    // Fetch categories from your API
    async function fetchCategories() {
      try {
        const response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=obShsPunvdN4P7LBhukJ9SlYsZWH6pge");
        const data = await response.json();

        // Assuming your API returns an array of categories under the 'section' key
        const categoriesFromAPI = data.results.map(blog => blog.section);
        const uniqueCategories = [...new Set(categoriesFromAPI)];
        setCategories(["All", ...uniqueCategories]);

        console.log(data.results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="mt-4 border-b-2 py-5">
      {/* Add margin top for spacing */}
      <ul className="flex flex-wrap">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => selectCategory(category)}
            className={`cursor-pointer px-2 py-1 m-1 border ${
              category === activeCategory
                ? "border-orange-500 text-orange-500"
                : "border-gray-500 text-gray-500 hover:border-orange-500 hover:text-orange-500"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
