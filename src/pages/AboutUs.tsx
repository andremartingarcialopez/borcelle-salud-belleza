import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer";


export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-300 flex flex-col md:flex-row justify-center items-center gap-x-7">

        <div>
          <img src="https://images.pexels.com/photos/11179655/pexels-photo-11179655.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-[150rem]" alt="" />
          <p className="text-center mt-3 mb-7"> -Ana Wilson-</p>
        </div>

        <div className="text-center md:text-left px-2 flex flex-col md:text-xl">

          <h3 className="text-2xl md:text-4xl text-gray-600 font-semibold">About us</h3>
          <p>Known for her radiant beauty and unmistakable style, Ana Wilson has become an icon of elegance and self-care. Her secret to flawless skin lies in a skincare routine that blends natural ingredients with advanced technology.</p> <br />
          <p>Through her exclusive product line, Ana shares her most treasured secrets to maintaining fresh, hydrated, and glowing skin. Each formula is carefully crafted to deliver visible results and transform the daily skincare experience, just as Ana does with every project she takes on.</p>

          <Link to={"/anaWilson"} className=" my-5 border border-gray-500 py-2 px-6 text-center hover:cursor-pointer hover:bg-gray-300 hover:text-gray-500 rounded-2xl bg-gray-400 text-white font-bold uppercase">
            Read More
          </Link>
        </div>

      </div>

      <Footer/>
    </>
  )
}
