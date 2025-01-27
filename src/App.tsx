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

        <footer className="text-center w-full">
          <ul className="text-sm text-greenery-900 md:-m-8 m-0">
            <li>Copyright © 2024 | Made by Semanur Bilada</li>
          </ul>
        </footer>

        {/* Github Button */}
        <div className="relative">
          <div className="fixed md:bottom-10 md:right-5 right-5 top-9 hover:scale-110 animation md:top-auto z-50">
            <a href="https://github.com/semanurbilada" target="_blank" rel="noreferrer">
              <Icons 
                iconName="github" 
                className=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;