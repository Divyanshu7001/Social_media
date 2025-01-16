import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faEye,
  faShareAlt,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faBookmark as regularBookmark,
} from "@fortawesome/free-regular-svg-icons";
import Ellipse4 from "../assets/img/Ellipse4.png";
import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
import openmojishare from "../assets/img/openmojishare.png";
import iconamoonbookmarkthin from "../assets/img/iconamoonbookmarkthin.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PostCard = ({ name, location, description, image }) => {
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleView = () => setViews(views + 1);
  const handleLike = () => setLiked(!liked);

  useEffect(() => {
    handleView();
  }, []);

  const backend = JSON.parse(localStorage.getItem("backend"))

  return (
    <div className="py-2 mt-8 border-2 rounded-lg h-1/2">
      {/* head */}
      <div className="flex justify-between items-center px-2 xl:px-2 lg:px-0">
        <div className="flex px-6 py-4 items-center xl:px-6 lg:px-4">
          <img src={Ellipse4} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
          <div className="ml-4">
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{location || "location"}</div>
          </div>
        </div>
        <div className="flex px-6 py-4 items-center xl:px-6 lg:px-4">
          <p className="text-blue-600 text-base mr-4 xl:mr-4 lg:mr-2 ">Follow</p>
          <MoreVertIcon />
        </div>
      </div>
      {/* body */}
      <div className="flex-col ">

        <p className="mt-2 px-9 xl:px-9 lg:px-4 text-gray-700">{description}</p>
        <img src={backend + image} alt={description} className="object-cover object-top mt-2 w-full h-96 me-auto"  />
      </div>
      <div className="flex justify-between mt-3 mb-2 items-center mx-9">
        <div className="flex items-center space-x-2" onClick={handleLike}>
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            className="text-red-600"
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={weuieyesonfilled} alt="Views" className="w-6 h-6" />
          <span>{views} Views</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={openmojishare} alt="Share" className="w-6 h-6" />
          <span>Share</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={iconamoonbookmarkthin} alt="Save" className="w-6 h-6" />
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ title, description, author, image }) => {
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLiked(!liked);
  const handleView = () => setViews(views + 1);
  const handleSave = () => setSaved(!saved);

  useEffect(() => {
    handleView();
  }, []);

  const backend = JSON.parse(localStorage.getItem("backend"))

  return (
    <div className="bg-white shadow-lg  px-4 mb-2  py-2 mt-8 border-2 rounded-lg">
      {/* <a href={backend + image}>
      </a> */}
      <div className="flex justify-between px-3">
        <div className="pt-7">
          <h3 className="text-2xl font-semibold pe-5">{title}</h3>
        </div>
        <div className="flex py-4 items-center">
          <p className="text-blue-600 text-lg mr-4">Follow</p>
          <MoreVertIcon />
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2 px-3">By {author}</div>
      <p className="mt-2 text-gray-500 font-medium border-b-2 pb-4 px-3">{description}</p>
      <div className="flex justify-between mt-2 py-1 px-5">
        <div className="flex items-center space-x-2" onClick={handleLike}>
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            className="text-red-600"
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEye} className="text-gray-600" />
          <span>{views} Views</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faShareAlt} className="text-gray-600" />
          <span>Share</span>
        </div>
        <div className="flex items-center space-x-2" onClick={handleSave}>
          <FontAwesomeIcon
            icon={saved ? solidBookmark : regularBookmark}
            className="text-gray-600"
          />
          <span>{saved ? "Saved" : "Save"}</span>
        </div>
      </div>
    </div>
  );
};

const HomePage1 = ({ posts, articles }) => (
  <>
    {console.log(articles)}
    {articles.length > 0 &&
      articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          author={article.articleUsername}
          image={article.image}
        />
      ))}
    {posts.length > 0 &&
      posts.map((post) => (
        <PostCard
          key={post.id}
          name={post.PostUsername}
          location={post.postUserLocation}
          description={post.title}
          image={post.image}
        />
      ))}
  </>
);

export default HomePage1;

