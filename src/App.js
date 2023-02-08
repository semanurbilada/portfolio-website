import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./css/index.css";
import Home from "./pages/Home.js";
//import About from "./pages/About.js"
//import Contact from "./pages/Contact.js"
//import Layout from "./core/Layout.js";


//tasarım üzerinde düşün !!!


export default function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/*
        <Route path="/about" element={<Layout pageContent={<About />} />} />
        <Route path="/contact" element={<Layout pageContent={<Contact />} />} />
        */}
      </Routes>
    </Router>
  );
}