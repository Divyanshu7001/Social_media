import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import HomePage1 from "./HomePage1.js";
import api from "./api.js";
import { Link } from "react-router-dom";
import Ellipse4 from "../assets/img/Ellipse4.png";
import Createpost from "./Createpost.js";
import { ReactComponent as Photo } from "../assets/svg/photo.svg";
import { ReactComponent as Article } from "../assets/svg/notes.svg";
import { LeftSidebar } from "./LeftSidebar.js";
import { HomepageSuggestionsbar } from "./Suggestionsbar.js";


// Main Component
export const Homepage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useContext(Context);

  // Declare state
  const [showPopup, setShowPopup] = useState(false);
  const [homeFeed, setHomeFeed] = useState({});

  const [userList, setUserList] = useState([]);
  const [dataFetch, setDataFetch] = useState(false);

  // Toggle popup state
  const togglePopup = () => setShowPopup(!showPopup);
  console.log(userList);
  
  // Fetch Home Feed
  useEffect(() => {
    const fetchHomeFeed = async () => {
      if (user && user.id) {
        console.log("homeFeed");
        try {
          const response = await api.post(
            "homeFeed",
            { user_id: user.id },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          );

          setHomeFeed(response.data.homeFeed);
          setUserList(response.data.userDetails);
          setDataFetch(false);
        } catch (error) {
          console.error("Error fetching home feed:", error);
        }
      }
    };
    if (user && user.id) fetchHomeFeed();
  }, [user, isAuthenticated, dataFetch]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const posts = homeFeed.posts || [];
  const articles = homeFeed.articles || [];
  const suggestions = homeFeed.suggestions || [];
  const user_data = userList[0] || [];

  console.log("Suggestions:", suggestions);

  return (
    <>
      <Navbar />
      {showPopup && <Createpost closePopup={togglePopup} />}
      <div className={`${showPopup && "z-0"} min-h-screen bg-white`}>
        {/* Popup for Create Post */}
        <div className="flex flex-col overflow-y-scroll">
          <LeftSidebar
            user_data={user_data}
            togglePopup={togglePopup}
            showPopup={showPopup}
            post={true}
          />
          <HomepageSuggestionsbar
            showPopup={showPopup}
            suggestions={suggestions}
          />
        </div>
        {/* Main Content Area */}{" "}
        <div className="flex flex-col mx-auto md:ml-auto md:mr-10 lg:mx-auto md:mx-0 w-full px-5 md:px-0 xl:w-1/2 lg:w-2/5 md:w-3/5 xl:mt-9 md:mt-9 lg:mt-9 xs:mt-0">
          {/* mobile upload and profile */}
          <div className="border-2 rounded-md mb-10 md:hidden">
            {/* mobile profile */}
            <div className="px-2 my-2 flex gap-2">
              <img
                src={`http://175.29.21.101/storage/${user.image}` || Ellipse4}
                alt="Profile"
                className="w-20 h-16 rounded-full object-cover"
              />
              <input
                type="text"
                placeholder="search"
                className="w-full  border-2 border-gray-500 rounded-full px-7 text-lg outline-none  placeholder-black"
              />
            </div>
            {/* mobile upload */}
            <div className="flex justify-between items-center p-4">
              <button
                className="flex items-center text-gray-500 font-medium px-0 md:px-5 cursor-pointer"
                onClick={togglePopup}
              >
                <Photo width={40} height={30} /> Create Post{" "}
              </button>
              <button
                className="flex items-center text-gray-500 font-medium px-0 md:px-5"
                onClick={() => navigate("/Upload")}
              >
                <Article width={40} height={30} /> Upload
              </button>
            </div>
          </div>
          {/* Main Content Components Here */}
          <HomePage1
            posts={posts}
            articles={articles}
            dataFetch={setDataFetch}
          />
        </div>
        {/* Suggestions Sidebar */}
      </div>
    </>
  );
};

export default Homepage;
