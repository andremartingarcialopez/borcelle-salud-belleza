import Home from "../pages/home"
import { optionsNavBar } from "../static/statics"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="p-1 border-b mb-5 border-b-[#757575] mx-auto max-w-400">
                <div className="lg:grid grid-cols-2 items-center mx-auto">


                    <Link className="flex justify-center items-center" to={"/"}>
                        <svg className="hidden md:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" width="54" height="54" stroke-width="2">
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M12 2a3 3 0 0 1 3 3c0 .562 -.259 1.442 -.776 2.64l-.724 1.36l1.76 -1.893c.499 -.6 .922 -1 1.27 -1.205a2.968 2.968 0 0 1 4.07 1.099a3.011 3.011 0 0 1 -1.09 4.098c-.374 .217 -.99 .396 -1.846 .535l-2.664 .366l2.4 .326c1 .145 1.698 .337 2.11 .576a3.011 3.011 0 0 1 1.09 4.098a2.968 2.968 0 0 1 -4.07 1.098c-.348 -.202 -.771 -.604 -1.27 -1.205l-1.76 -1.893l.724 1.36c.516 1.199 .776 2.079 .776 2.64a3 3 0 0 1 -6 0c0 -.562 .259 -1.442 .776 -2.64l.724 -1.36l-1.76 1.893c-.499 .601 -.922 1 -1.27 1.205a2.968 2.968 0 0 1 -4.07 -1.098a3.011 3.011 0 0 1 1.09 -4.098c.374 -.218 .99 -.396 1.846 -.536l2.664 -.366l-2.4 -.325c-1 -.145 -1.698 -.337 -2.11 -.576a3.011 3.011 0 0 1 -1.09 -4.099a2.968 2.968 0 0 1 4.07 -1.099c.348 .203 .771 .604 1.27 1.205l1.76 1.894c-1 -2.292 -1.5 -3.625 -1.5 -4a3 3 0 0 1 3 -3z"></path>
                        </svg>
                        <h1 className="text-[6rem] font-thin text-[#757575]">Borcelle</h1>

                    </Link>


                    <div className="flex w-full justify-around text-xl">
                        {optionsNavBar.map(function (option) {
                            return (
                                
                                <NavLink  key={option.id} className={"hover:text-[#ffc107]"} to={option.href}>{option.option}</NavLink>
                            )
                        })}

                    </div>
                </div>
            </header>
        </>
    )
}
