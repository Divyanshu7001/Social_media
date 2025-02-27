import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { RiDeleteBin2Line } from "react-icons/ri";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("followers");
  return (
    <div>
      <Navbar />

      <div className="w-full mx-auto flex justify-end">
        <div className="my-[2vw] w-full flex mx-14">
          <div className="w-[30%] border-[2px] border-opacity-85 rounded-xl">
            <div className="flex flex-col items-center gap-[0.5vw] mt-[2vw]">
              <div className="h-[5vw] w-[5vw]">
                <img
                  src="images/johnpaul.png"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="font-semibold text-lg">John Paul</h2>
            </div>

            <div className="w-[40%] flex flex-col justify-center mx-auto items-center space-y-7 my-14 ">
              <div className="w-full flex gap-[1vw] justify-start font-semibold hover:cursor-pointer">
                <img src="./images/connections.png" alt="" />
                <p className="text-[#0000FF] text-lg">My Connections</p>
              </div>

              <div className="w-full flex gap-[1vw] justify-start font-semibold hover:cursor-pointer">
                <img src="./images/chat.png" alt="" />
                <p className="text-black text-lg">Message</p>
              </div>

              <div className="w-full flex gap-[1vw] font-semibold  justify-start hover:cursor-pointer">
                <img src="./images/notifications.png" alt="" />
                <p className="text-[#000] text-lg">Notifications</p>
              </div>

              <div className="w-full flex gap-[1vw] justify-start font-semibold">
                <img src="./images/save.png" alt="" />
                <p className="text-[#000] text-lg">Saved Items</p>
              </div>
            </div>
          </div>

          <div className="h-[20vw] w-[40%]">
            <div className="w-[90%] flex  mx-auto h-[4vw]">
              <div
                className={`${
                  activeTab === "followers" ? "border-b-4" : "border-b-2"
                } w-[50%] flex justify-center items-center border-black cursor-pointer`}
              >
                <p
                  className="text-lg font-semibold"
                  onClick={() => setActiveTab("followers")}
                >
                  1 Followers
                </p>
              </div>
              <div
                className={`${
                  activeTab === "following" ? "border-b-4" : "border-b-2"
                } w-[50%] flex justify-center items-center border-black cursor-pointer`}
              >
                <p
                  className="text-sm font-semibold"
                  onClick={() => setActiveTab("following")}
                >
                  0 Following
                </p>
              </div>
            </div>

            {activeTab === "followers" ? (
              <div className="mx-5 mt-[2vw] flex justify-around items-center">
                <div className="flex gap-6 items-center">
                  <div className="h-[4vw] w-[4vw]">
                    <img
                      src="images/johnpaul.png"
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[#000] text-lg font-semibold">Followers Name</p>
                </div>
                <RiDeleteBin2Line className="text-4xl text-black  rounded-xl p-1" />
              </div>
            ) : (
              <div className="mx-5 mt-[2vw] flex justify-around items-center">
                <div className="flex gap-6 items-center">
                  <div className="h-[4vw] w-[4vw]">
                    <img
                      src="images/johnpaul.png"
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[#000] text-lg font-semibold">Following Name</p>
                </div>
                <RiDeleteBin2Line className="text-4xl text-black  rounded-xl p-1" />
              </div>
            )}
          </div>

          {/* Third Columne */}
          <div className="w-[30%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">
            <div className="w-[86%] mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="opacity-80 font-semibold text-lg">
                  Suggested for You
                </h2>
                <h2 className="opacity-80 text-md">View All</h2>
              </div>

              <div className="mt-[2vw] flex justify-between items-center">
                <div className="flex gap-[0.8vw] items-center">
                  <div className="h-[4vw] w-[4vw]">
                    <img
                      src="images/johnpaul.png"
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[#000] text-lg font-semibold">Name</p>
                </div>

                <p className="text-[#0000FF] text-md font-semibold">Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
