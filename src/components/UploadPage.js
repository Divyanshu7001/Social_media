import React, { useRef, useState } from "react";
import "../style/Upload.css";
import { Link, useNavigate } from "react-router-dom";
import rectangle65 from "../assets/img/rectangle-65.png";
import rectangle64 from "../assets/img/rectangle-64.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Upload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleNextClick = () => {
    navigate("/UploadPaperDetails", { state: { selectedFile } });
  };

  const handleNoFileClick = () => {
    navigate("/UploadPaperDetails"); // Navigate to the details page
  };

  return (
    <>
      <div className="UPLOAD">
        <div className="div">
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src={rectangle64} />
            <img className="img" alt="Rectangle" src={rectangle65} />
            <div className="text-wrapper">UPLOAD YOUR PAPER</div>

            <div className="group">
              <div className="group-2">
                {!selectedFile ? (
                  <div className="frame" onClick={handleChooseFileClick}>
                    <div className="text-wrapper-2">Choose a File</div>
                  </div>
                ) : (
                  <div className="file-container">
                    <p className="file-name" style={{ textAlign: "center" }}>
                      File Uploaded: {selectedFile.name}
                    </p>
                    <div
                      className="frame next-button"
                      onClick={handleNextClick}
                    >
                      <div className="text-wrapper-2">Next</div>
                    </div>
                  </div>
                )}
                {!selectedFile && (
                  <>
                    <p className="p">Drag and drop a file</p>
                    <div className="text-wrapper-3">or</div>
                  </>
                )}
              </div>
              {!selectedFile && (
                <div className="no-file-link mt-32 text-center ml-5">
                  <button
                    className="no-file-button"
                    onClick={handleNoFileClick}
                  >
                    No file to upload?
                  </button>
                </div>
              )}
            </div>

            <p className="text-wrapper-4">
              Upload Your Paper which contributes to the advancement of
              knowledge in the field of information technology by submitting
              your research to our journal.
            </p>
          </div>

          <div className="overlap-group">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
