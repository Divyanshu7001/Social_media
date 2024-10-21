import React, { useState } from "react";
import "../style/UploadPaperDetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const UploadPaperDetails = () => {
  const [formData, setFormData] = useState({
    paperTitle: "",
    abstract: "",
    publicationName: "",
    period: "",
    doi: "",
    author: "",
    coAuthor: "",
    category: "", // New category field
  });
  const [coAuthors, setCoAuthors] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newCoAuthor, setNewCoAuthor] = useState("");

  const users = [
    "John Doe",
    "Alice Smith",
    "Robert Johnson",
    "Bob Riser",
    "Levi Ackeraman",
  ]; // Example list of users

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Search co-author
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

  // Add co-author from the user list
  const addCoAuthor = (author) => {
    if (!coAuthors.includes(author)) {
      setCoAuthors([...coAuthors, author]);
    }
    setFormData({ ...formData, coAuthor: "" }); // Clear the input field
    setShowUserList(false); // Hide list after selecting
  };

  // Show the popup to manually add a co-author
  const handleAddNewCoAuthor = () => {
    setShowPopup(true);
  };

  // Add new co-author manually
  const handleNewCoAuthorSubmit = () => {
    if (newCoAuthor.trim() && !coAuthors.includes(newCoAuthor)) {
      setCoAuthors([...coAuthors, newCoAuthor]);
      setNewCoAuthor(""); // Reset input field
      setFormData({ ...formData, coAuthor: "" }); // Clear search input
      setShowUserList(false); // Hide the user list
    }
    setShowPopup(false); // Hide popup after adding
  };

  // Close the popup without adding
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  // Remove co-author by clicking the cross icon
  const removeCoAuthor = (authorToRemove) => {
    setCoAuthors(coAuthors.filter((author) => author !== authorToRemove));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
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

              {/* Inner container for author and co-author */}
              <label htmlFor="author" className="author-heading">
                Author
              </label>
              <div className="author-container">
                <div className="input-group1">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      name="coAuthor"
                      value={formData.coAuthor}
                      onChange={handleCoAuthorChange}
                      placeholder="Enter Co-Author Name"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="select-auth" onClick={handleAddNewCoAuthor}>
                      + Add Co-Authors
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
                <label htmlFor="period">Period</label>
                <input
                  type="text"
                  name="period"
                  value={formData.period}
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
              <div className="input-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="research">Research</option>
                  <option value="review">Review</option>
                  <option value="case study">Case Study</option>
                </select>
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
                <button onClick={handleNewCoAuthorSubmit}>Add Co-Author</button>
                <button onClick={handlePopupClose}>Cancel</button>
              </div>
            </div>
          )}

          <div className="div-wrapper">
            <div className="text-wrapper-7">Save</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadPaperDetails;
