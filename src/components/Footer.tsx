import { Link } from "react-router-dom"
import { optionsNavBar } from "../static/statics"

export function Footer() {
    return (
        <footer className=" mt-10 bg-[#757575]">

            <div className="mx-auto max-w-400 md:grid grid-cols-[2fr_1fr]">
                <div className="flex justify-center items-center">
                    <h2 className="text-[6rem] font-thin text-white">Borcelle</h2>
                </div>

                <div className="flex flex-col lg:flex-row  justify-around items-center text-white gap-4 py-3">
                    {optionsNavBar.map(function (option) {
                        return (

                            <Link key={option.id} className={"hover:text-[#ffc107]"} to={option.href}>{option.option}</Link>
                        )
                    })}


                </div>
            </div>
        </footer>
    )
}
