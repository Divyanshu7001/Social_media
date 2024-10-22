import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandindPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Homepage from "./components/HomePage";
import UploadPage from "./components/UploadPage";
import ProfileCard from "./components/ProfileCard";
import CreatePost from "./components/Createpost";
import Article from "./components/Article";
import JournalsPage from "./components/JournalsPage";
import JournalDetails from "./components/JournalDetails";
import UploadPaperDetails from "./components/UploadPaperDetails";
import { Toaster } from "react-hot-toast";
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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/journals" element={<JournalsPage />} />
      <Route path="/journals/journal-details" element={<JournalDetails />} />
      <Route path="/Upload" element={<UploadPage />} />
      <Route path="/Createpost" element={<CreatePost />} />
      <Route path="/ProfileCard" element={<ProfileCard />} />
      <Route path="/Article" element={<Article />} />
      <Route path="/UploadPaperDetails" element={<UploadPaperDetails />} />
    </Routes>
    <Toaster position="top-center" reverseOrder={false} />
  </Router>
);

export default App;
