import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Navbar from "./components/Navbar.tsx";
import Icons from "./components/icons/Icons.js";

function App() {
  return (
    <div className="custom-background w-full overflow-hidden">
      <div className="container relative flex flex-col gap-10 md:gap-0 items-center justify-center">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Router>

        {/* Fixed Contact Buttons */}
        <div className="container fixed md:bottom-10 bottom-auto top-9 md:top-auto md:z-50">
          <div className="flex md:flex-row flex-col items-end md:items-center justify-end md:justify-between">
            {/* Rocket Icon (hidden on mobile) */}
            <div>
              <Icons 
                iconName="rocket"
                className="hidden md:inline md:hover:scale-110 animate-bounce animation"
              />
            </div>

            {/* Social Icons */}
            <div className="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-2">
              <a href="https://github.com/semanurbilada" target="_blank" rel="noreferrer">
                <Icons 
                  iconName="github"
                  className="md:hover:scale-110 animation"
                />
              </a>

              <a href="mailto:semanurbilada@gmail.com" target="_blank" rel="noreferrer">
                <Icons
                  iconName="mail" 
                  className="md:hover:scale-110 animation"
                />
              </a>

              <a href="https://www.linkedin.com/in/semanur-bilada/" target="_blank" rel="noreferrer">
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
            <li>Copyright © 2024 | Made by Semanur Bilada</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;