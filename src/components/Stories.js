import React from "react";
import { Link } from "react-router-dom";
import "../style/HomePage.css"; // Import your CSS file

const Homepage = () => {
  return (
    <div className="group-18">
      <div className="overlap-4">
        <div className="group-19">
          <p className="text-wrapper-34">
            Join our vibrant community of Information Technology scholars and researchers.
          </p>
          <div className="text-wrapper-35">Top Stories</div>
        </div>
        <div className="group-20">
          <p className="text-wrapper-34">
            IEEE Transactions on Computers
            <br />
            Journal of the ACM (JACM)
          </p>
          <div className="text-wrapper-35">Top Journals</div>
        </div>
        <div className="group-21">
          <p className="text-wrapper-34">
            Dive into the potential of quantum computing and its implications for solving complex problems in record time.
          </p>
          <div className="text-wrapper-35">Top Articles</div>
        </div>
        <div className="group-22">
          <p className="text-wrapper-36">
            Discover how AI is revolutionizing cybersecurity, offering advanced protection while presenting new challenges.
          </p>
          <div className="text-wrapper-35">AI in Cybersecurity</div>
        </div>
        <div className="group-23">
          <p className="text-wrapper-34">
            Understand how 5G technology is set to enhance connectivity.
          </p>
          <div className="text-wrapper-35">5G Technology</div>
        </div>
        <div className="text-wrapper-37">Who to Follow</div>
        <Link to="/WhotoFollow" className="text-wrapper-37" style={{ color: "blue" }}>
          Who to Follow
        </Link>
        <div className="text-wrapper-38">View all</div>
        <Link to="/ViewAll" className="text-wrapper-38" style={{ color: "blue" }}>
          View all
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
