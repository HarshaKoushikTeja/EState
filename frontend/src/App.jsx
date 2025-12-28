import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";  // Import Login Page
import Signup from "./pages/Signup"; // Import Signup Page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              <Testimonails /> 
              <Contact />
              <Footer />
            </>
          } />
          </Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;