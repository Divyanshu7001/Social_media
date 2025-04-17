import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { LeftSidebar } from './LeftSidebar'
import { FaRegHeart } from 'react-icons/fa'
import { PiEyeFill, PiFilesDuotone } from 'react-icons/pi'
import Ellipse4 from "../assets/img/Ellipse4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import openmojishare from "../assets/img/openmojishare.png";
import { Context } from '../index.js'
import api from './api'
import { Link } from 'react-router-dom'

const SavedItems = () => {

  const { user, isAuthenticated } = useContext(Context)
  const [savedItems, setSavedItems] = useState([])
  const [userList, setUserList] = useState([]);
  const [btn, setBtn] = useState(null)

  useEffect(() => {
    const fetchSave = async () => {
      if (user && user.id) {

        try {
          const response = await api.post('fetchSaved', {
            user_id: user.id
          },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" }
            });
          setSavedItems(response.data)
          setUserList(response.data.users)
          // console.log(response.data)
        }
        catch (error) {
          console.log("Error while fetch Saved Data: " + error)
        }
      }
    }
    if (user && user.id) fetchSave();
  }, [user, isAuthenticated])
  const users_data = userList[0] || []
  const articles = savedItems.articles || []
  const posts = savedItems.posts || []

  return (
    <>
      <Navbar />
      <LeftSidebar
        user_data={users_data}
        togglePopup={() => { }}
        showPopup={false}
        post={false} />

      <div className="fixed left-0 top-15 h-8 w-full bg-white "></div>

      <div className="flex px-5 md:px-0 ms-auto w-full lg:w-[68%] md:w-[65%] xl:w-[68%] 2xl:w-[68%] min-h-screen me-[3%] lg:me-[2%] xl:me-[6%] 2xl:me-[6%] my-7">

        <div className="w-full">
          <h2 className="font-bold mb-[1vw] text-lg ">SAVED ITEMS</h2>

          <div className='flex gap-5 w-full justify-center rounded'>
            <button className={`px-3 py-1 mb-2 w-1/2 text-white rounded ${btn === "article" ? "bg-gray-500" : "bg-primary"}`} onClick={() => setBtn("article")}>Articles</button>
            <button className={`px-3 py-1 mb-2 w-1/2 text-white rounded ${btn === "post" ? "bg-gray-500" : "bg-primary"}`} onClick={() => setBtn("post")}>Post</button>
          </div>

          {btn === "article" && (articles.length > 0 ? articles.map((art) => (
            <div key={art.articleId} className="border-2 rounded-lg px-7 md:px-10 py-8 mt-4">
              <Link to={`/ArticleDetails/${art.articleId}`}>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold mb-2 md:mb-6">{art.title}</h2>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <img src={art.profile_img || 'images/Ellipse4.png'} alt='Avatar' className='object-cover rounded-full w-10 h-10' />

                  <div className="">
                    <h2 className='font-bold'>{art.articleUsername}</h2>
                    <h2 className='opacity-80'>{art.articleUserLocation || "location"}</h2>
                  </div>
                </div>

                <p className='mt-[1vw] font-medium text-sm text-gray-500'>{art.description}</p>
              </Link>
              {/* <p className='mt-[1.5vw] font-medium text-sm text-gray-500'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers.</p> */}

              <div className="my-[2vw] flex gap-[2vw] items-center">

                <div className="flex gap-[0.3vw] items-center">
                  {/* <img src='./images/like.png'></img> */}
                  <FontAwesomeIcon
                    icon={art.am_i_liked ? solidHeart : regularHeart}
                    className="text-red-600"
                  />
                  <h2 className='text-sm '>{art.likecount} {art.am_i_liked ? "Likes" : "Like"}</h2>
                </div>


                <div className="flex gap-[0.3vw] items-center">
                  {/* <img src='./images/views.png'></img> */}
                  <PiEyeFill size={20} color='gray' />
                  <h2 className='text-sm '>Views</h2>
                </div>


                <div className="flex gap-[0.3vw] items-center">
                  {/* <img src='./images/pages.png' /> */}
                  <PiFilesDuotone size={20} color='gray' />
                  <h2 className='text-sm '>50 Pages</h2>
                </div>

              </div>

              <button className="bg-[#0000FF] px-[2vw] py-[0.3vw] text-white font-semibold rounded-sm">Download</button>

            </div>
          )) : <p className='mt-5 text-center font-bold'>No Articles Avaliable</p>
          )
          }

          {/* post */}
          {btn === "post" && (posts.length > 0 ? posts.map(post => (
            <div className="py-2 mb-10 border-2 rounded-lg  mt-5">
              {/* head */}
              <div className="flex justify-between items-center px-2 xl:px-2 lg:px-0">
                <div className="flex px-1 md:px-1 py-4 items-center xl:px-6 lg:px-4">
                  {/* "profile_img ? profile_img :" */}
                  <img src={post.profile_img || Ellipse4} alt="Profile" className="w-12 h-12 rounded-full object-cover object-top" />
                  <div className="ml-2 lg:ml-4 md:ml-2">
                    <div className="md:text-lg lg:text-xl font-semibold">{post.PostUsername}</div>
                    <div className="text-sm text-gray-500">{post.postUserLocation || "location"}</div>
                  </div>
                </div>
                {/* <div className="flex px-0 py-4 items-center md:px-0 xl:px-2 lg:px-0 ">
                  <button className="text-primary text-base lg:text-lg xl:text-xl mr-1 xl:mr-4 lg:mr-2 md:mr-1">Follow</button>

                  <MoreVertIcon />
                </div> */}
              </div>
              {/* body */}
              <div className="flex-col ">

                <p className="mt-2 px-9 xl:px-9 lg:px-4 text-gray-700">{post.title}</p>
                <img src={post.image} alt={post.title} className="object-cover object-center mt-2 w-full h-96 me-auto" />
              </div>
              <div className="flex justify-between mt-3 mb-2 items-center mx-9">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={post.am_i_liked ? solidHeart : regularHeart}
                    className="text-red-600"
                  />
                  <span className="home-like-share-saved">{post.likecount} {post.am_i_liked ? "Likes" : "Like"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PiEyeFill size={20} color='gray' />
                  {/* <img src={weuieyesonfilled} alt="Views" className="w-6 h-6" /> */}
                  <span className="home-like-share-saved"> Views</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <img src={openmojishare} alt="Share" className="w-6 h-6" />
                  <span className="home-like-share-saved">Share</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={false ? solidBookmark : regularBookmark}
                    className="text-gray-600"
                  />
                  <span className="home-like-share-saved">Saved</span>
                </div> */}
              </div>
            </div>
          )) : <p className='mt-5 text-center font-bold'>No Posts Avaliable</p>
          )}

        </div>

      </div>


      {/* <div className="">

          <div className="w-[70%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">

            <div className='w-[86%] mx-auto'>


              <div className="flex justify-between items-center">
                <h2 className="font-semibold">The Future of Quantum Computing: Transforming IT Landscapes</h2>
              </div>


              <div className='flex flex-row items-center gap-[2vw] mt-[2vw]'>
                <div className='h-[5vw] w-[5vw]'>
                  <img src='images/Ellipse4.png' alt='Avatar' className='h-full w-full object-cover' />
                </div>

                <div className="">
                  <h2 className='font-bold'>John</h2>
                  <h2 className='opacity-80'>Chennai, Tamilnadu</h2>
                </div>
              </div>

              <p className='mt-[1vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers, quantum computing and its implications for solving complex problems in  time.</p>
              <p className='mt-[1.5vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers.</p>

              <div className="my-[2vw] flex gap-[2vw] items-center">

                <div className="flex gap-[0.3vw] items-center">
                  <img src='./images/like.png'></img>
                  <h2 className='text-sm opacity-75'>Likes</h2>
                </div>


                <div className="flex gap-[0.3vw] items-center">
                  <img src='./images/views.png'></img>
                  <h2 className='text-sm opacity-75'>views</h2>
                </div>


                <div className="flex gap-[0.3vw] items-center">
                  <img src='./images/pages.png'></img>
                  <h2 className='text-sm opacity-75'>50 pages</h2>
                </div>

              </div>

              <button className="bg-[#0000FF] px-[2vw] py-[0.3vw] text-white font-semibold rounded-sm">Download</button>

            </div>

          </div>

        </div> */}
      <Footer />

    </>
  )
}

export default SavedItems