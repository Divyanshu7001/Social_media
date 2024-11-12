import React, { useContext, useEffect } from "react";
import { Context } from "./index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandindPage.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import Homepage from "./components/HomePage.js";
import UploadPage from "./components/UploadPage.js";
import ProfileCard from "./components/ProfileCard.js";
import CreatePost from "./components/Createpost.js";
import Article from "./components/Article.js";
import JournalsPage from "./components/JournalsPage.js";
import JournalDetails from "./components/JournalDetails.js";
import UploadPaperDetails from "./components/UploadPaperDetails.js";
import Profile from "./components/Profile.js";
import Journals from "./components/Journals.js";
import { Toaster } from "react-hot-toast";
import ViewProfile from "./components/ViewProfile.js";
import OtherProfile from "./components/OtherProfile.js";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Homepage } from './components/HomePage';
//import Institutions from './components/Institutions';
//import Research from './components/Research';
///import Terms from './components/Terms';
//import Guidelines from './components/Guidelines';
//import Help from './components/Help';
//import Privacy from './components/Privacy';
//import About from './components/About';
//import Journals from './components/Journals';
//import Updates from './components/Updates';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  useEffect(() => {
    const isAuthenticatedFromLocalStorage = JSON.parse(
      localStorage.getItem("isAuthenticated")
    );
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user")); // Parse user as JSON

    setIsAuthenticated(isAuthenticatedFromLocalStorage);
    setUser(userFromLocalStorage || {});
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/journals" element={<JournalsPage />} />
          <Route
            path="/journals/journal-details"
            element={<JournalDetails />}
          />
          <Route path="/Upload" element={<UploadPage />} />
          <Route path="/Createpost" element={<CreatePost />} />
          <Route path="/ProfileCard" element={<ProfileCard />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/UploadPaperDetails" element={<UploadPaperDetails />} />
          <Route path="/profileView" element={<ViewProfile />} />
          <Route path="/connection" element={<Profile />} />
          <Route path="/institutions" element={<Journals />} />
          <Route path="/profile" element={<OtherProfile />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </>
  );
};

export default App;
