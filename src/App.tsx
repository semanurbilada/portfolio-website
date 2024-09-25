import { Route, Routes, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

import Navbar from "./components/Navbar.tsx";
import React from "react";

function App() {
  return (
    <div className="custom-background w-full overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
}

export default App;