import { Footer } from "../components/Footer"
import Header from "../components/Header"

export function AnaWilson() {
    return (
        <>
            <Header />
            <div className="lg:grid grid-cols-2 items-center mx-auto max-w-400 text-center lg:text-left">
                <div className="flex flex-col justify-center items-center">
                    <img src="https://images.pexels.com/photos/11179580/pexels-photo-11179580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="ana-wilson-img" />
                </div>

                <div>
                    <h2 className="text-4xl text-gray-600 font-semibold">What is Borcelle?</h2>

                    <p>Borcelle is an innovative skincare brand dedicated to the health and well-being of its community. Specializing in high-quality products, Borcelle combines the best of dermatological science with carefully selected natural ingredients to provide effective solutions tailored to every skin type. From its very first products, the brand has stood out for its focus on sustainability and inclusivity, creating formulas that respect both people and the environment. <br />

                        Every Borcelle product is designed with the goal of delivering visible, long-lasting results, providing hydration, nourishment, and protection to the skin, all through a unique sensory experience. The brand is characterized by its transparency, championing honesty in every formula and committing to keeping its customers informed about the ingredients in their products.</p>
                </div>

                <div className="col-span-3 my-8">
                    <h2 className="text-4xl text-gray-600 font-semibold">Ana Wilson – CEO of Borcelle</h2>

                    <p>
                        Ana Wilson is the visionary behind Borcelle. As the CEO and founder of the brand, Ana has successfully positioned Borcelle as one of the leading skincare brands in the market, thanks to her passion for innovation and her deep commitment to dermatological health. With years of experience in the beauty and wellness industry, Ana decided to embark on her own journey to offer products that not only improve the appearance of the skin but also promote its overall care. <br />

                        Her focus on science, sustainability, and ethical business practices has been key to the growth and success of Borcelle. Ana is a strong advocate for transparency in the cosmetic industry and works tirelessly to ensure that every Borcelle product meets the highest quality standards while addressing the needs and concerns of its customers. <br />

                        Under her leadership, Borcelle has built a solid reputation as a brand that consumers can trust, and Ana continues to inspire other entrepreneurs with her example of dedication, innovation, and responsibility.
                    </p>
                </div>
            </div>

            <Footer/>
        </>
    )
}
