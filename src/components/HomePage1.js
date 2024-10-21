import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import rectangle60 from "../assets/img/Rectangle 60.svg";
import Ellipse4 from "../assets/img/Ellipse4.png";
import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
import openmojishare from "../assets/img/openmojishare.png";
import iconamoonbookmarkthin from "../assets/img/iconamoonbookmarkthin.png";
import circummenukebab from "../assets/img/circummenukebab.png";

const articles = [
  {
    id: 1,
    title: "The Future of Quantum Computing: Transforming IT Landscapes",
    description:
      "Dive into the potential of quantum computing and its implications for solving complex problems in record time.",
    author: "John",
  },
  {
    id: 2,
    title: "AI in Cybersecurity: A Double-Edged Sword",
    description:
      "Discover how AI is revolutionizing cybersecurity, offering advanced protection while presenting new challenges.",
    author: "John",
  },
  {
    id: 3,
    title: "Machine Learning: The New Frontier",
    description:
      "Explore the latest trends in machine learning and its impact on various industries.",
    author: "Georgia",
  },
  {
    id: 4,
    title: "Machine Learning: The New Frontier",
    description:
      "Explore the latest trends in machine learning and its impact on various industries.",
    author: "Georgia",
  },
];

const PostCard = ({ name, location, description }) => {
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleView = () => setViews(views + 1);
  const handleLike = () => setLiked(!liked);

  useEffect(() => {
    handleView();
  }, []);

  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <img src={Ellipse4} alt="Profile" style={styles.profileImage} />
        <div style={styles.cardText}>
          <div style={styles.name}>{name}</div>
          <div style={styles.location}>{location}</div>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
      <div style={styles.actionGroup}>
        <div style={styles.actionItem} onClick={handleLike}>
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            style={styles.actionIcon}
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div style={styles.actionItem}>
          <img src={weuieyesonfilled} alt="Views" style={styles.actionIcon} />
          <span>{views} Views</span>
        </div>
        <div style={styles.actionItem}>
          <img src={openmojishare} alt="Share" style={styles.actionIcon} />
          <span>Share</span>
        </div>
        <div style={styles.actionItem}>
          <img
            src={iconamoonbookmarkthin}
            alt="Save"
            style={styles.actionIcon}
          />
          <span>Save</span>
        </div>
        <img src={circummenukebab} alt="More" style={styles.moreIcon} />
      </div>
    </div>
  );
};

const ArticleCard = ({ title, description, author }) => {
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLiked(!liked);
  const handleView = () => setViews(views + 1);
  const handleSave = () => setSaved(!saved);

  useEffect(() => {
    handleView();
  }, []);

  return (
    <div style={styles.card}>
      <img src={rectangle60} alt="Article" style={styles.articleImage} />
      <div style={styles.cardText}>
        <h3 style={styles.title}>{title}</h3>
        <div style={styles.author}>By {author}</div>

        <p style={styles.description}>{description}</p>
      </div>
      <div style={styles.actionGroup}>
        <div style={styles.actionItem} onClick={handleLike}>
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            style={styles.actionIcon}
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div style={styles.actionItem}>
          <FontAwesomeIcon icon={faEye} style={styles.actionIcon} />
          <span>Views: {views}</span>
        </div>
        <div style={styles.actionItem}>
          <FontAwesomeIcon icon={faShareAlt} style={styles.actionIcon} />
          <span>Share</span>
        </div>
        <div style={styles.actionItem} onClick={handleSave}>
          <FontAwesomeIcon
            icon={saved ? solidBookmark : regularBookmark}
            style={styles.actionIcon}
          />
          <span>{saved ? "Saved" : "Save"}</span>
        </div>
        <img src={circummenukebab} alt="More" style={styles.moreIcon} />
      </div>
    </div>
  );
};

const ArticleList = () => (
  <div style={styles.scrollableContent}>
    {articles.map((article) => (
      <ArticleCard
        key={article.id}
        title={article.title}
        description={article.description}
        author={article.author}
      />
    ))}
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />

    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
    <PostCard
      name="John"
      location="Chennai, Tamil Nadu"
      description="Join our vibrant community of Information Technology scholars and researchers."
    />
    <PostCard
      name="Georgia"
      location="Ahmedabad, Gujarat"
      description="Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform."
    />
  </div>
);

const styles = {
  scrollableContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: "20px 0",
  },
  scrollableContent: {
    width: "100%",
    maxWidth: "800px",
    height: "150vh",
    overflowY: "auto",
    padding: "10px 2vw", // Using responsive padding
    marginTop: "0",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    scrollBehavior: "smooth",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  cardText: {
    flex: 1,
    marginLeft: "20px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  location: {
    fontSize: "14px",
    color: "#555",
  },
  description: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
  actionGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  actionItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  actionIcon: {
    fontSize: "20px",
    marginRight: "8px",
  },
  moreIcon: {
    fontSize: "20px",
    cursor: "pointer",
  },
  articleImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  author: {
    fontSize: "12px",
    color: "#555",
    marginTop: "5px",
  },
};

export default ArticleList;
