import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from './icons/Icons.js';

const Navbar: React.FC = () => {
    const location = useLocation().pathname;
    const [isNavbar, setIsNavbar] = useState(false);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        <header className="h-full w-full relative top-9">
            {/* Desktop Navbar */}
            <div className="container fixed top-9 hidden md:flex items-center justify-between gap-6">
                <Link
                    to="https://www.linkedin.com/in/semanur-bilada/"
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className="py-4 px-6 bg-gradient-to-r from-greenery-900 to-greenery-700 rounded-full text-greenery-100 text-xl hover:scale-110 animation shadow-2xl z-50">
                    Semanur Bilada
                </Link>

                <nav className="px-14 py-6 bg-greenery-500 rounded-full shadow-2xl">
                    <ul className="flex items-center justify-center gap-12 text-lg text-greenery-100 font-bold animation">
                        <li className={`nav-item group ${location === "/" ? "nav-active" : ""}`}>
                            <Link to="/">HOME</Link>
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>
                        <li className={`nav-item group ${location === "/projects" ? "nav-active" : ""}`}>
                            <Link to="/projects">MY PROJECTS</Link>
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>
                        <li className={`nav-item group ${location === "/about" ? "nav-active" : ""}`}>
                            <Link to="/about">ABOUT ME</Link>
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li>
                        {/* <li className={`nav-item group ${location === "/contact" ? "nav-active" : ""}`}>
                            <Link to="/contact">CONTACT</Link>
                            <span className="nav-hover-left"></span>
                            <span className="nav-hover-right"></span>
                        </li> */}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed top-9 left-9 z-50 font-medium">
                <li
                    className="relative flex gap-1 px-4 py-3 rounded-full bg-greenery-900 text-greenery-100 text-lg cursor-pointer shadow-2xl list-none animation hover:bg-gradient-to-r hover:from-greenery-900 hover:to-greenery-700"
                    onClick={() => setIsNavbar(!isNavbar)}
                >
                    <Icons
                        iconName="menu"
                        className={`${isNavbar && "icon-animation"} fill-greenery-100`}
                    />
                    Semanur Bilada
                </li>

                {/* Mobile Navbar Content */}
                <ul
                    className={`${
                        isNavbar ? "mobile-active opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } absolute top-16 p-5 left-0 right-0 space-y-3 bg-greenery-500 text-greenery-100 rounded-xl shadow-2xl z-50 font-bold animation`}
                >
                    <li 
                        className={`nav-item ${location === "/" ? "nav-active" : ""}`} 
                        onClick={() => { setIsNavbar(false); scrollToTop(); }}
                    >
                        <Link to="/">HOME</Link>
                    </li>

                    <li 
                        className={`nav-item ${location === "/projects" ? "nav-active" : ""}`} 
                        onClick={() => { setIsNavbar(false); scrollToTop(); }}
                    >
                        <Link to="/projects">MY PROJECTS</Link>
                    </li>

                    <li 
                        className={`nav-item ${location === "/about" ? "nav-active" : ""}`} 
                        onClick={() => { setIsNavbar(false); scrollToTop(); }}
                    >
                        <Link to="/about">ABOUT ME</Link>
                    </li>

                    {/* <li 
                        className={`nav-item ${location === "/contact" ? "nav-active" : ""}`} 
                        onClick={() => { setIsNavbar(false); scrollToTop(); }}
                    >
                        <Link to="/contact">CONTACT</Link>
                    </li> */}
                </ul>
            </nav>

            {/* Overlay for background darken */}
            {isNavbar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-45 z-40 animation"
                    onClick={() => setIsNavbar(false)}
                />
            )}
        </header>
    );
};

export default Navbar;