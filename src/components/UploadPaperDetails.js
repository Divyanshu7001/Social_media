import React, { useState } from "react";
import "../style/UploadPaperDetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const UploadPaperDetails = () => {
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
  console.log(selectedFile);
  
  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("paperTitle", formData.paperTitle);
    data.append("abstract", formData.abstract);
    data.append("publication_name", formData.publicationName);
    data.append("authors", coAuthors);
    data.append("research_interest", formData.research_interest);
    data.append("period", formData.period);
    data.append("doi", formData.doi);
    data.append("year", formData.year);
    data.append("link", formData.link);
    data.append("section", formData.category);

    if (selectedFile) {
      data.append("article", selectedFile);
    }

    console.log(data);

    // const response = await axios.post(
    //   "http://92.118.56.227/api/upload_journal"
    // );
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
    <div className="flex flex-col">
      <div className="UPLOAD-paper-details">
        <div className="div">
          <div className="overlap">
            <Navbar />
          </div>

          <div className="text-wrapper-15">Enter Paper Details</div>

          {/* Main container for form */}
          <div className="form-container">
            {/* Left side: Paper title, abstract, authors */}
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

              {/* Inner container for author and co-author */}
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

            {/* Right side: publicationName, period, doi, category */}
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

          {/* Popup for adding new co-author */}
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
    </div>
  );
};

export default UploadPaperDetails;
