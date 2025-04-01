import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CreateProfile from "./pages/CreateProfile";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/login" element={<Login setIsLoggedIn={(status) => console.log(status)} />} />
              <Route>
              <Route path="/footer" element={<Footer />} />
              <Route path="/helpCenter" element={<HelpCenter />} />
            </Route>
          </Routes>
        </div>
        {/* Ensure Footer is rendered only once */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;