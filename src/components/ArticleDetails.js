import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import api from "./api";
import { FiShare2 } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faShareAlt,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faBookmark as regularBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { PiEyeFill, PiFilesDuotone } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { Context } from "../index";
import { CgProfile } from "react-icons/cg";

const ArticleDetails = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  !isAuthenticated && navigate("/");

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.post(
          "fetchArticle",
          {
            id: id,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setArticle(response.data.article);
        console.log(response.data.article);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticle();
  }, []);

  console.log(article, "article");

  const downloadpdf = async () => {
    try {
      const response = await api.post(
        "downloadArticle",
        {
          id: id,
          user_id: article.length > 0 && article[0].user.id,
        },
        {
          withCredentials: true,
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const blob = await response.data; // Convert the response to a Blob
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
      // const url = response.data.url;
      // const a = document.createElement('a');
      // a.href = url;
      // console.log(a)
      // // a.download = `${article.length > 0 && article[0].paper_title}.pdf`;
      // a.click();
      // window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-full px-5 justify-between">
        {article.length > 0 ? (
          article.map((art, index) => (
            <>
              <div
                className="mt-10 w-full h-screen flex xss:flex-col lg:flex-row"
                key={index}
              >
                <div className="flex-col xss:w-full lg:w-3/5 lg:border-r-4 px-4 ">
                  <h1 className="text-3xl">{art.paper_title}</h1>
                  <div className="flex mt-5 justify-between">
                    <div className="flex items-center">
                      {art.user.image ? (
                        <img
                          src={art.user.image}
                          alt="User"
                          className="w-16 h-16 rounded-full object-cover object-top"
                        />
                      ) : (
                        <CgProfile className="w-16 h-16" />
                      )}

                      <div className="ml-5">
                        <h1 className="text-lg">{art.user.name}</h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FiShare2 color="gray" />
                      <p className="text-gray-500 font-semibold">Share</p>
                    </div>
                  </div>
                  <div className="my-4 flex items-center gap-5">
                    <div className="flex gap-2 items-center">
                      {/* <img src='./images/like.png'></img> art.am_i_liked */}
                      <FontAwesomeIcon
                        icon={art.am_i_liked ? solidHeart : regularHeart}
                        className="text-red-600"
                      />
                      {/* art.am_i_liked */}
                      <h2 className="text-sm ">
                        {" "}
                        {art.am_i_liked ? "Likes" : "Like"}
                      </h2>
                    </div>

                    <div className="flex gap-[0.3vw] items-center">
                      {/* <img src='./images/views.png'></img> */}
                      <PiEyeFill size={20} color="gray" />
                      <h2 className="text-sm ">Views</h2>
                    </div>

                    <div className="flex items-center">
                      {/* <img src='./images/pages.png' /> */}
                      <PiFilesDuotone size={20} color="gray" />
                      <h2 className="text-sm ">50 Pages</h2>
                    </div>
                  </div>
                  <p className="text-gray-500">{art.abstract}</p>
                  <button
                    className="bg-primary text-white font-bold  py-2 mt-4 px-5 rounded"
                    onClick={downloadpdf}
                  >
                    Download PDF
                  </button>
                </div>
                <div className="w-auto lg:w-2/5 ps-6 h-screen">
                  <h1 className="font-semibold text-2xl lg:mt-0 xss:mt-4">
                    About Author
                  </h1>
                  <div className="flex mt-5 justify-between">
                    <div className="flex items-center">
                      {art.user.image ? (
                        <img
                          src={art.user.image}
                          alt="User"
                          className="w-16 h-16 rounded-full object-cover object-top"
                        />
                      ) : (
                        <CgProfile className="w-16 h-16" />
                      )}
                      <div className="ml-5">
                        <h1 className="text-lg">{art.user.name}</h1>
                        <p className="text-sm text-gray-500">
                          Graduate Student
                        </p>
                      </div>
                    </div>
                    {art.user.id !== user.id && (
                      <div className="flex gap-2 items-center">
                        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          Follow
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex mt-4 ">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <p className="text-gray-500 text-sm font-semibold">
                          Papers
                        </p>
                        <p className="mt-2">1</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 text-sm font-semibold">
                          Follwers
                        </p>
                        <p className="mt-2 ">50</p>
                      </div>
                    </div>
                  </div>
                  <p className="border-b-2 mt-4"></p>
                  <div className="my-5">
                    <h1 className="font-semibold">Related Papers</h1>
                    <div className="bg-white shadow-lg  px-4  py-2  border-2 rounded-lg my-3">
                      {/* <Link to={`/ArticleDetails/${article_id}`}> */}
                      <div className="flex justify-between items-center px-3 ">
                        <div className=" flex items-center">
                          <h3 className="text-xl font-semibold pe-5 capitalize">
                            articles
                          </h3>
                        </div>
                        {/* <div className="flex py-4 items-center">
                                                <button className="text-primary text-base  lg:text-lg xl:text-xl mr-4"
                                                // onClick={() => handleFollow(follow ? "unfollow" : "follow")}
                                                >
                                                    {true ? "Unfollow" : "Follow"}</button>
                                                <MoreVertIcon />
                                            </div> */}
                      </div>
                      <div className="text-sm text-gray-500  px-3 mt-2">
                        By Deepan
                      </div>
                      {/* <p className="mt-2 text-gray-500 font-medium border-b-2 pb-4 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, illum!</p> */}
                      {/* </Link> */}
                      <div className="flex justify-between mt-2 py-1 px-5">
                        <div className="flex items-center space-x-2">
                          <LiaDownloadSolid />
                          {/* <FontAwesomeIcon icon={Download} className="text-gray-600" /> */}
                          <span className="home-like-share-saved">
                            {" "}
                            Download
                          </span>
                        </div>

                        <div
                          className="flex items-center space-x-2 cursor-pointer"
                          // onClick={() => handlesaved(saved ? "deleteSave" : "save")}
                        >
                          <FontAwesomeIcon
                            icon={true ? solidBookmark : regularBookmark}
                            className="text-gray-600"
                          />
                          <span className="home-like-share-saved">
                            {true ? "Saved" : "Save"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon
                            icon={faShareAlt}
                            className="text-gray-600"
                          />
                          <span className="home-like-share-saved">Share</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow-lg  px-4 mb-8  py-2  border-2 rounded-lg">
                      {/* <Link to={`/ArticleDetails/${article_id}`}> */}
                      <div className="flex justify-between items-center px-3 ">
                        <div className=" flex items-center">
                          <h3 className="text-xl font-semibold pe-5 capitalize">
                            articles 2
                          </h3>
                        </div>
                        {/* <div className="flex py-4 items-center">
                                                <button className="text-primary text-base  lg:text-lg xl:text-xl mr-4"
                                                // onClick={() => handleFollow(follow ? "unfollow" : "follow")}
                                                >
                                                    {true ? "Unfollow" : "Follow"}</button>
                                                <MoreVertIcon />
                                            </div> */}
                      </div>
                      <div className="text-sm text-gray-500  px-3 mt-2">
                        By Deepan
                      </div>
                      {/* <p className="mt-2 text-gray-500 font-medium border-b-2 pb-4 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, illum!</p> */}
                      {/* </Link> */}
                      <div className="flex justify-between mt-2 py-1 px-5">
                        <div className="flex items-center space-x-2">
                          <LiaDownloadSolid />
                          {/* <FontAwesomeIcon icon={Download} className="text-gray-600" /> */}
                          <span className="home-like-share-saved">
                            {" "}
                            Download
                          </span>
                        </div>

                        <div
                          className="flex items-center space-x-2 cursor-pointer"
                          // onClick={() => handlesaved(saved ? "deleteSave" : "save")}
                        >
                          <FontAwesomeIcon
                            icon={true ? solidBookmark : regularBookmark}
                            className="text-gray-600"
                          />
                          <span className="home-like-share-saved">
                            {true ? "Saved" : "Save"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon
                            icon={faShareAlt}
                            className="text-gray-600"
                          />
                          <span className="home-like-share-saved">Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </>
  );
};

export default ArticleDetails;
