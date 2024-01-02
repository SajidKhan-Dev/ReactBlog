import  { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySection from "./CategorSelection";
import Sidebar from "./Sidebar";

const BlogPage = () => {
  const [originalBlogs, setOriginalBlogs] = useState([]); // Store the original unfiltered blogs
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=obShsPunvdN4P7LBhukJ9SlYsZWH6pge");
        const data = await response.json();
        setOriginalBlogs(data.results); 
        setBlogs(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBlogs();
  }, []);
  

  const selectCategory = (category) => {
    setCurrentPage(1);
    setActiveCategory(category);
    const filteredBlogs = category === "All"
      ? originalBlogs // Use the original unfiltered blogs when "All" is selected
      : originalBlogs.filter((blog) => blog.section === category);
    setBlogs(filteredBlogs);
  };

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-10">
      {/* category section */}
      <div>
        <CategorySection
          selectCategory={selectCategory}
          activeCategory={activeCategory}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* blog cards */}
        <BlogCards blogs={currentBlogs} />

        {/* sidebar component section */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={originalBlogs.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default BlogPage;