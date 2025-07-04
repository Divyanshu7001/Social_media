import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { FaAngleUp, FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";

import api from "@/components/api/api";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Context } from "@/index";

import Articles from "./components/Articles";
import Posts from "./components/Posts";

const OtherProfile = () => {
  const { userId } = useParams();
  const { user } = useContext(Context);
  const [otherProfileData, setOtherProfileData] = useState({});
  const [profile, setprofile] = useState({});
  const [profileCounts, setProfileCounts] = useState({
    followersCount: 0,
    followingCount: 0,
    publicViews: 0,
  });
  const [interests, setInterests] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [articles, setArticles] = useState([]);
  const [posts, setPosts] = useState([]);

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);

  const fetchProfileData = async () => {
    try {
      if (userId) {
        //console.log(user.id, "in fetch call");
        await api
          .post(
            `fetchProfile`,
            {
              user_id: userId,
              follow_id: user.id,
            },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            //console.log("Fetched User Data in Other Profile: ", res.data);
            // console.log(res.data.follower_count);
            // console.log(res.data.following_count);

            setOtherProfileData(res.data.profile_data.user);
            setprofile(res.data);

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
            setPosts(res.data.post_upload == null ? [] : res.data.post_upload);
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

  const handleFollow = async (followId, action) => {
    //console.log("Id to be followed: ", followId);

    try {
      await api
        .post(
          `/${action}`,
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

  //console.log("Other Profile Data: ", otherProfileData);
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
                  <div className="mt-3 space-x-4 lg:ml-6 hidden xss:justify-center xss:items-center sm:flex sm:justify-start lg:hidden">
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
                {user.id !== userId && (
                  <button
                    onClick={() =>
                      handleFollow(
                        userId,
                        profile.am_i_following ? "unfollow" : "follow"
                      )
                    }
                    className="bg-[#0000ff] hover:bg-blue-700 border-blue-600 rounded-md xs:px-8 lg:px-5 xl:px-8 py-2 xss:px-4 text-white font-semibold text-lg"
                  >
                    {/* {console.log(user.id, "", userId)} */}
                    {profile.am_i_following ? "Unfollow" : "Follow"}
                  </button>
                )}

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
                {interests.map((interest, i) => (
                  <button
                    key={i}
                    className="border-gray-400 border rounded-3xl px-8 py-2 text-gray-600 font-semibold text-lg"
                  >
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

          {/* Profile Start */}
          <div className="xss:w-full sm:w-[80%] xss:mx-auto sm:mx-auto lg:mr-[6rem]">
            {/* Bio Start */}
            <div className="border-2 rounded-md my-2">
              <div className="p-4 border-b-2 rounded">
                <p className="text-gray-500 text-xl">Biography</p>
                {/* {otherProfileData?.profile?.skills.flatMap(
                  (skill) => skill.skills
                )} */}
              </div>
              <div className="p-4">
                <p className="py-2">
                  {otherProfileData?.profile?.bio ?? "No bio Avaliable"}
                </p>
              </div>
            </div>
            {/* Bio End */}

            {/* Skill start */}
            <div className="border-2 rounded-md my-4">
              <div className="p-4 border-b-2 rounded">
                <p className="text-gray-500 text-xl">Skills</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {otherProfileData?.profile?.skills.length > 0 ? (
                    otherProfileData?.profile?.skills.flatMap((skill) =>
                      skill.skills.map(
                        (data, index) =>
                          data !== null && (
                            <p
                              key={index}
                              className="px-4 py-1 border-2 rounded-2xl uppercase"
                            >
                              {data}
                            </p>
                          )
                      )
                    )
                  ) : (
                    <p className="px-4 py-1 border-2 rounded-2xl uppercase">
                      No Skills Available
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Skill End */}

            {/* Employee Start */}
            <div className="my-4">
              <div className="p-4 border-2 rounded-md flex items-center justify-between">
                <p className="text-lg font-semibold">Employment</p>
                {btn1 ? (
                  <FaChevronDown
                    onClick={() => setBtn1(!btn1)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => setBtn1(!btn1)}
                    className="cursor-pointer"
                  />
                )}
              </div>

              {otherProfileData?.profile?.employee.length > 0 ? (
                otherProfileData?.profile?.employee.map((item, index) => (
                  <div
                    className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                      btn1 ? "block" : "hidden"
                    }`}
                    key={index}
                  >
                    <p>
                      {item.role} | <span>{item.department}</span>
                    </p>
                    <p>
                      {item.organization} |{" "}
                      {`${item.city}, ${item.region}, ${item.country}`}{" "}
                    </p>
                    <p>{`${item.start_date} - ${item.end_date}`}</p>
                  </div>
                ))
              ) : (
                <div
                  className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                    btn1 ? "block" : "hidden"
                  }`}
                >
                  <p>No Employee Avaliable</p>
                </div>
              )}
            </div>
            {/* Employee End */}

            {/* Education Start */}
            <div className="my-4">
              <div className="p-4 border-2 rounded-md flex items-center justify-between">
                <p className="text-lg font-semibold">Education</p>
                {btn2 ? (
                  <FaChevronDown
                    onClick={() => setBtn2(!btn2)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => setBtn2(!btn2)}
                    className="cursor-pointer"
                  />
                )}
              </div>

              {otherProfileData?.profile?.education.length > 0 ? (
                otherProfileData?.profile?.education.map((item, index) => (
                  <div
                    key={index}
                    className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                      btn2 ? "block" : "hidden"
                    }`}
                  >
                    <p>Degree: {item.degree}</p>
                    <p>
                      Department: <span>{item.department}</span>
                    </p>
                    <p>
                      University Name: {item.organization_name} |{" "}
                      {`${item.city}, ${item.region}, ${item.country}`}{" "}
                    </p>
                    <p>{`${item.start_date} - ${item.end_date}`}</p>
                  </div>
                ))
              ) : (
                <div
                  className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                    btn2 ? "block" : "hidden"
                  }`}
                >
                  <p>No Education Avaliable</p>
                </div>
              )}
            </div>
            {/* Education End */}

            {/* Professional Activity Start */}
            <div className="my-4">
              <div className="p-4 border-2 rounded-md flex items-center justify-between">
                <p className="text-lg font-semibold">Professional Activity</p>
                {btn3 ? (
                  <FaChevronDown
                    onClick={() => setBtn3(!btn3)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => setBtn3(!btn3)}
                    className="cursor-pointer"
                  />
                )}
              </div>

              {otherProfileData?.profile?.professional_activities.length > 0 ? (
                otherProfileData?.profile?.professional_activities.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                        btn3 ? "block" : "hidden"
                      }`}
                    >
                      <p>Organization Name: {item.organization_name}</p>
                      <p>
                        Department: <span>{item.department}</span>
                      </p>
                      <p> {`Location: ${item.city}, ${item.country}`} </p>
                      <p>{`${item.start_date} - ${item.end_date}`}</p>
                    </div>
                  )
                )
              ) : (
                <div
                  className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                    btn3 ? "block" : "hidden"
                  }`}
                >
                  <p>No Professional Activity Avaliable</p>
                </div>
              )}
            </div>
            {/* Professional Activity End */}

            {/* Funding Start */}
            <div className="my-4">
              <div className="p-4 border-2 rounded-md flex items-center justify-between">
                <p className="text-lg font-semibold">Funding</p>
                {btn4 ? (
                  <FaChevronDown
                    onClick={() => setBtn4(!btn4)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => setBtn4(!btn4)}
                    className="cursor-pointer"
                  />
                )}
              </div>

              {otherProfileData?.profile?.funding_details.length > 0 ? (
                otherProfileData?.profile?.funding_details.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                        btn4 ? "block" : "hidden"
                      }`}
                    >
                      <p>
                        Funding Organization: {item.funding_agency_name} |{" "}
                        <span>Funding Type: {item.funding_type}</span>
                      </p>
                      <p> Project Name: {item.title}</p>
                      <p>Project Link: {item.project_link}</p>
                      <p>{`${item.start_date} - ${item.end_date}`}</p>
                      <p>Amount: ${item.total_funding_amt}</p>
                    </div>
                  )
                )
              ) : (
                <div
                  className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                    btn4 ? "block" : "hidden"
                  }`}
                >
                  <p>No Funding Details Avaliable</p>
                </div>
              )}
            </div>
            {/* Funding End */}

            {/* Works Start */}
            <div className="my-4">
              <div className="p-4 border-2 rounded-md flex items-center justify-between">
                <p className="text-lg font-semibold">Works</p>
                {btn5 ? (
                  <FaChevronDown
                    onClick={() => setBtn5(!btn5)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => setBtn5(!btn5)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {otherProfileData?.profile?.works.length > 0 ? (
                otherProfileData?.profile?.works.map((item, index) => (
                  <div
                    key={index}
                    className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                      btn5 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      {" "}
                      {item.work_title} | {item.publication_date}
                    </p>
                    <p> Work Type: {item.work_type}</p>
                    <p>Journal Title: {item.journal_title}</p>
                    <p>{item.link}</p>
                  </div>
                ))
              ) : (
                <div
                  className={`py-5 border-[1px] my-4 mx-5 leading-10 px-8 ${
                    btn5 ? "block" : "hidden"
                  }`}
                >
                  <p>No Works Avaliable</p>
                </div>
              )}
            </div>
            {/* Works End */}
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-10 lg:ml-10">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              {otherProfileData?.name || "John Paul"} Uploads
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
          {activeTab === "All" &&
            articles.length === 0 &&
            posts.length === 0 && <p>No Article or Post Uploads yet</p>}
          {(activeTab === "All" && articles.length > 0) ||
          activeTab === "Articles" ? (
            <Articles
              articles={articles}
              setArticles={setArticles}
              setPosts={setPosts}
              userId={userId}
            />
          ) : null}

          {(activeTab === "All" && posts.length > 0) ||
          activeTab === "Posts" ? (
            <Posts
              posts={posts}
              activeTab={activeTab}
              setPosts={setPosts}
              setArticles={setArticles}
              userId={userId}
              otherProfileData={otherProfileData}
            />
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OtherProfile;
