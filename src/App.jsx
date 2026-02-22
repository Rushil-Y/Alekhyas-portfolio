import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

// Import the individual project pages
import Skechers from "./pages/Skechers";
import Firstcry from "./pages/Firstcry";
import Spykar from "./pages/Spykar";
import Toms from "./pages/Toms";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual project pages */}
        <Route path="/projects/skechers" element={<Skechers />} />
        <Route path="/projects/firstcry" element={<Firstcry />} />
        <Route path="/projects/spykar" element={<Spykar />} />
        <Route path="/projects/toms" element={<Toms />} />
      </Routes>
    </Router>
  );
}

export default App;
