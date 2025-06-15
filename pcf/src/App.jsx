// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import KnowMore from "./Pages/knowmore";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />

              {/* Scroll Target Sections */}
              
            </>
          }
        />
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
