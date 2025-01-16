import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar.js";
import HomePage1 from "./HomePage1.js";
import Createpost from "./Createpost.js";
import api from "./api.js";
import { Link } from "react-router-dom";
import iconamoonbookmarkthin from "../assets/img/iconamoonbookmarkthin.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
import fluentpeople24regular from "../assets/img/fluentpeople24regular.png";
import claritynotificationline from "../assets/img/claritynotificationline.png";
import materialsymbolslightchatoutline from "../assets/img/materialsymbolslightchatoutline.png";

// Main Component
export const Homepage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);

  // Declare state
  const [showPopup, setShowPopup] = useState(false);
  const [homeFeed, setHomeFeed] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [userList, setUserList] = useState([]);

  // Redirect if not authenticated
  if (!isAuthenticated) navigate("/login");

  // Toggle popup state
  const togglePopup = () => setShowPopup(!showPopup);

  // Fetch Home Feed
  useEffect(() => {
    const fetchHomeFeed = async () => {
      if (user && user.id) {
        try {
          const response = await api.post("homeFeed", { user_id: user.id }, { withCredentials: true, headers: { "Content-Type": "application/json" } });
          setHomeFeed(response.data.homeFeed);
          setUserList(response.data.userDetails);
        } catch (error) {
          console.error("Error fetching home feed:", error);
        }
      }
    };
    if (user && user.id) fetchHomeFeed();
  }, [user, isAuthenticated]);

  const posts = homeFeed.posts || [];
  const articles = homeFeed.articles || [];
  const suggestions = homeFeed.suggestions || [];
  const user_data = userList[0] || [];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-white">

        {/* Sidebar */}
        <div className="flex flex-col fixed top-24 my-1 left-0 w-1/5 xl:w-1/5 lg:w-1/4 md:w-[200px]  md:ms-5 lg:ms-5 xl:ms-10  py-5 rounded border-2 ms-10 px-8 h-1/2 bg-white">
          {/* User Info */}
          <div className="flex  flex-col items-center s">
            <img src={Ellipse4} alt="Ellipse" className="h-16 w-16 rounded-full object-cover" />
            <div className="text-xl font-semibold mt-1 text-center">{user_data.name || "John Paul"}</div>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col justify-around h-full mt-5 mb-2">
            <div className="flex items-center space-x-2">
              <img src={fluentpeople24regular} alt="Fluent People" className="h-6 w-6" />
              <Link to="/connection" className="font-semibold text-blue-600">My Connections</Link>
            </div>

            <div className="flex items-center space-x-2">
              <img src={claritynotificationline} alt="Notification" className="h-6 w-6" />
              <Link to="/Notifications" className="font-semibold text-blue-600">Notifications</Link>
            </div>

            <div className="flex items-center space-x-2">
              <img src={materialsymbolslightchatoutline} alt="Message" className="h-6 w-6" />
              <Link to="/Message" className="font-semibold text-blue-600">Message</Link>
            </div>

            <div className="flex items-center space-x-2">
              <img src={iconamoonbookmarkthin} alt="Bookmark" className="h-6 w-6" />
              <Link to="/Saved" className="font-semibold text-blue-600">Saved Items</Link>
            </div>
          </div>
        </div>

        {/* Create Post Button */}
        <div className="fixed w-1/5 top-[480px] xl:top-[500px] lg:top-[450px] md:w-[220px] md:top-[430px] md:ms-5 lg:ms-5  xl:ms-10 left-0 ms-10  xl:w-1/5 lg:w-1/4  ">
          <button
            onClick={togglePopup}
            className="bg-primary text-white rounded-lg py-2 px-6 hover:bg-blue-700 w-full"
          >
            Create Post
          </button>

          {/* Popup for Create Post */}
          {showPopup && <Createpost closePopup={togglePopup} />}
        </div>

        {/* Main Content Area */}
        <div className="fixed left-0 top-15 h-8 w-full bg-white "></div>
        <div className="flex w-11/12 xl:w-11/12 lg:w-full ml-96 xl:ml-96 xl:mr-96 lg:ml-80 lg:mr-80 md:w-2/5 md:ml-60">
          <div className="flex flex-col mx-auto">
            {/* Main Content Components Here */}
            <HomePage1 posts={posts} articles={articles} />
          </div>

          <div className="flex flex-col fixed top-24 right-0 w-1/5  xl:w-1/5 lg:w-1/4 md:w-[210px]  md:me-5 lg:me-5 xl:me-10  py-3 rounded border-2 me-10 px-5 h-[550px]  mb-10 bg-white">
            <div className="space-y-1">
              <div className="flex-col justify-between items-center">
                <div className="font-bold text-lg">Top Stories</div>
                <p className="text-sm text-gray-600">Join our vibrant community of Information Technology scholars and researchers.</p>
              </div>
              <div className="flex-col justify-between items-center">
                <div className="font-bold text-lg">Top Journals</div>
                <p className="text-sm text-gray-600">
                  IEEE Transactions on Computers
                  <br />
                  Journal of the ACM (JACM)
                </p>
              </div>
              <div className="flex-col justify-between items-center">
                <div className="font-bold text-lg">Top Articles</div>
                <p className="text-sm text-gray-600">
                  Dive into the potential of quantum computing and its implications for solving complex problems in record time.
                </p>
              </div>

              {/* Suggestions */}
              <div className="flex justify-between">
                <Link to="/WhotoFollow" className="text-gray-600 font-bold">Suggestions</Link>
                {!expanded && suggestions.length > 4 ? (
                  <button onClick={() => setExpanded(true)} className="text-gray-600 hover:underline font-bold">View all</button>
                ) : (
                  <button onClick={() => setExpanded(false)} className="text-gray-600 hover:underline font-bold">View Less</button>
                )}
              </div>
              <div className="space-y-3 overflow-y-auto h-[270px] xl:h-[260px]">
                {suggestions.length > 0 ? (
                  suggestions.slice(0, expanded ? suggestions.length : 4).map((suggestion) => (
                    <div key={suggestion.id} className="flex items-center space-x-2">
                      <img src={suggestion.profile_image || "images/johnpaul.png"} alt="Avatar" className="h-12 w-12 rounded-full object-cover" />
                      <h2 className="font-semibold text-base">{suggestion.name}</h2>
                    </div>
                  ))
                ) : (
                  <p>No suggestions available.</p>
                )}
              </div>

            </div>
          </div>



        </div>

        {/* Suggestions Sidebar */}

      </div>

    </>
  );
};

export default Homepage;

