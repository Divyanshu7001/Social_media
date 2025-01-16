import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const Context = createContext({ isAuthenticated: false });

const Appwrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [popup, setPopup] = useState(false)
  const [btn, setBtn] = useState(null);

  const toggle = () => {
    setPopup(!popup);
  };

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, popup, setPopup, toggle, btn, setBtn }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(

  <Appwrapper />
);
