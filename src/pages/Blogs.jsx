import BlogPage from "../components/BlogPage"


const Blogs = () => {
  return (
    <>
    <div className="">
      <div className="py-40 bg-black text-center text-white px-4">
      <h1 className="text-5xl lg:text-7x1 leading-snug font-bold mb-5 font-primary ">Welcome to our Blog</h1>
      </div>

      <div>
        <BlogPage/>
      </div>
    </div>
    </>
  )
}

export default Blogs
