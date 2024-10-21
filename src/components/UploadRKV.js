import React, { useState } from 'react';

const UploadPage = () => {
  const [paperTitle, setPaperTitle] = useState('');
  const [publicationName, setPublicationName] = useState('');
  const [abstract, setAbstract] = useState('');
  const [doiNumber, setDoiNumber] = useState('');
  const [category, setCategory] = useState('');
  const [coAuthors, setCoAuthors] = useState(['']);

  const addCoAuthor = () => {
    setCoAuthors([...coAuthors, '']);
  };

  const handleChangeCoAuthor = (index, value) => {
    const newCoAuthors = [...coAuthors];
    newCoAuthors[index] = value;
    setCoAuthors(newCoAuthors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
  };

  // Inline style objects
  const uploadPageStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle, // Same style as input
    height: '100px',
    resize: 'none'
  };

  const buttonStyle = {
    padding: '10px 15px',
    marginBottom: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
  };

  const selectStyle = {
    ...inputStyle,
    height: '40px'
  };

  return (
    <div style={uploadPageStyle}>
      <h2>Upload Paper Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Paper Title"
          value={paperTitle}
          onChange={(e) => setPaperTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Publication Name"
          value={publicationName}
          onChange={(e) => setPublicationName(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          style={textareaStyle}
        />
        <input
          type="text"
          placeholder="DOI Number"
          value={doiNumber}
          onChange={(e) => setDoiNumber(e.target.value)}
          style={inputStyle}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={selectStyle}
        >
          <option value="">Select Category</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="engineering">Engineering</option>
          <option value="mathematics">Mathematics</option>
        </select>
        <div>
          {coAuthors.map((author, index) => (
            <input
              key={index}
              type="text"
              placeholder="Enter Co-Author Name"
              value={author}
              onChange={(e) => handleChangeCoAuthor(index, e.target.value)}
              style={inputStyle}
            />
          ))}
          <button type="button" onClick={addCoAuthor} style={buttonStyle}>
            Add Co-Author
          </button>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default UploadPage;
