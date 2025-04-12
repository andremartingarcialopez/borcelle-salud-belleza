import { products } from "../static/statics"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export default function HomePage() {
    return (
        <>
        <Header/>
            <section>
                <div className="mx-auto max-w-400 bg-[url('https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center  h-[50vh] flex md:justify-center md:items-center">
                    <h2 className=" text-6xl  px-2   text-white text-shadow text-shadow-2xs text-shadow-gray-500 uppercase">All to live your best life</h2>
                </div>
            </section>

            <section className="mx-auto max-w-400 mt-8">

                <div className="lg:grid lg:grid-cols-[1fr_2fr]">

                    <div className="flex flex-col px-2">
                        <h3 className="text-2xl md:text-4xl text-gray-600 font-semibold">Our Products</h3>
                        <p>Discover the best version of your skin with our curated selection of skincare products. Designed to cleanse, hydrate, and revitalize, our products combine high-quality ingredients that suit all skin types</p>

                        <div className="md:hidden mt-5 md:mt-0 justify-around ">
                            {products.map(function (product) {
                                return (
                                    <div key={product.id}>
                                        <img className="" src={product.image} alt="product_img" />
                                    </div>
                                )
                            })}

                        </div>
                        <Link to={"/shop"} className="my-5 border border-gray-500 py-2 px-6 text-center  hover:cursor-pointer hover:bg-gray-300 hover:text-gray-500 rounded-2xl bg-gray-400 text-white font-bold uppercase">
                            Shop Now
                        </Link>
                    </div>



                    <div className="md:flex  justify-around hidden">
                        {products.map(function (product) {
                            return (
                                <div key={product.id}>
                                    <img className="w-50 h-50" src={product.image} alt="product_img" />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    )
}
