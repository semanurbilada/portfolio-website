import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Icons from './icons/Icons.js';


export default function Navbar() {
    const location = useLocation().pathname;
    const [isNavbar, setIsNavbar] = useState(false);
    const start = window.scrollTo({ top:0, behavior: "smooth" });

    return(
        <header className="h-full w-full relative top-9">
            <div className="container fixed top-9 hidden md:flex items-center justify-between gap-6">

                <Link to="https://www.linkedin.com/in/semanur-bilada/" target='_blank' rel='noopener noreferrer nofollow'
                    className="py-4 px-6 bg-gradient-to-r from-greenery-900 to-greenery-700 rounded-full text-greenery-100 text-xl hover:scale-110 animation shadow-2xl z-50">
                    Semanur Bilada
                </Link>

                <nav className="px-14 py-6 bg-greenery-500 rounded-full shadow-2xl">
                    <ul className="flex items-center justify-center gap-12 text-lg text-greenery-100 font-semibold animation">
                        <li 
                            className={`nav-item group ${
                                location === "/" ? "nav-active" : ""
                            }`}><Link to="/">HOME</Link>
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>

                        <li 
                            className={`nav-item group ${
                                location === "/projects" ? "nav-active" : ""
                            }`}><Link to="/projects">MY PROJECTS</Link>  
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>

                        <li 
                            className={`nav-item group ${
                                location === "/about" ? "nav-active" : ""
                            }`}><Link to="/about">ABOUT ME</Link>  
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>

                        <li 
                            className={`nav-item group ${
                                location === "/contact" ? "nav-active" : ""
                            }`}><Link to="/contact">CONTACT</Link>  
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* mobile navbar */}
            <nav className="md:hidden fixed top-9 left-9">
                <li
                    className={"relative flex gap-1 px-4 py-3 rounded-full bg-greenery-900 text-greenery-100 text-lg cursor-pointer shadow-2xl list-none animation hover:bg-gradient-to-r hover:from-greenery-900 hover:to-greenery-700 z-50"}
                    onClick={() => setIsNavbar(!isNavbar)}>
                    
                    <Icons
                        iconName={"menu"}
                        className={`${isNavbar && "arrow-animation"} fill-greenery-100`}
                    />Semanur Bilada

                    <ul className={`${isNavbar && "mobile-active"} absolute top-16 p-5 left-0 right-0 space-y-3 pointer-events-none animation bg-greenery-500 rounded-xl shadow-2xl z-50 font-bold opacity-0`}>
                        <li className={`nav-item ${
                                location === "/" ? "nav-active" : ""
                            }`}
                            onClick={start}>
                            <Link to="/">HOME</Link>
                        </li>

                        <li className={`nav-item ${
                                location === "/projects" ? "nav-active" : ""
                            }`}
                            onClick={start}>
                            <Link to="/projects">MY PROJECTS</Link>  
                        </li>

                        <li className={`nav-item ${
                                location === "/about" ? "nav-active" : ""
                            }`}
                            onClick={start}>
                            <Link to="/about">ABOUT ME</Link>  
                        </li>

                        <li className={`nav-item ${
                                location === "/contact" ? "nav-active" : ""
                            }`}
                            onClick={start}>
                            <Link to="/contact">CONTACT</Link>  
                        </li>
                    </ul>
                </li>
            </nav>
        </header>
    );
}