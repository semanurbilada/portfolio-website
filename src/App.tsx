import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Navbar from "./components/Navbar.tsx";

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
          <ul className="text-sm text-greenery-900 md:-m-8 -m-10">
            <li>Copyright © 2024 | Made by Semanur Bilada</li>
          </ul>
        </footer>

        {/* Download CV Button */} 
        {/* TODO: Responsive adjustments! */}
        <div className="absolute bottom-10 right-0 hover:scale-110 animation shadow-2xl z-50">
          <a
            href="/assets/CV-Semanur-Bilada.pdf"
            download="CV-Semanur-Bilada.pdf"
            className="py-3 px-4 bg-gradient-to-r from-greenery-900 to-greenery-700 rounded-full text-greenery-100"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;