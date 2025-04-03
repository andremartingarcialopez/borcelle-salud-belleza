import Header from "../components/Header"

export default function Contact() {

  function sendForm() {
    alert("Form out of service")
  }

  return (
    <>
      <Header />

      <div className="mx-auto max-w-[80rem] lg:grid grid-cols-2 gap-4 justify-center items-center p-2">
        <div>

          <div className="text-center lg:text-start">
            <h2 className="text-4xl font-bold text-[gray] my-3">Contact</h2>
            <h3 className="text-2xl font-semibold">Please fill out the form below to get in touch with us.</h3>
            <p className="text-xl my-2">At Borcelle, we’re committed to providing you with the best skincare experience. Whether you have questions about our products, need personalized skincare advice, or want to share your feedback, we’d love to hear from you. Our team is here to assist you on your journey to healthier, glowing skin.</p>
          </div>

          <div className="text-center lg:text-start my-5">
            <h3 className="text-2xl font-semibold">E-mail:</h3>
            <p className="text-xl ">hello@rocelle.com</p>
          </div>

        </div>

        <div>
          <form className="border-2 border-slate-300 p-10 rounded-xl flex flex-col w-full gap-3">
            <legend className="font-bold text-[gray] mb-3 text-center">We are happy to receive all your comments and questions.</legend>
            <div >
              <input className="border w-full border-[gray] bg-slate-300 p-2 rounded-xl" type="text" placeholder="Name" />
            </div>

            <div>
              <input className=" border w-full border-[gray] bg-slate-300 p-2 rounded-xl " type="email" placeholder="Email" />
            </div>

            <div>
              <input className=" border w-full border-[gray] bg-slate-300 p-2 rounded-xl " type="text" placeholder="Subject" />
            </div>

            <div>
              <textarea className=" border w-full h-[10rem] border-[gray] bg-slate-300 p-2 rounded-xl " placeholder="Message" name="" id=""></textarea>
            </div>

            <input type="submit" onClick={()=> sendForm()}  value={"Send"} className="w-full lg:w-40 mt-2 mb-5 border border-gray-500 py-2 px-6 text-center text-xl hover:cursor-pointer hover:bg-gray-300 hover:text-gray-500 rounded-2xl bg-gray-400 text-white font-bold"  />
          </form>
        </div>
      </div>
    </>
  )
}
