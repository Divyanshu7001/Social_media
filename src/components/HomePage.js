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

// Main Component
export const Homepage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useContext(Context);

  // Declare state
  const [showPopup, setShowPopup] = useState(false);
  const [homeFeed, setHomeFeed] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [userList, setUserList] = useState([]);
  const [dataFetch, setDataFetch] = useState(false);

  // Toggle popup state
  const togglePopup = () => setShowPopup(!showPopup);

  // Fetch Home Feed
  useEffect(() => {
    const fetchHomeFeed = async () => {
      if (user && user.id) {
        console.log('homeFeed');
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

  return (
    <>
      <Navbar />
      {showPopup && <Createpost closePopup={togglePopup} />}
      <div className={`${showPopup && "z-0"} min-h-screen bg-white`}>
        {/* Popup for Create Post */}
        <LeftSidebar
          user_data={user_data}
          togglePopup={togglePopup}
          showPopup={showPopup}
          post={true}
        />
        {/* Main Content Area */}\{" "}
        <div className="flex flex-col mx-auto w-full px-5 md:px-0 xl:w-1/2 lg:w-2/5 md:w-2/5 mt-9 md:mt-9 lg:mt-4 xs:mt-0">
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
          <HomePage1 posts={posts} articles={articles} dataFetch={setDataFetch} />
        </div>
        {/* Suggestions Sidebar */}
        <>
          <div
            className={`fixed top-24 right-0 hidden mt-0.5 md:mt-0.5 lg:mt-3.5 w-1/5 md:flex flex-col lg:flex  xl:w-1/5 lg:w-1/4 h-fit md:w-3/12 xl:h-fit lg:h-fit md:h-3/4 md:me-5 lg:me-5 xl:me-10  py-3 rounded border-2 ${
              showPopup ? "border-gray-500" : "border-gray-300"
            }  me-10 px-4 md:px-4 lg:px-5 mb-10 `}
          >
            <div className="space-y-4 xl:my-3">
              <div className="flex-col justify-between items-center">
                <div className="home-suggestion-title">Top Stories</div>
                <p className="text-sm text-gray-600">
                  Join our vibrant community of Information Technology scholars
                  and researchers.
                </p>
              </div>
              <div className="flex-col justify-between items-center">
                <div className="home-suggestion-title">Top Journals</div>
                <p className="text-sm text-gray-600">
                  IEEE Transactions on Computers
                  <br />
                  Journal of the ACM (JACM)
                </p>
              </div>
              <div className="flex-col justify-between items-center">
                <div className="home-suggestion-title">Top Articles</div>
                <p className="text-sm text-gray-600">
                  Dive into the potential of quantum computing and its
                  implications for solving complex problems in record time.
                </p>
              </div>

              {/* Suggestions */}
              <div className="flex justify-between">
                <Link
                  to="/WhotoFollow"
                  className="text-gray-600 font-bold text-sm md:text-sm lg:text-base"
                >
                  Suggestions
                </Link>
                {!expanded && suggestions.length > 4 ? (
                  <button
                    onClick={() => setExpanded(true)}
                    className="text-gray-600 hover:underline font-bold text-sm md:text-sm lg:text-base"
                  >
                    View all
                  </button>
                ) : (
                  <button
                    onClick={() => setExpanded(false)}
                    className="text-gray-600 hover:underline font-bold text-sm md:text-sm lg:text-base"
                  >
                    View Less
                  </button>
                )}
              </div>
              <div className="space-y-3 overflow-y-auto h-fit xl:h-fit lg:h-[120px] md:h-[60px] py-1 lg:py-2 xl:py-0">
                {suggestions.length > 0 ? (
                  suggestions
                    .slice(0, expanded ? suggestions.length : 4)
                    .map((suggestion) => (
                      <div
                        key={suggestion.userId}
                        className="flex items-center space-x-2"
                      >
                        <img
                          src={suggestion.profile_img || "images/johnpaul.png"}
                          alt="Avatar"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <h2 className="font-semibold text-base">
                          {suggestion.name}
                        </h2>
                      </div>
                    ))
                ) : (
                  <p>No suggestions available.</p>
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Homepage;
