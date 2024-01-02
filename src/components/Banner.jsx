import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div className='px-4 py-28 bg-black mx-auto '>
        <div className='text-white text-center'>
            <h1 className="text-5xl lg:text-7x1 leading-snug font-bold mb-5 font-primary ">Welcome to our Blog</h1>
            <p className="font-primary text-gray-300 lg:w-3/5 mx-auto mb-5 ">Start your blog today and join a community of writters and readers who are passionate about 
                sharing thir stories and ideas. We offer everything you need to get statted, from helpful tips and tutorials.</p>
        </div>

        <div className="text-center ">
            <Link to="/" className=" font-medium text-white  inline-flex items-center py-1 hover:text-orange-500">Lern More
            <FaArrowRight className="mt-1 ml-2  " /> </Link>
        </div>
    </div>

  )
}

export default Banner
