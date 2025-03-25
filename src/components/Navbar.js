import React, { useState, useContext } from "react";
import { FiUser, FiSearch } from "react-icons/fi"; // Using react-icons for the search and user icons
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"; // Importing useNavigate for navigation/ Ensure the correct path to the image
import Ellipse4 from "../assets/img/Ellipse4.png";
import { Context } from "../index.js";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isAuthenticated,
    toggle,
    setBtn,
    setIsAuthenticated,
    user,
    setUser,
    setPopup,
  } = useContext(Context);
  const [showPopup, setShowPopup] = useState(false);
  console.log(isAuthenticated);

  const handleUploadClick = () => {
    navigate("/Upload");
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("user", JSON.stringify({ user: "Data Not found" }));
    setUser({});
    setIsAuthenticated(false);
  };

  return (
    <>
      <nav className="py-3 px-3 flex justify-between items-center mx-0 md:mx-10 sticky top-0 bg-white z-0  border-b-2 border-gray-300">
        {/* Logo Section */}
        <div className="text-primary text-2xl mx-4 font-bold ">LOGO</div>

        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-2xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Search Bar Section */}
        {isAuthenticated ? (
          <div className="xss:hidden lg:flex lg:ml-2 xs:ml-5 w-1/4 border-2 border-gray-600 border-opacity-40 items-center flex py-2 rounded-md">
            <FiSearch
              style={{
                marginRight: "10px",
                fontSize: "26px",
                color: "gray",
                marginLeft: "10px",
              }}
            />
            <input
              className="text-lg"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        ) : (
          <></>
        )}

        {/* Links Section */}
        <div
          className={`flex gap-8 lg:flex items-center mx-3 lg:gap-6 xl:gap-10 ${
            isMenuOpen
              ? "flex-col absolute text-center top-full left-0 w-full bg-white shadow-lg lg:static lg:flex-row lg:gap-10"
              : "hidden lg:flex"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? "text-primary lg:text-md"
                  : "text-gray-500 lg:text-sm"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/journals"
            className={({ isActive }) =>
              `font-semibold  ${
                isActive
                  ? "text-primary lg:text-md"
                  : "text-gray-500 lg:text-sm "
              }`
            }
          >
            JOURNALS
          </NavLink>
          <NavLink
            to="/institutions"
            className={({ isActive }) =>
              `font-semibold  ${
                isActive
                  ? "text-primary lg:text-md"
                  : "text-gray-500 lg:text-sm"
              }`
            }
          >
            INSTITUTIONS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold  ${
                isActive
                  ? "text-primary lg:text-md"
                  : "text-gray-500 lg:text-sm"
              }`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold  ${
                isActive
                  ? "text-primary lg:text-md"
                  : "text-gray-500 lg:text-sm"
              }`
            }
          >
            CONTACT US
          </NavLink>
          {isAuthenticated ? (
            <>
              {/* <div style={{ display: "flex", alignItems: "center", gap: "15px" }}> */}
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
                className=" mb-10 lg:mb-0"
                style={{
                  fontSize: "24px",
                  color: "rgba(0,0,255,1)",
                  cursor: "pointer",
                }}
                onClick={togglePopup} // Show popup on click
              />
              {/* </div>{" "} */}
            </>
          ) : (
            <>
              <button
                className="bg-primary px-9 py-3 text-white w-30 mx-auto rounded"
                onClick={() => {
                  setIsMenuOpen(false);
                  toggle();
                  setBtn("login");
                }}
              >
                LOGIN
              </button>

              <button
                className="bg-primary px-9 py-3 text-white w-30 mx-auto mb-10 lg:mb-0 rounded"
                onClick={() => {
                  setIsMenuOpen(false);
                  toggle();
                  setBtn("signup");
                }}
              >
                REGISTER
              </button>
            </>
          )}
        </div>

        {/* {isAuthenticated ? (

        ): (
            <>
            <div className = {`flex gap-5 lg:flex ${isMenuOpen ? "flex-col absolute text-center bg-white top-[336px] me-0 p-0 w-full right-5 lg:flex-row lg:static" : "hidden lg:flex"}`}>

      </div>

    </>
  )
} */}
      </nav>

      {/* Line image below the navbar */}
      {/* < img
        className="line4 static top-0"
        alt="Line"
        src={line4}
        style={{ width: "100%", marginTop: "20px" }}
      /> */}

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
                src={`http://175.29.21.101/storage/${user.image}` || Ellipse4} // Placeholder for user image
                alt="User"
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ margin: 0 }}>{user.name}</h3>
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
          {location.pathname === "/profileView" ? (
            <Link to="/">
              <button
                onClick={setPopup(false)}
                style={{
                  marginTop: "20px",
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
                View Home Feed
              </button>
            </Link>
          ) : (
            <Link to="/profileView">
              <button
                onClick={setPopup(false)}
                style={{
                  marginTop: "20px",
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
          )}

          <div
            style={{ border: "1px solid #cfcfcf", margin: "30px 10px" }}
          ></div>
          <div
          // style={{
          //   display: "flex",
          //   justifyContent: "start",
          //   alignItems: "center",
          //   marginTop: "-15px",
          // }}
          >
            <button
              className="flex justify-center gap-2 items-center w-full"
              onClick={handleLogout}
            >
              {/* <img
                  src={LogOut}
                  alt="LogOut Icon"
                  className="w-5"
                  // style={{ width: "30px", height: "30px", marginRight: "20px" }}
                /> */}
              <IoMdLogOut size={26} />
              <p className="font-semibold">Logout</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
