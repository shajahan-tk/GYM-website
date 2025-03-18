import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/" element={<Footer />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
