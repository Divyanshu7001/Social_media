import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { RiDeleteBin2Line } from "react-icons/ri";
import api from "./api";
import { Context } from "../index";
import toast from "react-hot-toast";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  const { user, profileData, isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  !isAuthenticated && navigate("/");

  const [activeTab, setActiveTab] = useState("followers");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [suggestedFollowers, setSuggestedFollowers] = useState([]);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);

  const [isDatafetched, setIsDataFetched] = useState(false);

  const handleSuggestedFollowers = async (newData) => {
    console.log("suggestions Data in api now: ", suggestedFollowers);

    console.log("New Data: ", newData);
    if (suggestedFollowers.length > 0) {
      const updatedSuggestions = [...suggestedFollowers],
        includedNames = [];
      suggestedFollowers.forEach((suggestion) => {
        includedNames.push(suggestion.name);
      });
      newData.forEach((newSuggestion) => {
        if (!includedNames.includes(newSuggestion.name)) {
          updatedSuggestions.push(newSuggestion);
        }
      });
      setSuggestedFollowers(updatedSuggestions);
    } else {
      setSuggestedFollowers(...suggestedFollowers, newData);
    }
  };
  const fetchFollowingData = async () => {
    try {
      await api
        .post(
          "/connection",
          {
            follow_id: user?.id,
            type: "follow",
          },
          {
            headers: {
              withCredentials: true,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("Following Data in response: ", res.data.suggestion);
          setFollowing(res.data.follow);
          handleSuggestedFollowers(
            res.data.suggestion.length > 0 ? res.data.suggestion : []
          );

          setIsDataFetched(true);
        });
    } catch (error) {
      console.log("Error fetching the Following Data: ", error);
    }
  };
  const fetchFollowersData = async () => {
    try {
      await api
        .post(
          "/connection",
          {
            follow_id: user?.id,
            type: "followers",
          },
          {
            headers: {
              withCredentials: true,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setFollowers(res.data.followers);
          handleSuggestedFollowers(
            res.data.suggestion.length > 0 ? res.data.suggestion : []
          );
          setIsDataFetched(true);
        });
    } catch (error) {
      console.log("Error fetching the Followers Data: ", error);
    }
  };
  const handleFollow = async (followId) => {
    console.log("Id to be followed: ", followId);

    try {
      await api
        .post(
          `/follow`,
          {
            logged_id: user.id,
            follow_id: followId,
          },
          {
            headers: {
              withCredentials: true,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
          setIsDataFetched(false);
           filterSuggestions(followId);
        });
    } catch (error) {
      console.log(error);
      toast.error("Error while following User");
    }
  };
  const handleUnfollow = async (unfollowId) => {
    console.log("Id to be Unfollowed: ", unfollowId);

    try {
      await api
        .post(
          `/unfollow`,
          {
            logged_id: user.id,
            follow_id: unfollowId,
          },
          {
            headers: {
              withCredentials: true,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
          setIsDataFetched(false);
         
        });
    } catch (error) {
      console.log(error);
      toast.error("Error while Unfollowing User");
    }
  };

  const filterSuggestions = (followId) => {
    const updatedSuggestions = suggestedFollowers.filter((suggestion) => {
      return suggestion.id !== followId;
    });
    setSuggestedFollowers(updatedSuggestions);
  };
  useEffect(() => {
    fetchFollowingData();
    fetchFollowersData();
  }, [isDatafetched, user]);
  // fetchFollowingData();
  // fetchFollowersData();
  console.log("Followers Data: ", followers);
  console.log("Following Data: ", following);
  console.log("Suggestions Data Global: ", suggestedFollowers);
  console.log("profile Data: ", profileData);

  return (
    <div>
      <Navbar />

      <div className="w-full mx-auto flex justify-end">
        <div className="my-[2vw] w-full flex xss:flex-col xss:space-y-10 lg:space-y-0  lg:flex-row  xss:mx-6 sm:mx-11">
          <div className="xss:w-full lg:w-[30%] border-[2px] border-opacity-85 rounded-xl flex xss:flex-col xs:flex-row lg:flex-col ">
            <div className="flex flex-col mx-auto items-center justify-center gap-[0.5vw] mt-[2vw] xs:ml-auto xs:my-auto lg:mt-[2vw]">
              <div className="xss:w-32 xss:h-auto">
                <img
                  src={`http://175.29.21.101/storage/${user.image}`}
                  alt="Avatar"
                  className="h-40 w-32 object-cover rounded-full"
                />
              </div>
              <h2 className="font-semibold text-xl">{user.name}</h2>
            </div>

            <div className="w-auto lg:w-[43%] flex flex-col mx-auto justify-center items-center space-y-5 md:space-y-9 my-4 md:my-14">
              <div className="w-full flex items-center gap-2 justify-start font-semibold hover:cursor-pointer">
                <VscFeedback className="w-5 h-5 ml-1" />
                <p
                  onClick={() => navigate("/home")}
                  className={`text-lg text-black`}
                >
                  View Homefeed
                </p>
              </div>
              {[
                {
                  icon: "./images/connections.png",
                  text: "My Connections",
                  color: "text-[#0000FF]",
                },
                {
                  icon: "./images/chat.png",
                  text: "Message",
                  color: "text-black",
                },
                {
                  icon: "./images/notifications.png",
                  text: "Notifications",
                  color: "text-black",
                },
                {
                  icon: "./images/save.png",
                  text: "Saved Items",
                  color: "text-black",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-2 justify-start font-semibold hover:cursor-pointer"
                >
                  <img src={item.icon} alt={item.text} />
                  <p className={`text-lg ${item.color}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="xss:h-auto lg:h-[20vw] xss:w-full lg:w-[40%]">
            <div className="w-[90%] flex mx-auto h-[4vw]">
              <div
                className={`${
                  activeTab === "followers" ? "border-b-4" : "border-b-2"
                } w-[50%] flex justify-center items-center border-black cursor-pointer`}
              >
                <p
                  className={`${
                    activeTab === "followers"
                      ? "xss:text-lg lg:text-md"
                      : "xss:text-lg lg:text-sm"
                  } font-semibold xss:mb-6 lg:mb-0 `}
                  onClick={() => setActiveTab("followers")}
                >
                  {followers?.length ? followers.length : 0} Followers
                </p>
              </div>
              <div
                className={`${
                  activeTab === "following" ? "border-b-4" : "border-b-2"
                } w-[50%] flex justify-center items-center border-black cursor-pointer`}
              >
                <p
                  className={`${
                    activeTab === "following"
                      ? "xss:text-lg lg:text-md"
                      : "xss:text-lg lg:text-sm"
                  } font-semibold xss:mb-6 lg:mb-0`}
                  onClick={() => setActiveTab("following")}
                >
                  {following?.length ? following.length : 0} Following
                </p>
              </div>
            </div>

            {activeTab === "followers" ? (
              <div>
                {followers?.length > 0 ? (
                  followers.map((follower) => (
                    <div
                      key={follower.id}
                      className="xss:w-[90%] lg:w-[60%] mx-auto mt-[2vw] flex justify-between items-center"
                    >
                      <div className="flex gap-3 items-center ml-3">
                        <div className="w-20 h-20">
                          {follower.image ? (
                            <img
                              src={`${follower.image}`}
                              alt="Avatar"
                              className="h-full w-full object-cover rounded-full"
                            />
                          ) : (
                            <CgProfile className="w-20 h-20" />
                          )}
                        </div>
                        <p className="text-[#000] justify-start text-xl font-semibold">
                          {follower.name}
                        </p>
                      </div>
                      <RiDeleteBin2Line className="text-4xl text-black  rounded-xl p-1  mr-5 mb-2" />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-lg font-semibold mt-5">
                    No Followers Found
                  </p>
                )}
              </div>
            ) : (
              <div>
                {following?.length > 0 ? (
                  following.map((follow) => (
                    <div
                      key={follow.id}
                      className="xss:w-[90%] lg:w-[60%] mx-auto mt-[2vw] flex justify-between items-center"
                    >
                      <div className="flex gap-3 items-center ml-3">
                        <div className="w-20 h-20">
                          {follow.image ? (
                            <img
                              src={`${follow.image}`}
                              alt="Avatar"
                              className="h-full w-full object-cover rounded-full"
                            />
                          ) : (
                            <CgProfile className="w-20 h-20" />
                          )}
                        </div>
                        <p className="text-[#000] text-xl font-semibold">
                          {follow.name}
                        </p>
                      </div>
                      <RiDeleteBin2Line
                        className="text-4xl  text-black rounded-xl p-1  mr-5 mb-2"
                        onClick={() => handleUnfollow(follow.id)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-lg font-semibold mt-5">
                    Not Following Anyone yet.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Third Column */}
          <div className="xss:w-full lg:w-[30%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">
            <div className="w-[86%] mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="opacity-80 font-semibold text-lg">
                  Suggested for You
                </h2>
                <h2
                  className="opacity-80 text-md cursor-pointer"
                  onClick={() => setShowAllSuggestions(!showAllSuggestions)}
                >
                  {showAllSuggestions ? "Show Less" : "View All"}
                </h2>
              </div>

              {suggestedFollowers.length > 0 ? (
                (showAllSuggestions
                  ? suggestedFollowers
                  : suggestedFollowers.slice(0, 4)
                ).map((follow) => (
                  <div
                    key={follow.id}
                    className="w-auto mx-1 mt-[2vw] flex justify-between items-center"
                  >
                    <div className="flex gap-[0.8vw] items-center">
                      <div className="w-20 h-20">
                        {follow.image ? (
                          <img
                            src={`${follow.image}`}
                            alt="Avatar"
                            className="h-full w-full object-cover rounded-full"
                          />
                        ) : (
                          <CgProfile className="w-12 h-16" />
                        )}
                      </div>
                      <p className="text-[#000] text-xl font-semibold">
                        {follow.name}
                      </p>
                    </div>

                    <p
                      onClick={() => handleFollow(follow.id)}
                      className="text-[#0000FF] text-md font-semibold cursor-pointer"
                    >
                      Follow
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-[#000] text-lg font-semibold mt-5">
                  No Suggestions
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
