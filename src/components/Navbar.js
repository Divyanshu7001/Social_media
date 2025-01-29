import React, { useState, useContext } from "react";
import { FiSearch, FiUser, FiX } from "react-icons/fi"; // Using react-icons for the search and user icons
import { Link, NavLink, useNavigate } from "react-router-dom"; // Importing useNavigate for navigation/ Ensure the correct path to the image
import Ellipse4 from "../assets/img/Ellipse4.png";
import { Context } from "../index.js";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuthenticated, toggle, setBtn, setIsAuthenticated, setUser, setPopup } = useContext(Context);
  const [showPopup, setShowPopup] = useState(false);
  console.log(isAuthenticated);
  const [search, setSeach] = useState(false)
  const [searchitem, setSearchitem] = useState("")

  const handleSeach = () => {
    setSeach(true)
  }

  const handleInputBlur = () => {
    if (searchitem === "") {
      setSeach(false)
    }
  }

  const handleChange = (e) => {
    setSearchitem(e.target.value)
  }

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
    localStorage.setItem("user", JSON.stringify({ "user": "Data Not found" }));
    setUser({});
    setIsAuthenticated(false);
    setPopup(false)
    setBtn(null)
    navigate("/")
  }
  const handleClearSearch = () => {
    setSeach(false)
    setSearchitem(""); // Clear the search input
  };


  return (
    <>
      <nav className="w-full p-3 flex justify-between items-center mx-auto sticky top-0 bg-white z-50  border-b-4">
        {/* Logo Section */}
        <div className="text-primary text-2xl mx-5 font-bold ">
          LOGO
        </div>

        {/* Search Bar Section */}
        <div
          className="ml-5 w-1/2 md:w-1/3 items-center flex relative lg:hidden"
        >
          {!search ? <FiSearch
            size={30}
            onClick={handleSeach}
          /> : <div className="flex ">
            <FiSearch
              size={20}
              color="gray"
              className="absolute top-3 left-3"
            />
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-400 rounded-md ps-9 pe-3 text-lg"
              onChange={handleChange}
              onBlur={handleInputBlur}
            />
          </div>}
          {search && (
            <button
              onClick={handleClearSearch} 
              className="ps-2"
            >
              <FiX size={25} color="black" />
            </button>)
}


        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-2xl">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>



        {/* Links Section */}
        <div className={`flex gap-8 lg:flex items-center ml-auto me-10 lg:gap-8 xl:gap-10 ${isMenuOpen ? 'flex-col absolute text-center top-full left-0 w-full bg-white shadow-lg lg:static lg:flex-row lg:gap-10' : 'hidden lg:flex'}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => `font-semibold  ${isActive ? "text-primary" : "text-gray-500"}`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/journals"
            className={({ isActive }) => `font-semibold  ${isActive ? "text-primary" : "text-gray-500"}`}
          >
            JOURNALS
          </NavLink>
          <NavLink
            to="/institutions"
            className={({ isActive }) => `font-semibold  ${isActive ? "text-primary" : "text-gray-500"}`}
          >
            INSTITUTIONS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `font-semibold  ${isActive ? "text-primary" : "text-gray-500"}`}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `font-semibold  ${isActive ? "text-primary" : "text-gray-500"}`}
          >
            CONTACT US
          </NavLink>
          {isAuthenticated ?
            <>
              {/* <div style={{ display: "flex", alignItems: "center", gap: "15px" }}> */}
              <button className="bg-primary px-9 py-3 text-white w-30 mx-auto rounded hidden md:block"
                onClick={handleUploadClick} // Navigate when button is clicked
              // style={{
              //   backgroundColor: "rgba(0,0,255,1)",
              //   color: "white",
              //   padding: "5px 30px",
              //   borderRadius: "5px",
              //   border: "none",
              //   fontSize: "20px",
              //   cursor: "pointer",
              // }}
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
            </> : <>
              <button className="bg-primary px-9 py-3 text-white w-30 mx-auto rounded" onClick={() => {
                setIsMenuOpen(false)
                toggle()
                setBtn("login")

              }}>
                LOGIN
              </button>


              <button className="bg-primary px-9 py-3 text-white w-30 mx-auto mb-10 lg:mb-0 rounded" onClick={() => {
                setIsMenuOpen(false)
                toggle()
                setBtn("signup")

              }}>
                REGISTER
              </button></>}
        </div>

        {/* {isAuthenticated ? (

        ): (
            <>
            <div className = {`flex gap-5 lg:flex ${isMenuOpen ? "flex-col absolute text-center bg-white top-[336px] me-0 p-0 w-full right-5 lg:flex-row lg:static" : "hidden lg:flex"}`}>

      </div>

    </>
  )
} */}
      </nav >



      {/* Line image below the navbar */}
      {/* < img
        className="line4 static top-0"
        alt="Line"
        src={line4}
        style={{ width: "100%", marginTop: "20px" }}
      /> */}

      {/* User Profile Popup */}
      {
        showPopup && (
          <div
            style={{
              position: "absolute",
              top: "100px", // Adjust the position as per your requirement
              right: "20px",
              width: "300px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 100,
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
            // style={{
            //   display: "flex",
            //   justifyContent: "start",
            //   alignItems: "center",
            //   marginTop: "-15px",
            // }}
            >
              <button className="flex justify-center gap-2 items-center w-full" onClick={handleLogout}>
                {/* <img
                  src={LogOut}
                  alt="LogOut Icon"
                  className="w-5"
                  // style={{ width: "30px", height: "30px", marginRight: "20px" }}
                /> */}
                <IoMdLogOut size={26} />
                <p
                  className="font-semibold"
                >
                  Logout
                </p>
              </button>

            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
