import { 
  Route, 
  Routes,
  HashRouter as Router 
} from "react-router-dom";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="custom-background w-full overflow-hidden">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}