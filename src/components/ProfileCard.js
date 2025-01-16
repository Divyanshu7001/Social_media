import React from "react";
// import "../style/HomePage.css";

import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const navigate = useNavigate();

  return (
    <div className="group-24">
      <div className="overlap-5">
        <img className="ellipse-2" alt="Ellipse" src="path/to/Ellipse4" />
        <div className="text-wrapper-40">John Paul</div>

        <div className="group-25" onClick={() => navigate("/connection")}>
          <img
            className="img-3"
            alt="Fluent people"
            src="path/to/fluentpeople24regular"
          />
          <div className="text-wrapper-41">My Connections</div>
        </div>

        <div className="group-26" onClick={() => navigate("/notifications")}>
          <img
            className="img-3"
            alt="Clarity notification"
            src="path/to/claritynotificationline"
          />
          <div className="group-27">
            <div className="text-wrapper-42">Notifications</div>
          </div>
        </div>

        <div className="group-28" onClick={() => navigate("/messages")}>
          <img
            className="img-3"
            alt="Material symbols"
            src="path/to/materialsymbolslightchatoutline"
          />
          <div className="group-29">
            <div className="text-wrapper-42">Message</div>
          </div>
        </div>

        <div className="group-30" onClick={() => navigate("/saved-items")}>
          <img
            className="img-3"
            alt="Iconamoon bookmark"
            src="path/to/iconamoonbookmarkthin"
          />
          <div className="text-wrapper-41">Saved Items</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
