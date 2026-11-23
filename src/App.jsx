import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollManager />
      <Navbar menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      <main
        className={`transition-[filter] duration-200 ${
          menuOpen ? "max-lg:pointer-events-none max-lg:select-none max-lg:blur-sm" : ""
        }`}
      >
        <AppRoutes />
        <Footer />
      </main>
    </>
  );
}

export default App;
