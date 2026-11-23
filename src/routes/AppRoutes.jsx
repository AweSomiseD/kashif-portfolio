import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import Services from "../pages/Services.jsx";
import Contact from "../pages/Contact.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
