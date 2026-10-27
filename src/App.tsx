import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Navbar from "./components/Navbar.tsx";
import Icons from "./components/icons/Icons.js";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <div className="custom-background w-full overflow-hidden">
      <div className="container relative flex flex-col gap-10 md:gap-0 items-center justify-center">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Router>

        
        {/* Fixed Contact Buttons */}
        <div className="container fixed md:bottom-10 bottom-auto top-9 md:top-auto md:z-50 pointer-events-none">
          <div className="flex md:flex-row flex-col items-end md:items-center justify-end md:justify-between">
            {/* Robot Icon (hidden on mobile) */}
            <div>
              <Icons
                iconName="robot"
                className="hidden md:inline md:hover:scale-110 animate-bounce animation"
                size={""}
              />
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-center justify-center md:gap-6 gap-2">
              <a
                href="https://github.com/semanurbilada"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <Icons
                  iconName="github"
                  className="md:hover:scale-110 animation text-[#134e4a]"
                  size={"45px"}
                />
              </a>

              <a
                href="mailto:semanurbilada@gmail.com"
                className="pointer-events-auto"
              >
                <Icons
                  iconName="mail"
                  className="md:hover:scale-110 animation"
                  size={""}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/semanur-bilada/"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <Icons
                  iconName="linkedin"
                  className="md:hover:scale-110 animation"
                  size={""}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full text-center pb-5 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* Copyright */}
            <p className="text-xs md:text-sm text-greenery-900">
              © 2026 Semanur BİLADA · Designed & Developed by Me
            </p>

            {/* Open Source Repository */}
            <div className="flex items-center justify-center gap-2">
              <span
                className="
                  inline-flex items-center
                  px-2.5 py-1
                  rounded-full
                  bg-accent-cyan/10
                  border border-accent-cyan/40
                  text-[11px] font-medium
                  text-greenery-900
                "
              >
                Open Source
              </span>

              <a
                href="https://github.com/semanurbilada/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View this website's source code on GitHub"
                className="
                  inline-flex items-center gap-1.5
                  text-xs font-semibold
                  text-accent-purple
                  transition-all duration-300
                  hover:text-accent-blue
                  hover:-translate-y-0.5
                "
              >
                <Icons
                  iconName="github"
                  size="15px"
                  className="text-current"
                />
                View Source Code ↗
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;