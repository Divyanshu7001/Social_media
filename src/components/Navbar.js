import React, { useState, useContext } from "react";
import { FiSearch, FiUser } from "react-icons/fi"; // Using react-icons for the search and user icons
import { Link, NavLink, useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import line4 from "../assets/img/line4.svg"; // Ensure the correct path to the image
import Ellipse4 from "../assets/img/Ellipse4.png";
import LogOut from "../assets/img/uiw_logout.png";
import { Context } from "../index.js";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [showPopup, setShowPopup] = useState(false);
  console.log(isAuthenticated);
  
  const handleUploadClick = () => {
    navigate("/Upload");
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <nav className="container w-full flex justify-between items-center mt-2 mx-auto">
        {/* Logo Section */}
        <div
          style={{
            width: "70px",
            fontSize: "40px",
            fontWeight: "bold",
            color: "rgba(0,0,255,1)",
            marginRight: "12px",
          }}
        >
          LOGO
        </div>

        {/* Search Bar Section */}
        <div
          className="ml-5 w-1/3 border-2 border-gray-400 items-center"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            height: "50px",
          }}
        >
          <FiSearch
            style={{ marginRight: "20px", fontSize: "28px", color: "gray" }}
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              border: "none",
              outline: "none",
              fontSize: "19px",
              width: "250px",
            }}
          />
        </div>

        {/* Links Section */}
        <div style={{ display: "flex", gap: "35px" }}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "rgba(0,0,255,1)",
                    fontWeight: "bold",
                    borderBottom: "2px solid rgba(0,0,255,1)",
                    paddingBottom: "3px",
                  }
                : {
                    textDecoration: "none",
                    color: "#73736f",
                    fontWeight: "bold",
                  }
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/journals"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "rgba(0,0,255,1)",
                    fontWeight: "bold",
                    borderBottom: "2px solid rgba(0,0,255,1)",
                    paddingBottom: "3px",
                  }
                : {
                    textDecoration: "none",
                    color: "#73736f",
                    fontWeight: "bold",
                  }
            }
          >
            JOURNALS
          </NavLink>
          <NavLink
            to="/institutions"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "rgba(0,0,255,1)",
                    fontWeight: "bold",
                    borderBottom: "2px solid rgba(0,0,255,1)",
                    paddingBottom: "3px",
                  }
                : {
                    textDecoration: "none",
                    color: "#73736f",
                    fontWeight: "bold",
                  }
            }
          >
            INSTITUTIONS
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "rgba(0,0,255,1)",
                    fontWeight: "bold",
                    borderBottom: "2px solid rgba(0,0,255,1)",
                    paddingBottom: "3px",
                  }
                : {
                    textDecoration: "none",
                    color: "#73736f",
                    fontWeight: "bold",
                  }
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "rgba(0,0,255,1)",
                    fontWeight: "bold",
                    borderBottom: "2px solid rgba(0,0,255,1)",
                    paddingBottom: "3px",
                  }
                : {
                    textDecoration: "none",
                    color: "#73736f",
                    fontWeight: "bold",
                  }
            }
          >
            CONTACT US
          </NavLink>
        </div>

        {isAuthenticated ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <button
                onClick={handleUploadClick} // Navigate when button is clicked
                style={{
                  backgroundColor: "rgba(0,0,255,1)",
                  color: "white",
                  padding: "5px 30px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Upload
              </button>
              <FiUser
                style={{
                  fontSize: "24px",
                  color: "rgba(0,0,255,1)",
                  cursor: "pointer",
                }}
                onClick={togglePopup} // Show popup on click
              />
            </div>{" "}
          </>
        ) : (
          <>
            <div style={{ gap: "10px", display: "flex" }}>
              <a href="/login" className="uploadButton">
                LOGIN
              </a>
              <a href="/signup" className="uploadButton">
                REGISTER
              </a>
            </div>
          </>
        )}
      </nav>

      {/* Line image below the navbar */}
      <img
        className="line4"
        alt="Line"
        src={line4}
        style={{ width: "100%", marginTop: "20px" }}
      />

      {/* User Profile Popup */}
      {showPopup && (
        <div
          style={{
            position: "absolute",
            top: "100px", // Adjust the position as per your requirement
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            zIndex: 10,
            padding: "20px",
            border: "1px solid #cfcfcf",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Ellipse4} // Placeholder for user image
                alt="User"
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  marginRight: "10px",
                }}
              />
              <div style={{ marginLeft: "30px" }}>
                <h3 style={{ margin: 0 }}>John Paul</h3>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(0,0,0,0.5)",
                    fontWeight: "400",
                  }}
                >
                  Designation
                </p>
              </div>
            </div>
            <button
              onClick={togglePopup}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "35px",
                margin: "-65px -13px 0 0",
                color: "rgba(0,0,0,0.5)",
                fontWeight: "400",
              }}
            >
              &times;
            </button>
          </div>
          <Link to="/profileView">
            <button
              style={{
                marginTop: "40px",
                padding: "10px",
                borderRadius: "9999px",
                border: "1px solid rgba(0,0,255,1)",
                backgroundColor: "transparent",
                width: "89%",
                cursor: "pointer",
                fontSize: "18px",
                color: "rgba(0,0,255,1)",
                fontWeight: "500",
              }}
            >
              View Profile
            </button>
          </Link>
          <div
            style={{ border: "1px solid #cfcfcf", margin: "30px 10px" }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginTop: "-15px",
            }}
          >
            <img
              src={LogOut}
              alt="LogOut Icon"
              style={{ width: "30px", height: "30px", marginRight: "20px" }}
            />
            <p
              style={{
                fontSize: "20px",
                color: "rgba(0,0,0,1)",
                fontWeight: "500",
              }}
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
