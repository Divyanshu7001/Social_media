import React, { useContext, useEffect } from "react";
import { Context } from "../index.js";
import "../style/HomePage.css";
import { useState } from "react";
//import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar.js";
import HomePage1 from "./HomePage1.js";
//import Article from "./Article.js";
import Createpost from "./Createpost.js";
// import rectangle60 from "../assets/img/Rectangle 60.svg";
// import Line7 from "../assets/img/Line7.png";
// import iconlike from "../assets/img/iconlike.png";
// import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
// import openmojishare from "../assets/img/openmojishare.png";
// import circummenukebab from "../assets/img/circummenukebab.png";
import iconamoonbookmarkthin from "../assets/img/iconamoonbookmarkthin.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
import fluentpeople24regular from "../assets/img/fluentpeople24regular.png";
import claritynotificationline from "../assets/img/claritynotificationline.png";
import materialsymbolslightchatoutline from "../assets/img/materialsymbolslightchatoutline.png";

// import Footer from "./Footer.js";

// Constants for class names
//const CREATE_POST_CLASS = 'frame-6';
//const BUTTON_TEXT_CLASS = 'text-wrapper-31';

export const Homepage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  // Declare showPopup state
  const [showPopup, setShowPopup] = useState(false);
  const [homeFeed, setHomeFeed] = useState({});
  const [expanded, setExpanded] = useState(false);

  {
    !isAuthenticated && navigate("/login");
  }
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchHomeFeed = async () => {
      if (user && user.id) {
        try {
          const response = await axios.post(
            "http://92.118.56.227/api/homeFeed",
            { user_id: user.id },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log(response.data.homeFeed);

          setHomeFeed(response.data.homeFeed);
          // console.log("Authentication", isAuthenticated);
          // console.log("User", user);
          // console.log("Feed: ", homeFeed);
        } catch (error) {
          console.error("Error fetching home feed:", error);
        }
      }
    };
    if (user && user.id) fetchHomeFeed();
  }, [user, isAuthenticated]);

  const posts = homeFeed.posts;
  const articles = homeFeed.articles;
  const suggestions = homeFeed.suggestions || [];

  return (
    <div className="HOMEPAGE">
      <div className="div">
        <Navbar />

        {/* {footer section} */}
        {/* <Footer /> */}

        <div className="overlap-group-wrapper">
          <div className="overlap-group-wrapper1">
            <div>
              <HomePage1 posts={posts} articles={articles} />
            </div>
          </div>
        </div>

        <div className="group-18">
          <div className="overlap-4">
            <div className="group-19">
              <p className="text-wrapper-34">
                Join our vibrant community of Information Technology scholars
                and researchers.
              </p>
              <div className="text-wrapper-35">Top Stories</div>
            </div>
            <div className="group-20">
              <p className="text-wrapper-34">
                IEEE Transactions on Computers
                <br />
                <br />
                Journal of the ACM (JACM)
              </p>
              <div className="text-wrapper-35">Top Journals</div>
            </div>
            <div className="group-21">
              <p className="text-wrapper-34">
                Dive into the potential of quantum computing and its
                implications for solving complex problems in record time.
              </p>
              <div className="text-wrapper-35">Top Articles</div>
            </div>

            <div className="group-22 flex flex-col">
              {suggestions.length > 0 ? (
                suggestions
                  .slice(0, expanded ? suggestions.length : 4)
                  .map((suggestion) => (
                    <div key={suggestion.id} className="suggestion-item">
                      <div className="flex">
                        <div className="h-[5vw] w-[5vw]">
                          <img
                            src={
                              suggestion.profile_image || "images/johnpaul.png"
                            }
                            alt="Avatar"
                            className="h-16 w-16 object-cover"
                          />
                        </div>
                        <h2 className="font-semibold text-xl mt-4">
                          {suggestion.name}
                        </h2>
                      </div>
                    </div>
                  ))
              ) : (
                <p>No suggestions available.</p>
              )}
            </div>
            <div className="text-wrapper-37">Suggestions</div>
            <Link
              to="/WhotoFollow"
              class="text-wrapper-37"
              style={{ color: "blue" }}
            >
              Suggestions
            </Link>
            {!expanded && suggestions.length > 4 ? (
              <div
                onClick={() => setExpanded(true)}
                className="text-wrapper-38 cursor-pointer"
                style={{ color: "blue" }}
              >
                View all
              </div>
            ):
            <div
                onClick={() => setExpanded(false)}
                className="text-wrapper-38 cursor-pointer"
                style={{ color: "blue" }}
              >
                View Less
              </div>}
            {/* <Link
              to="/View all"
              class="text-wrapper-38"
              style={{ color: "blue" }}
            >
              View all
            </Link> */}
          </div>
        </div>
        <div>
          {/* Button to trigger popup */}
          <button
            className="create-post-button"
            style={{
              marginLeft: "90px",
              backgroundColor: "blue",
              borderRadius: "5px",
              marginTop: "571px",
              padding: "10px",
              width: "220px",
              color: "white",
              borderColor: "blue",
            }}
            onClick={togglePopup}
          >
            Create Post
          </button>

          {/* Conditionally render the popup */}
          {showPopup && (
            <Createpost
              closePopup={togglePopup}
            /> /* Pass a function to close the popup */
          )}
        </div>

        <div className="group-24">
          <div className="overlap-5">
            <img className="ellipse-2" alt="Ellipse" src={Ellipse4} />
            <div className="text-wrapper-40">John Paul</div>
            <div className="group-25">
              <img
                className="img-3"
                alt="Fluent people"
                src={fluentpeople24regular}
              />
              <div className="text-wrapper-41">My Connections</div>
              <Link to="/connection" class="text-wrapper-41">
                My Connections
              </Link>
            </div>

            <div className="group-26">
              <img
                className="img-3"
                alt="Clarity notification"
                src={claritynotificationline}
              />
              <div className="group-27">
                <div className="text-wrapper-42">Notifications</div>
                <Link to="/Notifications" class="text-wrapper-42">
                  Notifications
                </Link>
              </div>
            </div>
            <div className="group-28">
              <img
                className="img-3"
                alt="Material symbols"
                src={materialsymbolslightchatoutline}
              />
              <div className="group-29">
                <div className="text-wrapper-42">Message</div>
                <Link to="/Message" class="text-wrapper-42">
                  Message
                </Link>
              </div>
            </div>
            <div className="group-30">
              <div className="text-wrapper-41">Saved Items</div>
              <Link to="/Saved" class="text-wrapper-41">
                Saved Items
              </Link>
              <img
                className="img-3"
                alt="Iconamoon bookmark"
                src={iconamoonbookmarkthin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
