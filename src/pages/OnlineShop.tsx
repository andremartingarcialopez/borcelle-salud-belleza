import { Footer } from "../components/Footer";
import Header from "../components/Header"
import { products } from "../static/statics"

export default function OnlineShop() {

  const formatPriceToDollar = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  function addToCar() {
    alert("Sorry but this iteam now is out of stock")
    console.log("Hola")
  }

  return (
    <>
      <Header />
      <h2 className="uppercase text-2xl text-gray-600 font-semibold text-center">Ready to be beautifull?</h2>
      <h3 className="text-center my-3 text px-1">Now, you can purchase any of our products with just a single <span className="font-semibold">"click"</span></h3>

      <div className="lg:grid grid-cols-4 w-full p-4 gap-4">
        {products.map(function (product) {
          return (
            <div key={product.id} className="flex flex-col justify-center items-center lg:p-4 gap-3">
              <img className="lg:w-80 w-full" src={product.image} alt="product-img" />
              <h4 className="text-xl font-semibold">{product.name}</h4>
              <p className="">{formatPriceToDollar(product.price)}</p>
              <button onClick={() => addToCar()} className="w-full mt-2 mb-5 border border-gray-500 py-2 px-6 text-center hover:cursor-pointer hover:bg-gray-300 hover:text-gray-500 rounded-2xl bg-gray-400 text-white font-bold uppercase">
                Add To Car
              </button>
            </div>
          )
        })}

      </div>
      <Footer/>
    </>
  )
}

