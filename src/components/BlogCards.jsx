/* eslint-disable react/prop-types */
// BlogCards.js

import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const BlogCards = ({ blogs }) => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  blog-cards-container">
      {blogs.map((blog) => (
        <Link
          to={blog.url}
          key={blog.asset_id}
          className="p-5 shadow-lg rounded cursor-pointer transition-transform transform hover:scale-105 blog-card"
    >
          <h3 className="mt-4 mb-2 font-bold text-lg hover:text-orange-500">
            {blog.title}
          </h3>
          <div>
            {blog.media && blog.media[0] && blog.media[0]["media-metadata"] && (
              <img
                src={blog.media[0]["media-metadata"][0].url}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
          </div>
          <p className="mb-2 text-gray-600">
            <IoPerson className="inline-flex items-center mr-2" alt="Author Icon" />{" "}
            {blog.byline}
          </p>
          <p className="mb-2 text-gray-600">
            <BiSolidCategory className="inline-flex items-center mr-2" alt="Category Icon" />{" "}
            {blog.section}
          </p>
          <p className="mb-2 text-gray-600">
            <IoIosTime className="inline-flex items-center mr-2" alt="Time Icon" />{" "}
            {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
