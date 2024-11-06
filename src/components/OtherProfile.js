import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHeart } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const OtherProfile = () => {
  const [activeTab, setActiveTab] = useState("All");
  const interests = [
    "Papers",
    "Biology",
    "Books",
    "Philosophy",
    "Biology",
    "History",
    "Dark",
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto grid grid-cols-2 my-10">
        <div className="col-span-1 flex flex-col space-y-12 border-r border-gray-400">
          <div className=" border-gray-200 pb-4">
            <div className="flex items-center space-x-8 ml-4">
              {/* Profile Image */}
              <div className="w-24 h-24">
                <img
                  src="images/johnpaul.png"
                  alt="User profile"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              {/* User Info */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-600 mb-3">
                  John Paul
                </h2>
                <p className="text-lg text-gray-500">
                  University of california , department, Position
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-items-start items-start">
            {/* Left Column: Stats */}
            <div className="flex flex-col space-y-4 ml-6">
              <div className="flex justify-between gap-20">
                <p className="text-xl font-semibold font-sans text-gray-700">
                  Followers
                </p>
                <p className="text-xl font-semibold font-sans text-gray-700">
                  0
                </p>
              </div>
              <div className="flex justify-between gap-20">
                <p className="text-xl font-semibold font-sans text-gray-700">
                  Following
                </p>
                <p className="text-xl font-semibold font-sans text-gray-700">
                  0
                </p>
              </div>
              <div className="flex justify-between gap-20">
                <p className="text-xl font-semibold font-sans text-gray-700">
                  Public Views
                </p>
                <p className="text-xl font-semibold font-sans text-gray-700">
                  0
                </p>
              </div>
              <div className="flex justify-between gap-20">
                <p className="text-lg font-semibold font-sans text-gray-700">
                  Mentions
                </p>
                <p className="text-lg font-semibold font-sans text-gray-700">
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
            <div className="flex space-x-4 mr-6">
              <button className="bg-blue-600 hover:bg-blue-700 border-blue-600 rounded-md px-10 py-2 text-white font-semibold text-lg">
                Follow
              </button>
              <button className="border border-blue-600 hover:bg-blue-100 rounded-md px-10 py-2 text-blue-600 font-semibold text-lg">
                Message
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 ml-6 mb-6">
              Interests
            </h1>
            <div className="grid grid-cols-4 gap-6 ml-6 mr-8">
              {interests.map((interest) => (
                <button
                  className="border-gray-400 border rounded-3xl px-8 py-2 text-gray-600 font-semibold text-lg"
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-10 ml-4">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">My Uploads</h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("All")}
                className={`${
                  activeTab === "All"
                    ? "bg-blue-600 text-white"
                    : "border border-blue-600 text-blue-600"
                } rounded-3xl px-8 py-2 font-bold text-lg`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("Papers")}
                className={`${
                  activeTab === "Papers"
                    ? "bg-blue-600 text-white"
                    : "border border-blue-600 text-blue-600"
                } rounded-3xl px-8 py-2 font-bold text-lg`}
              >
                Papers
              </button>
              <button
                onClick={() => setActiveTab("Books")}
                className={`${
                  activeTab === "Books"
                    ? "bg-blue-600 text-white"
                    : "border border-blue-600 text-blue-600"
                } rounded-3xl px-8 py-2 font-bold text-lg`}
              >
                Books
              </button>
            </div>
          </div>

          {/* Conditionally render content based on activeTab */}
          {activeTab === "All" || activeTab === "Papers" ? (
            <div className="papers flex flex-col space-y-4">
              {/* Paper Item */}
              <div className="flex flex-col max-w-2xl h-auto px-4 py-2 border-2 rounded-lg">
                <div className="flex space-x-2 border-b-2 border-gray-200">
                  <div className="w-1/5 h-4/5">
                    <img
                      src="/book.jpg"
                      alt="Notebook"
                      className="object-cover w-5/6 h-auto pt-2"
                    />
                  </div>
                  <div className="w-3/4">
                    <h2 className="text-lg font-bold ">
                      The Future of Quantum Computing: Transforming IT
                      Landscapes
                    </h2>
                    <p className="text-gray-600 font-thin mb-1">By John</p>
                    <p className="text-gray-600 font-medium mb-3">
                      Dive into the potential of quantum computing and its
                      implications for solving complex problems in record time.
                    </p>
                  </div>
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
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "All" || activeTab === "Books" ? (
            <div className="books flex flex-col space-y-4">
              {/* Book Item */}
              <div className="flex flex-col max-w-2xl h-auto px-4 py-4 border rounded-lg shadow-sm bg-white">
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
