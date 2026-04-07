import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

// Import the individual project pages
import Skechers from "./pages/Skechers";
import Gas from "./pages/Gas";
import Firstcry from "./pages/Firstcry";
import Spykar from "./pages/Spykar";
import Toms from "./pages/Toms";
import Oblum from "./pages/Oblum";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual project pages */}
        <Route path="/projects/skechers" element={<Skechers />} />
        <Route path="/projects/Gas" element={<Gas />} />
        <Route path="/projects/firstcry" element={<Firstcry />} />
        <Route path="/projects/spykar" element={<Spykar />} />
        <Route path="/projects/toms" element={<Toms />} />
        <Route path="/projects/oblum" element={<Oblum />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
