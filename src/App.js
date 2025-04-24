import React, { useContext, useEffect } from "react";
import { Context } from "./index.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
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
import SavedItems from "./components/SavedItems.js";
import ArticleDetails from "./components/ArticleDetails.js";
import api from "./components/api.js";
const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const auth = async () => {
      const isAuthenticatedFromLocalStorage = await JSON.parse(
        localStorage.getItem("isAuthenticated")
      );
      if (setIsAuthenticated) {
        const userIdFromLocal = await JSON.parse(
          localStorage.getItem("userId")
        );
        // Fetch user data securely from your backend API
        try {
          if (userIdFromLocal) {
            //console.log(user.id, "in fetch call");
            await api
              .post(
                `fetchProfile`,
                {
                  user_id: userIdFromLocal,
                },
                {
                  withCredentials: true,
                  headers: { "Content-Type": "application/json" },
                }
              )
              .then((res) => {
                console.log("Fetched User Data: ", res.data);
                setUser(res.data.profile_data.user);
              });
          } else {
            console.log("User is not defined yet");
            setUser({});
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
          setUser({});
        }
      }
      setIsAuthenticated(isAuthenticatedFromLocalStorage);

    };
    auth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
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
          <Route path="/profile/:userId" element={<OtherProfile />} />
          <Route path="/saved" element={<SavedItems />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              marginTop: "60px",
              width: "300px",
            },
          }}
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
