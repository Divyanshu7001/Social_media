import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignupPage from "./SignupPage";
import { Context } from "../index.js";
import LoginPage from "./LoginPage.js";
import { useNavigate } from "react-router-dom";
// import { FiSearch, FiUser } from "react-icons/fi"; // Using react-icons for the search and user icons

// Inline styles for the Landing Page
const landingPageStyle = {
  padding: "80px 20px", // Adjusted padding to account for the fixed header
};

const contentStyle = {
  marginTop: "20px",
};

const sectionsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};


const LandingPage = () => {
  const { popup, btn, isAuthenticated } = useContext(Context)
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate("home")
      console.log("authtrue")
    }
    else {
      console.log("authfalse")
      navigate("/")
    }
  }, [isAuthenticated])
  return (
    <>
      {/* Header/Navbar */}
      <Navbar />
      {popup && (btn === "signup") && <SignupPage />
      }
      {popup && (btn === "login") && <LoginPage />
      }


      {/* Main Content */}
      <div style={landingPageStyle} className={popup ? " bg-black bg-opacity-50" : "bg-white"}>
        <div style={contentStyle}>
          <h1>Welcome to Journal Network</h1>
          <div style={sectionsStyle}>
            {/* You can add additional sections/content here */}
            <p>
              Journal Network is your hub for academic articles, research
              papers, and institutional journals. Explore our vast collection or
              contribute your own work today.
            </p>
            {/* You can add more content here like buttons, articles preview, etc. */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
