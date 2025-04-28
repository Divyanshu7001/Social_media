import React from "react";
import { MdOutlineMessage, MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ellipse4 from "../assets/img/Ellipse4.png";
import { CgProfile } from "react-icons/cg";

export const LeftSidebar = ({ user_data, togglePopup, showPopup, post }) => {
  //console.log(user_data, "user_data in left sidebar");

  return (
    <div
      className={`${
        showPopup && "z-0"
      } md:block fixed md:top-16 lg:top-24 mb-2 left-0 w-1/5 lg:w-[26vw] xl:w-[22vw] md:w-[32vw] md:ms-5 lg:ms-5 ms-10 h-fit`}
    >
      <div className=" bg-white rounded border-2 h-4/5 hidden md:flex lg:flex flex-col w-full px-8 mt-0.5 md:mt-0.5 lg:mt-3.5  md:px-1 lg:px-8 py-5">
        {/* User Info */}
        <div className="flex  flex-col items-center s">
          {user_data?.profile_img ? (
            <img
              src={user_data?.profile_img}
              alt="User profile"
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <CgProfile className="h-24 w-24 rounded-full object-cover" />
          )}
          <div className="text-xl font-semibold mt-1 text-center">
            {user_data.name || "John Paul"}
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col justify-around h-4/5  mb-2 px-0 md:px-2 md:space-y-2 lg:px-0 xl:space-y-8">
          <div className="flex items-center space-x-2 mt-4">
            <MdOutlinePeopleAlt size={28} />
            {/* <img src={fluentpeople24regular} alt="Fluent People" className="h-6 w-6" /> */}
            <Link to="/connection" className="font-semibold text-blue-600">
              My Connections
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <MdOutlineMessage size={25} />
            {/* <img src={materialsymbolslightchatoutline} alt="Message" className="h-6 w-6" /> */}
            <Link to="/Message" className="font-semibold text-blue-600">
              Message
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <IoMdNotificationsOutline size={28} />
            {/* <img src={claritynotificationline} alt="Notification" className="h-6 w-6" /> */}
            <Link to="/Notifications" className="font-semibold text-blue-600">
              Notifications
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <FaRegBookmark size={22} />
            {/* <img src={iconamoonbookmarkthin} alt="Bookmark" className="h-6 w-6" /> */}
            <Link to="/Saved" className="font-semibold text-blue-600">
              Saved Items
            </Link>
          </div>
        </div>
      </div>

      {/* Create Post Button */}
      {/* hidden md:block lg:block fixed w-1/5 top-2/3 xl:top-2/3 lg:top-[70%] md:w-3/12 md:top-2/3 2xl:top-2/3 md:ms-5 lg:ms-5  xl:ms-10 left-0 ms-10  xl:w-1/5 lg:w-1/4 2xl:w-1/5 */}
      {post && (
        <div className="mt-2 ">
          <button
            onClick={togglePopup}
            className="bg-primary hidden md:block text-white rounded-lg py-2 px-6 hover:bg-blue-700 w-full"
          >
            Create Post
          </button>
        </div>
      )}
    </div>
  );
};
