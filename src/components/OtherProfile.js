import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
import openmojishare from "../assets/img/openmojishare.png";
import { FaHeart } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { useParams } from "react-router-dom";
import api from "./api";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { Context } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OtherProfile = () => {
  const { userId } = useParams();
  const { user } = useContext(Context);
  const [otherProfileData, setOtherProfileData] = useState({});
  const [profileCounts, setProfileCounts] = useState({
    followersCount: 0,
    followingCount: 0,
    publicViews: 0,
  });
  const [interests, setInterests] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [articles, setArticles] = useState([]);
  const [posts, setPosts] = useState([]);
  // const interests = [
  //   "Papers",
  //   "Biology",
  //   "Books",
  //   "Philosophy",
  //   "Biology",
  //   "History",
  //   "Dark",
  // ];
  const fetchProfileData = async () => {
    try {
      if (userId) {
        //console.log(user.id, "in fetch call");
        await api
          .post(
            `fetchProfile`,
            {
              user_id: userId,
            },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            // console.log("Fetched User Data: ", res.data);
            // console.log(res.data.follower_count);
            // console.log(res.data.following_count);

            setOtherProfileData(res.data.profile_data.user);

            setProfileCounts({
              followersCount:
                res.data.follower_count === null ? 0 : res.data.follower_count,
              followingCount:
                res.data.following_count === null
                  ? 0
                  : res.data.following_count,
              publicViews:
                res.data.public_views === null ? 0 : res.data.public_views,
            });
            setInterests(res.data.interests == null ? [] : res.data.interests);
            setArticles(
              res.data.article_upload == null ? [] : res.data.article_upload
            );
          });
      } else {
        console.log("User is not defined yet");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [userId]);

  const handleFollow = async (followId) => {
    //console.log("Id to be followed: ", followId);

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
          fetchProfileData();
        });
    } catch (error) {
      console.log(error);
      toast.error("Error while following User");
    }
  };

  // console.log("Profile Data: ", otherProfileData);
  // console.log("Followers Count: ", profileCounts.followersCount);
  // console.log("Following Count: ", profileCounts.followingCount);

  return (
    <div>
      <Navbar />
      <div className="w-auto xss:mx-4 sm:mx-10  xss:flex xss:flex-col lg:grid lg:grid-cols-2 my-10">
        <div className="col-span-1 lg:border-r border-gray-400 lg:space-y-10 overflow-hidden">
          <div className="flex flex-col xss:space-y-5 sm:space-y-0 md:space-y-0 lg:space-y-10 sm:flex-row sm:items-center sm:justify-around lg:flex-col lg:items-start">
            <div className="border-gray-200 pb-4">
              <div className="flex md:-ml-[3vw]  items-center xss:justify-center lg:justify-normal space-x-8 lg:ml-5">
                {/* Profile Image */}
                <div className="w-24 h-24">
                  {otherProfileData?.image ? (
                    <img
                      src={otherProfileData?.image}
                      alt="User profile"
                      className="rounded-full object-cover w-full h-full"
                    />
                  ) : (
                    <CgProfile className="w-24 h-24" />
                  )}
                </div>
                {/* User Info */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-600 mb-3">
                    {otherProfileData?.name || "John Paul"}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {otherProfileData?.profile?.bio || "No Biography Available"}
                  </p>
                  <p className="text-lg text-gray-500">
                    {otherProfileData?.country}
                  </p>
                  <div className="mt-3 space-x-4 lg:ml-6 hidden xss:justify-center xss:items-center sm:flex lg:hidden">
                    <button
                      onClick={() => handleFollow(userId)}
                      className="bg-[#0000ff] hover:bg-blue-700 border-blue-600 rounded-md px-10 py-2 sm:px-4 text-white font-semibold text-lg"
                    >
                      Follow
                    </button>
                    <button className="border border-[#0000ff] hover:bg-blue-100 rounded-md px-10 py-2 sm:px-3 text-[#0000ff] font-semibold text-lg">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 xss:flex xss:flex-col lg:gap-2 xl:gap-6  lg:items-start ">
              {/* Left Column: Stats */}
              <div className="flex flex-col space-y-3 lg:ml-6 xss:mx-[2vw] xs:mx-[3vw] sm:mx-0">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    Followers
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    {profileCounts.followersCount}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    Following
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    {profileCounts.followingCount}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    Public Views
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    {profileCounts.publicViews}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    Mentions
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    0
                  </p>
                </div>
                <div className="flex justify-between gap-20">
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    Co-Authors
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-700">
                    0
                  </p>
                </div>
              </div>

              {/* Right Column: Buttons */}
              <div className="space-x-4 lg:ml-6 flex xss:justify-center xss:items-center sm:hidden lg:flex">
                <button
                  onClick={() => handleFollow(userId)}
                  className="bg-[#0000ff] hover:bg-blue-700 border-blue-600 rounded-md xs:px-8 lg:px-5 xl:px-8 py-2 xss:px-4 text-white font-semibold text-lg"
                >
                  Follow
                </button>
                <button className="border border-[#0000ff] hover:bg-blue-100 rounded-md xs:px-7 lg:px-4 xl:px-7 py-2 xss:px-4 text-[#0000ff] font-semibold text-lg">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div className="my-3">
            <h1 className="text-2xl font-semibold text-gray-800 lg:ml-6 mb-2">
              Interests
            </h1>
            {interests.length > 0 ? (
              <div className="grid grid-cols-4 gap-6 ml-6 mr-8 w-full">
                {interests.map((interest) => (
                  <button className="border-gray-400 border rounded-3xl px-8 py-2 text-gray-600 font-semibold text-lg">
                    {interest}
                  </button>
                ))}
              </div>
            ) : (
              <h3 className="font-semibold text-xl text-center mb-2">
                No interests Found
              </h3>
            )}
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-10 lg:ml-10">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              {otherProfileData?.name || "John Paul"}'s Uploads
            </h1>
            <div className="flex xss:gap-2 sm:gap-6">
              <button
                onClick={() => setActiveTab("All")}
                className={`${
                  activeTab === "All"
                    ? "bg-[#0000ff] text-white"
                    : "border border-[#0000ff] text-[#0000ff]"
                } rounded-3xl xss:px-5 px-8 py-2 font-bold xss:text-md text-lg`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("Articles")}
                className={`${
                  activeTab === "Articles"
                    ? "bg-[#0000ff] text-white"
                    : "border border-[#0000ff] text-[#0000ff]"
                } rounded-3xl xss:px-5 px-8 py-2 font-bold xss:text-md text-lg`}
              >
                Articles
              </button>
              <button
                onClick={() => setActiveTab("Posts")}
                className={`${
                  activeTab === "Posts"
                    ? "bg-[#0000ff] text-white"
                    : "border border-[#0000ff] text-[#0000ff]"
                } rounded-3xl xss:px-5 px-8 py-2 font-bold xss:text-md text-lg`}
              >
                Posts
              </button>
            </div>
          </div>

          {/* Conditionally render content based on activeTab */}
          {activeTab === "All" || activeTab === "Articles" ? (
            <>
              {articles && articles.length > 0 ? (
                articles.map((post, i) => (
                  <div
                    key={i}
                    className="sm:p-3 xss:p-3 border-2 border-gray-300 rounded-lg mb-2"
                  >
                    {/* Content for Saved Files */}
                    <div className="flex sm:space-x-3 md:space-x-3 xss:space-x-2 mx-auto xs:border-b-2 border-gray-400 border-opacity-35">
                      {/* <div className="xss:w-auto xs:w-3/6 h-auto md:w-auto">
                                            <img
                                              src="./book.jpg"
                                              alt="Notebook"
                                              className="  w-full xss:h-auto xs:h-[90%] md:h-auto md:w-auto"
                                            />
                                          </div> */}
                      <div className="flex flex-col space-y-1">
                        <h4 className="sm:text-xl xss:text-md xss:font-bold sm:font-bold">
                          {post.paper_title}
                        </h4>
                        <p className="sm:text-lg xss:text-md text-gray-600">
                          By {post.authors}
                        </p>
                        <p className="xs:block sm:text-lg text-gray-600">
                          Publication Name: {post.publication_name}
                        </p>
                        <p className="xs:block sm:text-lg text-gray-600">
                          Research Interest: {post.research_interest} | year:{" "}
                          {post.year}
                        </p>
                      </div>
                    </div>
                    <p className="xss:block xs:hidden xss:text-sm sm:text-lg xss:pb-1 text-gray-600 border-b-2 border-gray-300">
                      {post.abstract}
                    </p>
                    <div className="flex justify-between my-1 items-center sm:mx-9">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon
                          icon={solidHeart}
                          className="text-red-600 sm:text-xl xss:text-lg"
                        />
                        <span className="sm:text-lg xss:text-base">
                          1 likes
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src={weuieyesonfilled}
                          alt="Views"
                          className="sm:w-7 sm:h-7 xss:w-5 xss:h-5"
                        />
                        <span className="text-lg xss:text-base">2 Views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src={openmojishare}
                          alt="Share"
                          className="sm:w-7 sm:h-7 xss:h-6 xss:w-6"
                        />
                        <span className="text-lg xss:text-base">Share</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CiBookmark className="h-7 w-7 text-gray-400" />
                        <span className="text-lg xss:text-base">Save</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Article Uploads yet</p>
              )}
            </>
          ) : null}

          {activeTab === "All" || activeTab === "Posts" ? (
            <div className="books flex flex-col space-y-4">
              {/* Book Item */}
              <div className="flex flex-col w-auto h-auto px-4 py-4 border rounded-lg shadow-sm bg-white mr-4">
                <div className="flex items-center justify-between space-x-4 border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-4 ml-4">
                    <div className="w-16 h-16">
                      <img
                        src="images/johnpaul.png"
                        alt="User profile"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-600 mb-1">
                        John
                      </h2>
                      <p className="text-lg text-gray-500">
                        Chennai, Tamilnadu
                      </p>
                    </div>
                  </div>
                  <PiDotsThreeOutlineVertical className="h-8 w-8 mr-6" />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-xl text-gray-500 font-medium mb-2">
                    Join our vibrant community of Information Technology
                    scholars and researchers.
                  </p>
                  <img
                    src="/book.jpg"
                    alt="Notebook with Key"
                    className="w-full object-cover max-h-80 my-2"
                  />
                </div>
                <div className="flex mt-2 mx-6 justify-between text-gray-700">
                  <div className="flex">
                    <FaHeart className="h-6 w-6 mr-1 text-red-500" />
                    <p className="font-sans text-lg font-semibold text-gray-400">
                      1 like
                    </p>
                  </div>
                  <div className="flex">
                    <IoMdEye className="h-7 w-7 mr-1 text-gray-400" />
                    <p className="font-sans text-lg font-semibold text-gray-400">
                      2 Views
                    </p>
                  </div>
                  <div className="flex">
                    <CiShare2 className="h-7 w-7 mr-1 text-gray-400" />
                    <p className="font-sans text-lg font-semibold text-gray-400">
                      Share
                    </p>
                  </div>
                  <div className="flex">
                    <CiBookmark className="h-7 w-7 mr-1 text-gray-400" />
                    <p className="font-sans text-lg font-semibold text-gray-400">
                      Save
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OtherProfile;
