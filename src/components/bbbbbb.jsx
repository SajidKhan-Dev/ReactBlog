import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";




const BlogCards = ({ blogs }) => {
    console.log(blogs);
  
    return (
      <>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => <Link>
            
            const {
              abstract,
              byline,
              url,
              title,
              media,
              section,
              published_date,
              asset_id,
              des_facet,
            } = blog;
  
            return (
              <article key={asset_id} className="bg-white p-6 rounded-md shadow-md ">
                <h2 className=" mt-4 mb-2  font-bold hover:text-orange-500 cursor-pointer ">{title}</h2>
                <div>
                  {media && media.length > 0 ? (
                    <img
                      src={media[0]['media-metadata'][0].url}
                      alt={title}
                      className=" w-full h-full rounded-md"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  Read more
                </a>
                <p className="mb-2 text-gray-600"><IoPerson className="inline-flex items-center mr-2"/> {byline}</p>
                <p className="mb-2 text-gray-600"><BiSolidCategory className="inline-flex items-center mr-2" /> {section}</p>
                <p className="mb-2 text-gray-600"><IoIosTime className="inline-flex items-center mr-2"/> {published_date}</p>
              </article>
            );
          </Link>

          )}
        </section>
      </>
    );
  };

export default BlogCards;
