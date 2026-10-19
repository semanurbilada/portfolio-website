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
                  className="md:hover:scale-110 animation"
                />
              </a>

              <a
                href="mailto:semanurbilada@gmail.com"
                className="pointer-events-auto"
              >
                <Icons
                  iconName="mail"
                  className="md:hover:scale-110 animation"
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
                />
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center w-full">
          <ul className="text-sm text-greenery-900 md:-m-8 m-4">
            <li>Copyright © 2026 | Made by Semanur BİLADA</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;