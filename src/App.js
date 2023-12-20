// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Career from "./pages/Career";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/story" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}

export default App;
