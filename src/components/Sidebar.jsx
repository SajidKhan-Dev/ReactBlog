import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [popularBlogs , setpopularBlogs ] = useState([]);
    
    useEffect(() => {
      // Fetch Blogs from your API
      async function fetchBlogs() {
        try {
          const response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=obShsPunvdN4P7LBhukJ9SlYsZWH6pge").then(response => response.json().then(data => setpopularBlogs(data.results)));
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      }
      fetchBlogs();
    }, []);
    

  return (
    <div>
      {/* latest blogs */}
      <div className="sidebar-container">
        <h3 className="text-3xl font-semibold px-4  uppercase">Latest Blogs</h3>
        <div>{
        popularBlogs.slice(0, 3).map(blog => <div key={blog.asset_id} className="my-5 border-b-2 border-spacing-2 px-4">
          <h4 className="font-medium mb-2">{blog.title}</h4>
          <Link to="/" className=" text-base pb-2 text-black  inline-flex items-center py-1 hover:text-orange-500">Read More
            <FaArrowRight className="mt-1 ml-2 " /> </Link>
        </div>)
        }</div>
      </div>

      {/* popular blogs  */}
      <div className="">
        <h3 className="mt-20 text-3xl font-semibold px-4 uppercase">Popular Blogs</h3>
        <div>{
        popularBlogs.slice(11, 16).map(blog => <div key={blog.asset_id} className="my-5 border-b-2 border-spacing-2 px-4">
          <h4 className="font-medium mb-2">{blog.title}</h4>
          <Link to="/" className=" text-base pb-2 text-black  inline-flex items-center py-1 hover:text-orange-500">Read More
            <FaArrowRight className="mt-1 ml-2 " /> </Link>
        </div>)
        }</div>
      </div>
    </div>
  )
}

export default Sidebar
