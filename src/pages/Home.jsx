import Banner from "../components/Banner"
import BlogPage from "../components/BlogPage"


const Home = () => {
  return (
    <>
    <Banner/>

    <div className=" max-w-full  px-12 mx-auto">
      <BlogPage/>
    </div>
    
    </>
  )
}

export default Home
