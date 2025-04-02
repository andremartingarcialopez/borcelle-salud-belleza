import Header from "../components/Header";
import { courses } from "../static/statics";

export function Courses() {



    return (
        <>
            <Header></Header>

            <h2 className="text-5xl text-gray-600 font-semibold text-center my-3">Our Avaliable Courses</h2>

            <div className="mx-auto max-w-400">
                <div className="lg:grid grid-cols-[1fr_2fr] justify-center items-center gap-3 my-5">
                    {courses.map(function (course) {
                        return (
                            <>
                                <img key={course.id} className="w-full lg:w-120 lg:h-80" src={course.image} alt="Course_img" />
                                <div className="text-center lg:text-start">
                                    <h3 className="text-4xl text-gray-600 font-semibold">{course.title}</h3>
                                    <p className="text-xl font-semibold">{course.duration}</p>
                                    <p className="my-3">{course.introduction}</p>
                                    <div className="my-5 inline-flex lg:block p-3 w-full">
                                        <a className=" mt-5 border w-full border-gray-500 py-2 px-6 text-center text-xl hover:cursor-pointer hover:bg-gray-300 hover:text-gray-500 rounded-2xl bg-gray-400 text-white font-bold uppercase" href="#">Raed More</a>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
