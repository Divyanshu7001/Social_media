import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const Context = createContext({ isAuthenticated: false });

const Appwrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [savedFiles, setSavedFiles] = useState({});
  const [myUploads, setMyUploads] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [followersData, setFollowersData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [btn, setBtn] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  const toggle = () => {
    setPopup(!popup);
  };

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        profileData,
        setProfileData,
        savedFiles,
        setSavedFiles,
        myUploads,
        setMyUploads,
        followersData,
        setFollowersData,
        followingData,
        setFollowingData,
        fetchData,
        setFetchData,
        popup,
        setPopup,
        toggle,
        btn,
        setBtn,
        token,
        setToken
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Appwrapper />);
