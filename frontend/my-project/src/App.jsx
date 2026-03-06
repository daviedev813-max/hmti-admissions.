// src/App.jsx
import React, { useEffect } from "react"; // Add 'React' here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "hansenmyles");
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/terms" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
