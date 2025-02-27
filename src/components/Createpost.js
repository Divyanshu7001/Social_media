import React, { useState, useContext, useEffect } from "react";
// import line8 from "../assets/img/Line8.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
// import materialsymbolslightclose from "../assets/img/materialsymbolslightclose.png";
// import bytesizedownload from "../assets/img/bytesizedownload.png";
import { Context } from "../index.js";
import { IoCloudDownloadOutline } from "react-icons/io5";
import api from "./api.js";
import { MdOutlineClear } from "react-icons/md";

const Box = ({ closePopup }) => {
  const { user } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); // State to hold the uploaded image
  const [uploadFile, setUploadFile] = useState(null);
  const [ icon, SetIcons ] = useState(40)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        SetIcons(25)
      } else if (window.innerWidth <= 768) {
        SetIcons(30)
      } else {
        SetIcons(40)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  }, []);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL); // Set the uploaded image
      setUploadFile(file);
    }
  };

  const handlePostUpload = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("description", inputValue);
      data.append("post", uploadFile);
      data.append("user_id", user.id);
      console.log(data);

      const response = await api.post(
        "uploadPost",
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      closePopup()
      console.log(response);
    } catch (error) {
      console.log("Error while uploading Post:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl h-3/5 md:h-3/5 lg:h-3/5 xl:h-3/5 2xl:h-1/2  p-5 rounded-lg shadow-md relative">
        <div className="flex justify-between items-center pb-3">
          <div className="font-semibold text-xl text-black ">Create Post</div>
          <MdOutlineClear onClick={closePopup} size={28} className="cursor-pointer" />
        </div>


        <div className="text-left">
          <p className="py-1 border-t-2" />
          {/* <img src={line8} alt="Line" className="w-full h-px bg-blue-500 mb-5" /> */}
          <div className="flex items-center mb-5">
            <img src={Ellipse4} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
            <div className="font-semibold text-xl text-black">{user.name || "John Paul"}</div>
          </div>

          <div className="mb-1 md:mb-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Share your thoughts with other scholars..."
              className="md:w-2/3 p-2 text-sm border-b-2 border-gray-200 outline-none font-poppins bg-transparent w-full"
            />
          </div>

          <div className="flex justify-between items-center mt-5 md:mt-5 h-36">
            <div className="border border-blue-500 rounded-lg p-3 text-center w-1/2 md:w-2/5 mx-auto relative">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-36 object-cover rounded-lg"
                />
              ) : (
                <>
                  <label htmlFor="file-upload" className="cursor-pointer flex flex-col justify-center items-center">
                    {/* <img
                      src={bytesizedownload}
                      alt="Upload"
                      className="w-12 h-12"
                    /> */}
                    <IoCloudDownloadOutline size={icon} color="gray" />
                    <div className="font-semibold text-base md:text-lg my-3 text-gray-500">Upload Image</div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <button
                className="bg-white text-blue-500 hidden md:block border border-blue-500 py-2 px-10 rounded-md cursor-pointer mt-14"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-10 rounded-md cursor-pointer mt-14"
                onClick={handlePostUpload}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

