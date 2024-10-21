import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaEye, FaShare, FaBookmark, FaEllipsisV } from 'react-icons/fa';
import connection from '../assets/img/connection.webp';
import message from '../assets/img/message.png';
import notify from '../assets/img/notify.webp';
import save from '../assets/img/save.png';
import profile from '../assets/img/profile.webp';
import instagramlogo from '../assets/img/instagramlogo.png';
import facebooklogo from '../assets/img/facebooklogo.png';
import twitterlogo from '../assets/img/twitterlogo.png';

// Header Component
const Header = () => {
  return (
    <header style={styles.header}>
      <Navbar />
    </header>
  );
};

// Profile Section Component
const ProfileSection = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/create-post');
  };

  return (
    <aside style={styles.profileSection}>
      <div style={styles.profileCard}>
        <img src={profile} alt="Profile" style={styles.profileImage} />
        <p style={styles.profileName}>Keerthana Keer</p>
        <p style={styles.profileRole}>Graduate Researcher</p>

        <div style={styles.connectionSection}>
          <div style={styles.connectionItem}>
            <img src={connection} alt="My Connections" style={styles.icon} />
            <span style={styles.textWrapper}>My Connections</span>
          </div>
          <div style={styles.connectionItem}>
            <img src={notify} alt="Notifications" style={styles.icon} />
            <span style={styles.textWrapper}>Notifications</span>
          </div>
          <div style={styles.connectionItem}>
            <img src={message} alt="Message" style={styles.icon} />
            <span style={styles.textWrapper}>Message</span>
          </div>
          <div style={styles.connectionItem}>
            <img src={save} alt="Saved Items" style={styles.icon} />
            <span style={styles.textWrapper}>Saved Items</span>
          </div>
        </div>
      </div>
      <center>
        <button style={styles.createPostButton} onClick={handleCreatePost}>
          Create a Post
        </button>
      </center>
    </aside>
  );
};

// Main Content Section
const MainContent = () => {
  return (
    <div style={styles.mainContent}>
      <h2 style={styles.mainHeading}>Top Stories</h2>
      <div style={styles.storyCardContainer}>
        {topStories.map((story, index) => (
          <div key={index} style={styles.storyCard}>
            <img src={story.image} alt="Story" style={styles.storyImage} />
            <div style={styles.storyContent}>
              <h3 style={styles.storyTitle}>{story.title}</h3>
              <p style={styles.storyAuthor}>by {story.author}</p>
              <p style={styles.storyDescription}>{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample Data for Top Stories
const topStories = [
  {
    image: 'path-to-image1.jpg', // replace with actual image paths
    title: 'Quantum Computing Advances',
    author: 'John Doe',
    description: 'Explore the latest breakthroughs in quantum computing and how it could revolutionize industries.',
  },
  {
    image: 'path-to-image2.jpg',
    title: 'AI in Cybersecurity',
    author: 'Jane Smith',
    description: 'Discover how AI is being leveraged to enhance cybersecurity and tackle emerging threats.',
  },
  {
    image: 'path-to-image3.jpg',
    title: '5G and the Future',
    author: 'Alex Johnson',
    description: 'An in-depth look at how 5G technology is set to change the way we connect and communicate.',
  },
];

// Footer Section
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.newsletter}>
        <h4>Subscribe to Our Newsletter</h4>
        <div style={styles.newsletterContent}>
          <input type="email" placeholder="Enter your email" style={styles.emailInput} />
          <button style={styles.newsletterButton}>Subscribe</button>
        </div>
        <p>Stay updated with the latest news and articles</p>
      </div>
      <hr style={styles.separator} />
      <div style={styles.footerLinks}>
        <div style={styles.footerColumn}>
          <h5>Resources</h5>
          <a href="/" style={styles.footerLink}>Institutions</a>
          <a href="/" style={styles.footerLink}>Research</a>
          <a href="/" style={styles.footerLink}>Terms & Conditions</a>
        </div>
        <div style={styles.footerColumn}>
          <h5>Support</h5>
          <a href="/" style={styles.footerLink}>Guidelines</a>
          <a href="/" style={styles.footerLink}>Help Center</a>
          <a href="/" style={styles.footerLink}>Privacy Policy</a>
        </div>
        <div style={styles.footerColumn}>
          <h5>Company</h5>
          <a href="/" style={styles.footerLink}>About Us</a>
          <a href="/" style={styles.footerLink}>Journals</a>
          <a href="/" style={styles.footerLink}>Latest Updates</a>
        </div>
      </div>
      <div style={styles.socialContainer}>
        <p>Follow us on:</p>
        <img src={facebooklogo} alt="Facebook" style={styles.socialIcon} />
        <img src={instagramlogo} alt="Instagram" style={styles.socialIcon} />
        <img src={twitterlogo} alt="Twitter" style={styles.socialIcon} />
      </div>
    </footer>
  );
};

// Post Page Component
const PostPage = () => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  const handleView = () => {
    setViews(views + 1);
  };

  useEffect(() => {
    handleView();
  }, []);

  const isTablet = windowWidth <= 1024 && windowWidth > 768;
  const isMobile = windowWidth <= 768;

  return (
    <div style={styles.pageLayout}>
      <Header />
      <div style={{ ...styles.pageContent, flexDirection: isTablet || isMobile ? 'column' : 'row' }}>
        {!isMobile && <ProfileSection />}
        <div style={styles.centerSection}>
          <div style={styles.scrollableContent}>
            {[...Array(6)].map((_, index) => (
              <div key={index} style={styles.articleContainer}>
                <h1 style={styles.articleTitle}>The Pre-Roman Tribes of South East England</h1>
                <p>by Adrian C Grant</p>
                <p>Article content goes here...</p>
                <div style={styles.articleActions}>
                  <FaHeart
                    style={{ ...styles.iconButton, color: liked ? 'red' : 'black' }}
                    onClick={handleLike}
                  />
                  <span>{likes}</span>
                  <FaEye style={styles.iconButton} />
                  <span>{views}</span>
                  <FaShare style={styles.iconButton} />
                  <FaBookmark style={styles.iconButton} />
                  <FaEllipsisV style={styles.moreButton} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isMobile && <MainContent />}
      </div>
      <Footer />
    </div>
  );
};

/// Inline Styles
const styles = {
  header: {
    backgroundColor: 'white',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  pageLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  pageContent: {
    display: 'flex',
    flex: 1,
    marginTop: '70px',
    padding: '20px',
  },
  profileSection: {
    width: '250px',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  profileCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  profileRole: {
    color: '#666',
    marginBottom: '20px',
  },
  connectionSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  connectionItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  textWrapper: {
    fontSize: '14px',
    color: '#555',
  },
  createPostButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  centerSection: {
    flex: 1,
    padding: '0 20px',
  },
  scrollableContent: {
    maxHeight: '100vh',
    overflowY: 'scroll',
  },
  articleContainer: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  articleTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  articleActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  iconButton: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  moreButton: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  mainContent: {
    width: '300px',
    padding: '20px',
  },
  mainHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  storyCardContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  storyCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  storyImage: {
    width: '100%',
    height: '150px',
    borderRadius: '8px',
    marginBottom: '10px',
    objectFit: 'cover',
  },
  storyContent: {
    textAlign: 'left',
  },
  storyTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  storyAuthor: {
    color: '#666',
    marginBottom: '10px',
  },
  storyDescription: {
    fontSize: '14px',
    color: '#333',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
  },
  newsletter: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  newsletterContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  emailInput: {
    padding: '10px',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ddd',
    width: '250px',
  },
  newsletterButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  },
  separator: {
    margin: '20px 0',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  footerColumn: {
    width: '30%',
  },
  footerLink: {
    display: 'block',
    color: '#007bff',
    marginBottom: '10px',
    textDecoration: 'none',
  },
  socialContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  socialIcon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
};

export default PostPage;
