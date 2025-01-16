import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import line8 from "../assets/img/Line8.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
import materialsymbolslightclose from "../assets/img/materialsymbolslightclose.png";
import bytesizedownload from "../assets/img/bytesizedownload.png";
import axios from "axios";
import { Context } from "../index.js";
import api from "./api.js";
//import Homepage from "./HomePage";

export const Box = () => {
  const { user } = useContext(Context);
  const [showPopup, setShowPopup] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); // State to hold the uploaded image
  const [uploadFile, setUploadFile] = useState(null);
  const navigate = useNavigate();

  const closePopup = () => {
    setShowPopup(false);
    navigate("/Home");
  };

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
      console.log(response);
    } catch (error) {
      console.log("Error while uploading Post:", error);
    }
  };

  if (!showPopup) return null;

  return (
    <div style={popupOverlayStyle}>
      <div style={boxStyle}>
        <img
          src={materialsymbolslightclose}
          alt="Close"
          style={closeIconStyle}
          onClick={closePopup}
        />
        <div style={contentStyle}>
          <div style={textWrapper2Style}>Create Post</div>

          <img src={line8} alt="Line" style={lineStyle} />

          <div style={headerStyle}>
            <img src={Ellipse4} alt="Profile" style={profileImgStyle} />
            <div style={textWrapper2Style}>John Paul</div>
          </div>

          <div style={inputContainerStyle}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Share your thoughts with other scholars..."
              style={inputStyle}
            />
          </div>

          {/* Container to align upload section and buttons horizontally */}
          <div style={horizontalAlignStyle}>
            {/* Upload Section */}
            <div style={uploadSectionStyle}>
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={uploadedImageStyle}
                />
              ) : (
                <>
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    <img
                      src={bytesizedownload}
                      alt="Upload"
                      style={downloadIconStyle}
                    />
                    <div style={textWrapperStyle}>Upload Image</div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </>
              )}
            </div>

            <div style={buttonWrapperStyle}>
              <button style={cancelButtonStyle} onClick={closePopup}>
                Cancel
              </button>
              <button onClick={handlePostUpload} style={postButtonStyle}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const boxStyle = {
  backgroundColor: "#ffffff",
  width: "100%",
  maxWidth: "600px",
  height: "60%",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
};

const contentStyle = {
  textAlign: "left",
};

const closeIconStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  width: "24px",
  height: "24px",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const profileImgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "15px",
};

const textWrapper2Style = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "18px",
  fontWeight: "600",
  color: "#000",
};

const inputContainerStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "65%",
  padding: "10px",
  fontSize: "14px",
  border: "none",
  borderBottom: "2px solid rgb(235 234 234)",
  outline: "none",
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: "transparent",
};

const horizontalAlignStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
};

const uploadSectionStyle = {
  border: "1px solid #0000ff",
  borderRadius: "10px",
  padding: "10px",
  display: "inline-block",
  width: "40%",
  textAlign: "center",
  marginLeft: "10%",
  position: "relative",
};

const textWrapperStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  color: "#000",
  marginTop: "30px",
};

const downloadIconStyle = {
  width: "50px",
  height: "50px",
};

const uploadedImageStyle = {
  maxWidth: "100%", // Ensures the image doesn't exceed the upload section width
  maxHeight: "150px", // Sets a fixed max height
  objectFit: "cover", // Ensures the image is contained and scaled properly
  borderRadius: "10px",
};

const lineStyle = {
  width: "100%",
  height: "1px",
  backgroundColor: "#0000ff",
  margin: "20px 0",
};

const buttonWrapperStyle = {
  display: "flex",
  gap: "10px",
};

const cancelButtonStyle = {
  backgroundColor: "#fff",
  color: "#0000ff",
  border: "1px solid #0000ff",
  padding: "10px 40px",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "73px",
};

const postButtonStyle = {
  backgroundColor: "#0000ff",
  color: "#fff",
  padding: "10px 40px",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "73px",
};

export default Box;
