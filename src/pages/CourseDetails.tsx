import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { courses } from "../static/statics";
import { Footer } from "../components/Footer";

export default function CourseDetails() {

    const paramId = useParams()

    const courseParams = courses.find(course => course.id == Number(paramId.id));
    console.log(courseParams)

    return (
        <>
            <Header />
            <div className="my-10 text-center mx-auto max-w-400 lg:grid grid-cols-[1fr_2fr] justify-center items-center h-full gap-5 lg:text-left">
                <div>
                    <img src={courseParams?.image} alt="course_img" />
                </div>
                <div>
                    <h2 className="text-4xl text-gray-600 font-semibold">{courseParams?.title}</h2>
                    <h3 className="text-xl font-semibold">{courseParams?.duration}</h3>
                    <p className="my-3 px-2">{courseParams?.details}</p>
                </div>
            </div>

            <Footer/>
        </>
    );
}




