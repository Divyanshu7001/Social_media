import React, { useState, useContext } from "react";
// import "../style/UploadPaperDetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index.js";
import toast from "react-hot-toast";
import api from "./api.js";
export const UploadPaperDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [formData, setFormData] = useState({
    paperTitle: "",
    abstract: "",
    publicationName: "",
    year: "",
    link: "",
    doi: "",
    research_interest: "",
    category: "", // New category field
  });

  const [coAuthors, setCoAuthors] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newCoAuthor, setNewCoAuthor] = useState("");

  const location = useLocation();
  const { selectedFile } = location.state || {};
  //console.log(selectedFile);

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("user_id", user.id);
    data.append("paper_title", formData.paperTitle);
    data.append("abstract", formData.abstract);
    data.append("publication_name", formData.publicationName);
    data.append("year", formData.year);
    data.append("doi", formData.doi);
    data.append("authors", coAuthors);
    data.append("research_interest", formData.research_interest);
    data.append("section", formData.category);
    data.append("link", formData.link);
    data.append("period", formData.period);

    let headers = { "Content-Type": "application/json" };
    if (selectedFile) {
      data.append("article", selectedFile);
      headers["Content-Type"] = "multipart/form-data";
    }

    console.log(data);

    try {
      const response = await api.post(
        "uploadJournal",
        data,
        {
          withCredentials: true,
          headers,
        }
      );
      toast.success(response.data.message, {
        style: {
          borderRadius: "8px",
          background: "#f8f9fa",
          color: "#212529",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "12px 20px",
        },
      });
      //console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const users = [
    "John Doe",
    "Alice Smith",
    "Robert Johnson",
    "Bob Riser",
    "Levi Ackerman",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoAuthorChange = (e) => {
    const input = e.target.value;
    setFormData({ ...formData, coAuthor: input });

    if (input.trim()) {
      const filtered = users.filter((user) =>
        user.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredUsers(filtered);
      setShowUserList(true);
    } else {
      setShowUserList(false);
    }
  };

  const addCoAuthor = (author) => {
    if (!coAuthors.includes(author)) {
      setCoAuthors([...coAuthors, author]);
    }
    setFormData({ ...formData, coAuthor: "" });
    setShowUserList(false);
  };

  const handleAddNewCoAuthor = () => setShowPopup(true);

  const handleNewCoAuthorSubmit = () => {
    if (newCoAuthor.trim() && !coAuthors.includes(newCoAuthor)) {
      setCoAuthors([...coAuthors, newCoAuthor]);
    }
    setNewCoAuthor("");
    setFormData({ ...formData, coAuthor: "" });
    setShowPopup(false);
  };

  const handlePopupClose = () => setShowPopup(false);

  const removeCoAuthor = (authorToRemove) => {
    setCoAuthors(coAuthors.filter((author) => author !== authorToRemove));
  };

  return (
    <>
      <Navbar />

      {/* <div className="flex flex-col">
        <div className="UPLOAD-paper-details">
          <div className="div">
            <div className="overlap">

            </div>

            <div className="text-wrapper-15">Enter Paper Details</div>

            
            <div className="form-container">
              
              <div className="left-column">
                <div className="input-group">
                  <label htmlFor="paperTitle">Paper Title</label>
                  <input
                    type="text"
                    name="paperTitle"
                    placeholder="Enter Title"
                    value={formData.paperTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="abstract">Abstract</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-span-4 input-group">
                  <label htmlFor="paperTitle">Link</label>
                  <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                  />
                </div>

                
                <label htmlFor="author" className="author-heading">
                  Authors
                </label>
                <div className="author-container">
                  <div className="input-group1">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="text"
                        name="coAuthor"
                        onChange={handleCoAuthorChange}
                        placeholder="Enter Co-Author Name"
                      />
                      <p
                        className="select-auth ml-2"
                        onClick={handleAddNewCoAuthor}
                      >
                        +Add Co-Author
                      </p>
                    </div>
                    {showUserList && (
                      <ul className="user-list">
                        {filteredUsers.length ? (
                          filteredUsers.map((user, index) => (
                            <p
                              key={index}
                              onClick={() => addCoAuthor(user)}
                              className="user-list-item"
                              style={{ cursor: "pointer" }}
                            >
                              {user}
                            </p>
                          ))
                        ) : (
                          <div style={{ display: "flex", textAlign: "right" }}>
                            <p>No users found ? &nbsp;</p>
                            <p
                              onClick={handleAddNewCoAuthor}
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              {" "}
                              Add New
                            </p>
                          </div>
                        )}
                      </ul>
                    )}
                    <div className="co-author-list" style={{ display: "flex" }}>
                      {coAuthors.map((author, index) => (
                        <div key={index} className="co-author-item">
                          <p className="auth-name">
                            {author}
                            <span
                              className="remove-co-author"
                              onClick={() => removeCoAuthor(author)}
                              style={{
                                cursor: "pointer",
                                marginLeft: "10px",
                              }}
                            >
                              ✕
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="right-column">
                <div className="input-group">
                  <label htmlFor="publicationName">Publication Name</label>
                  <input
                    type="text"
                    name="publicationName"
                    placeholder="Enter Publication Name"
                    value={formData.publicationName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="period">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="doi">DOI</label>
                  <input
                    type="text"
                    name="doi"
                    value={formData.doi}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="input-group2">
                    <label htmlFor="category" className="text-lg font-semibold">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-500 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select Category</option>
                      <option value="research">Research</option>
                      <option value="review">Review</option>
                      <option value="case study">Case Study</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="doi">Research Interests</label>
                    <input
                      type="text"
                      name="research_interest"
                      value={formData.research_interest}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

           
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup">
                  <h3>Add New Co-Author</h3>
                  <input
                    type="text"
                    value={newCoAuthor}
                    onChange={(e) => setNewCoAuthor(e.target.value)}
                    placeholder="Enter Co-Author Name"
                  />
                  <button onClick={handleNewCoAuthorSubmit}>Add</button>
                  <button onClick={handlePopupClose}>Cancel</button>
                </div>
              </div>
            )}

            <div className="div-wrapper">
              <div className="text-wrapper-7" onClick={handleUpload}>
                Save
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div> */}

      <div className="flex flex-col">
        <div className="bg-gray-100 flex justify-center w-full">
          {/*relative h-[1659px] overflow-hidden w-[1440px] */}
          <div className=" bg-gray-100 w-full h-full ">

            <h1 className="text-3xl font-bold text-gray-700 text-center my-5 md:my-10">Enter Paper Details</h1>

            <div className="bg-gray-200 p-5 md:p-10 mb-10 rounded-lg shadow-md w-11/12  md:w-11/12 lg:w-[75%] mx-auto flex flex-col md:flex md:flex-row  gap-8 ">
              <div className="w-full md:w-[55%]">
                <div className="mb-4">
                  <label htmlFor="paperTitle" className="block text-lg font-semibold text-gray-700">Paper Title</label>
                  <input
                    type="text"
                    name="paperTitle"
                    placeholder="Enter Title"
                    value={formData.paperTitle}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="abstract" className="block text-lg font-semibold text-gray-700">Abstract</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2 h-[150px] resize-none"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="link" className="block text-lg font-semibold text-gray-700">Link</label>
                  <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                </div>

                <label htmlFor="author" className="block text-lg font-semibold text-gray-700 mt-4">Authors</label>
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
                  <div className="flex flex-col md:flex-row items-center mb-2 md:mb-4">
                    <input
                      type="text"
                      name="coAuthor"
                      onChange={handleCoAuthorChange}
                      placeholder="Enter Co-Author Name"
                      className="p-4 border border-gray-300 rounded-md mr-2 w-full md:w-[60%] mb-4 md:mb-0"
                    />
                    <p className="text-blue-500 cursor-pointer" onClick={handleAddNewCoAuthor}>+Add Co-Author</p>
                  </div>

                  {showUserList && (
                    <ul className="max-h-[150px] overflow-y-auto">
                      {filteredUsers.length ? (
                        filteredUsers.map((user, index) => (
                          <p
                            key={index}
                            onClick={() => addCoAuthor(user)}
                            className="cursor-pointer"
                          >
                            {user}
                          </p>
                        ))
                      ) : (
                        <div className="text-right">
                          <p>No users found ? &nbsp;</p>
                          <p
                            onClick={handleAddNewCoAuthor}
                            className="text-blue-500 cursor-pointer"
                          >
                            Add New
                          </p>
                        </div>
                      )}
                    </ul>
                  )}

                  <div className="flex">
                    {coAuthors.map((author, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <p className="px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer">
                          {author}
                          <span
                            className="ml-2 cursor-pointer"
                            onClick={() => removeCoAuthor(author)}
                          >
                            ✕
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[40%]">
                <div className="mb-4">
                  <label htmlFor="publicationName" className="block text-lg font-semibold text-gray-700">Publication Name</label>
                  <input
                    type="text"
                    name="publicationName"
                    placeholder="Enter Publication Name"
                    value={formData.publicationName}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="year" className="block text-lg font-semibold text-gray-700">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="doi" className="block text-lg font-semibold text-gray-700">DOI</label>
                  <input
                    type="text"
                    name="doi"
                    value={formData.doi}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-semibold text-gray-700">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 rounded-md mt-2"
                    >
                      <option value="">Select Category</option>
                      <option value="research">Research</option>
                      <option value="review">Review</option>
                      <option value="case study">Case Study</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="research_interest" className="block text-lg font-semibold text-gray-700">Research Interests</label>
                    <input
                      type="text"
                      name="research_interest"
                      value={formData.research_interest}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 rounded-md mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary text-center px-5 py-3 mb-10 text-white text-lg font-semibold rounded-md cursor-pointer w-32 mx-auto" onClick={handleUpload}>
              Save
            </div>

            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-md w-[300px] text-center">
                  <h3 className="mb-4 text-xl font-semibold">Add New Co-Author</h3>
                  <input
                    type="text"
                    value={newCoAuthor}
                    onChange={(e) => setNewCoAuthor(e.target.value)}
                    placeholder="Enter Co-Author Name"
                    className="w-full p-4 border border-gray-300 rounded-md mt-2"
                  />
                  <button
                    onClick={handleNewCoAuthorSubmit}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
                  >
                    Add
                  </button>
                  <button
                    onClick={handlePopupClose}
                    className="bg-gray-500 text-white px-6 py-2 rounded-md mt-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}


          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default UploadPaperDetails;
