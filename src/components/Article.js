import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faEye, faShareAlt, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import rectangle60 from '../assets/img/Rectangle 60.svg'; // Ensure this image is present or replace it with an online link
import Ellipse4 from '../assets/img/Ellipse4.png'; // Ensure this image is present
import iconlike from '../assets/img/iconlike.png'; // Ensure this image is present
import weuieyesonfilled from '../assets/img/weuieyesonfilled.png'; // Ensure this image is present
import openmojishare from '../assets/img/openmojishare.png'; // Ensure this image is present
import iconamoonbookmarkthin from '../assets/img/iconamoonbookmarkthin.png'; // Ensure this image is present
import circummenukebab from '../assets/img/circummenukebab.png'; // Ensure this image is present

const articles = [
  {
    id: 1,
    title: "The Future of Quantum Computing: Transforming IT Landscapes",
    description: "Dive into the potential of quantum computing and its implications for solving complex problems in record time.",
    author: "John",
  },
  {
    id: 2,
    title: "AI in Cybersecurity: A Double-Edged Sword",
    description: "Discover how AI is revolutionizing cybersecurity, offering advanced protection while presenting new challenges.",
    author: "John",
  },
  {
    id: 3,
    title: "Machine Learning: The New Frontier",
    description: "Explore the latest trends in machine learning and its impact on various industries.",
    author: "Georgia",
  },
  // Add more articles as needed
];

// Postcard Component
const PostCard = ({ name, location, description }) => (
  <div className="group-13">
    <div className="overlap-2">
      <div className="text-wrapper-22">{name}</div>
      <div className="text-wrapper-23">{location}</div>
      <p className="text-wrapper-25">{description}</p>
      <img className="ellipse" alt="Ellipse" src={Ellipse4} />
      <img className="rectangle-2" alt="Rectangle" src={rectangle60} />
      <div className="group-12">
        <div className="group-3">
          <div className="text-wrapper-11">Likes</div>
          <img className="img-2" alt="Icon park outline" src={iconlike} />
        </div>
        <div className="group-4">
          <div className="text-wrapper-12">Views</div>
          <img className="img-2" alt="Weui eyes on filled" src={weuieyesonfilled} />
        </div>
        <div className="group-5">
          <div className="div-wrapper">
            <div className="text-wrapper-13">Share</div>
          </div>
          <img className="img-2" alt="Openmoji share" src={openmojishare} />
        </div>
        <div className="group-6">
          <div className="group-7">
            <div className="text-wrapper-13">Save</div>
          </div>
          <img className="iconamoon-bookmark" alt="Iconamoon bookmark" src={iconamoonbookmarkthin} />
        </div>
      </div>
      <img className="circum-menu-kebab-2" alt="Circum menu kebab" src={circummenukebab} />
    </div>
  </div>
);

const ArticleCard = ({ title, description, author }) => {
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleView = () => {
    setViews(views + 1);
  };

  const handleShare = () => {
    // Add share functionality (e.g., using the Web Share API or a custom share link)
    alert('Shared successfully!');
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="overlap">
      <img className="rectangle" alt="Rectangle" src={rectangle60} />
      <p className="text-wrapper-9">{description}</p>
      <p className="text-wrapper-15">{title}</p>
      <div className="text-wrapper-16">By {author}</div>
      <div className="group-2">
        <div className="group-3" onClick={handleLike}>
          <div className="text-wrapper-11">{liked ? 'Liked' : 'Likes'}</div>
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} className="img-2" />
        </div>
        <div className="group-4" onClick={handleView}>
          <div className="text-wrapper-12">Views: {views}</div>
          <FontAwesomeIcon icon={faEye} className="img-2" />
        </div>
        <div className="group-5" onClick={handleShare}>
          <div className="div-wrapper">
            <div className="text-wrapper-13">Share</div>
          </div>
          <FontAwesomeIcon icon={faShareAlt} className="img-2" />
        </div>
        <div className="group-6" onClick={handleSave}>
          <div className="group-7">
            <div className="text-wrapper-13">Save</div>
          </div>
          <FontAwesomeIcon icon={saved ? solidBookmark : regularBookmark} className="iconamoon-bookmark" />
        </div>
      </div>
    </div>
  );
};

const ArticleList = () => (
  <div>
    <PostCard 
      name="Georgia" 
      location="Ahmedabad, Gujarat" 
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform." 
    />
    {articles.map(article => (
      <ArticleCard
        key={article.id}
        title={article.title}
        description={article.description}
        author={article.author}
      />
    ))}
    <PostCard 
      name="John" 
      location="Chennai, Tamilnadu" 
      description="Join our vibrant community of Information Technology scholars and researchers." 
    />
  </div>
);

export default ArticleList;
