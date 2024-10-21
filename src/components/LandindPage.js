import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
  return (
    <div>
      {/* Header/Navbar */}
      <Header />
      <div
        style={{ border: "1px solid #cfcfcf", margin: "95px 95px 0 95px" }}
      ></div>

      {/* Main Content */}
      <div style={landingPageStyle}>
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
    </div>
  );
};

export default LandingPage;
