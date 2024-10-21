import React from "react";
import "../style/HomePage.css";
import { useState } from "react";
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import HomePage1 from "./HomePage1.js";
//import Article from "./Article.js";
import Createpost from "./Createpost.js";
// import rectangle60 from "../assets/img/Rectangle 60.svg";
// import Line7 from "../assets/img/Line7.png";
// import iconlike from "../assets/img/iconlike.png";
// import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
// import openmojishare from "../assets/img/openmojishare.png";
// import circummenukebab from "../assets/img/circummenukebab.png";
import iconamoonbookmarkthin from "../assets/img/iconamoonbookmarkthin.png";
import Ellipse4 from "../assets/img/Ellipse4.png";
import fluentpeople24regular from "../assets/img/fluentpeople24regular.png";
import claritynotificationline from "../assets/img/claritynotificationline.png";
import materialsymbolslightchatoutline from "../assets/img/materialsymbolslightchatoutline.png";
// import Footer from "./Footer.js";

// Constants for class names
//const CREATE_POST_CLASS = 'frame-6';
//const BUTTON_TEXT_CLASS = 'text-wrapper-31';

export const Homepage = () => {
  // Declare showPopup state
  const [showPopup, setShowPopup] = useState(false);

  // Define togglePopup function
  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle the popup visibility
  };

  return (
    <div className="HOMEPAGE">
      <div className="div">
        <Navbar />

        {/* {footer section} */}
        {/* <Footer /> */}

        <div className="overlap-group-wrapper">
          <div className="overlap-group-wrapper1">
            <div>
              <HomePage1 />
              {/*<div className="overlap">*/}

              {/*<Article />*/}
              {/*<div className="text-wrapper-8">By John</div>
            <img className="rectangle" alt="Rectangle" src={rectangle60}/>
            <p className="text-wrapper-9">
              Dive into the potential of quantum computing and its implications for solving complex problems in record
              time.
            </p>
            <p className="text-wrapper-10">The Future of Quantum Computing: Transforming IT Landscapes</p>
            <img className="line-2" alt="Line" src={Line7} />
            <div className="group-2">
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
            <img className="circum-menu-kebab" alt="Circum menu kebab" src={circummenukebab} />
          </div>
        </div>



        
        <div className="overlap-group-wrapper">
          <div className="overlap">

            <img className="rectangle" alt="Rectangle" src={rectangle60} />
            <p className="text-wrapper-14">
              Discover how AI is revolutionizing cybersecurity, offering advanced protection while presenting new
              challenges.
            </p>
            <p className="text-wrapper-15">AI in Cybersecurity: A Double-Edged Sword</p>
            <img className="line-3" alt="Line" src={Line7} />
            <div className="text-wrapper-16">By John</div>
            <div className="group-2">
              <div className="group-3">
                <div className="text-wrapper-11">Likes</div>
                <img className="img-2" alt="Icon park outline" src={iconlike}/>
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
            <img className="circum-menu-kebab" alt="Circum menu kebab" src={circummenukebab}/>
          </div>
        </div>
        <div className="group-8">
          <div className="overlap">
            <div className="text-wrapper-16">By John</div>
            <img className="rectangle" alt="Rectangle" src={rectangle60} />
            <p className="text-wrapper-17">
              Explore the diverse applications of blockchain technology in industries such as healthcare, finance, and
              supply chain.
            </p>
            <div className="text-wrapper-15">Blockchain Beyond Cryptocurrency</div>
            <img className="line-3" alt="Line" src={Line7} />
            <div className="group-2">
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
            <img className="circum-menu-kebab" alt="Circum menu kebab" src={circummenukebab} />
          </div>
        </div>
        <div className="group-9">
          <div className="overlap">
            <div className="text-wrapper-18">By John</div>
            <img className="rectangle" alt="Rectangle" src={rectangle60} />
            <p className="text-wrapper-19">
              Understand how 5G technology is set to enhance connectivity, enabling faster data transfer and smarter
              cities.
            </p>
            <div className="text-wrapper-15">5G Technology: Transforming Connectivity</div>
            <img className="line-2" alt="Line" src={Line7} />
            <div className="group-2">
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
            <img className="circum-menu-kebab" alt="Circum menu kebab" src={circummenukebab} />
          </div>
        </div>
        <div className="group-10">
          <div className="overlap">
            <div className="text-wrapper-20">By John</div>
            <img className="rectangle" alt="Rectangle" src={rectangle60} />
            <p className="text-wrapper-21">
              Investigate how big data analytics is driving innovations in personalized medicine and healthcare
              management.
            </p>
            <p className="text-wrapper-15">Big Data Analytics in Healthcare</p>
            <img className="line-4" alt="Line" src={Line7} />
            <div className="group-2">
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
            <img className="circum-menu-kebab" alt="Circum menu kebab" src={circummenukebab} />
          </div>
        </div>
        <div className="group-11">
          <div className="overlap-2">
            <div className="text-wrapper-22">John</div>
            <div className="text-wrapper-23">Chennai, Tamilnadu</div>
            <p className="text-wrapper-24">
              Join our vibrant community of Information Technology scholars and researchers.
            </p>
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
        <div className="group-13">
          <div className="overlap-2">
            <div className="text-wrapper-22">Georgia</div>
            <div className="text-wrapper-23">Ahmedabad, Gujarat</div>
            <p className="text-wrapper-25">
              {" "}
              Collaborate, innovate, and publish groundbreaking research on our comprehensive networking platform.
            </p>
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
        <div className="group-14">
          <div className="overlap-2">
            <div className="text-wrapper-22">George</div>
            <div className="text-wrapper-23">Mumbai</div>
            <p className="text-wrapper-25">
              Understand the new cybersecurity challenges that have emerged with the rise of remote work environments.
            </p>
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
          </div>*/}
            </div>
          </div>
        </div>

        <div className="group-18">
          <div className="overlap-4">
            <div className="group-19">
              <p className="text-wrapper-34">
                Join our vibrant community of Information Technology scholars
                and researchers.
              </p>
              <div className="text-wrapper-35">Top Stories</div>
            </div>
            <div className="group-20">
              <p className="text-wrapper-34">
                IEEE Transactions on Computers
                <br />
                <br />
                Journal of the ACM (JACM)
              </p>
              <div className="text-wrapper-35">Top Journals</div>
            </div>
            <div className="group-21">
              <p className="text-wrapper-34">
                Dive into the potential of quantum computing and its
                implications for solving complex problems in record time.
              </p>
              <div className="text-wrapper-35">Top Articles</div>
            </div>
            <div className="group-22">
              <p className="text-wrapper-36">
                Discover how AI is revolutionizing cybersecurity, offering
                advanced protection while presenting new challenges.
              </p>
              <div className="text-wrapper-35">AI in Cybersecurity</div>
            </div>
            <div className="group-23">
              <p className="text-wrapper-34">
                Understand how 5G technology is set to enhance connectivity
              </p>
              <div className="text-wrapper-35">5G Technology</div>
            </div>
            <div className="text-wrapper-37">Who to Follow</div>
            <Link
              to="/WhotoFollow"
              class="text-wrapper-37"
              style={{ color: "blue" }}
            >
              Who to Follow
            </Link>
            <div className="text-wrapper-38">View all</div>
            <Link
              to="/View all"
              class="text-wrapper-38"
              style={{ color: "blue" }}
            >
              View all
            </Link>
          </div>
        </div>

        {/*<div className={CREATE_POST_CLASS}>*/}
        {/* Create Post button using Link for navigation */}
        {/*<Link to="/Createpost"> 
          <button className={BUTTON_TEXT_CLASS}>Create Post</button>
        </Link>
      {/*</div>*/}
        <div>
          {/* Button to trigger popup */}
          <button
            className="create-post-button"
            style={{
              marginLeft: "90px",
              backgroundColor: "blue",
              borderRadius: "5px",
              marginTop: "571px",
              padding: "10px",
              width: "220px",
              color: "white",
              borderColor: "blue",
            }}
            onClick={togglePopup}
          >
            Create Post
          </button>

          {/* Conditionally render the popup */}
          {showPopup && (
            <Createpost
              closePopup={togglePopup}
            /> /* Pass a function to close the popup */
          )}
        </div>

        <div className="group-24">
          <div className="overlap-5">
            <img className="ellipse-2" alt="Ellipse" src={Ellipse4} />
            <div className="text-wrapper-40">John Paul</div>
            <div className="group-25">
              <img
                className="img-3"
                alt="Fluent people"
                src={fluentpeople24regular}
              />
              <div className="text-wrapper-41">My Connections</div>
              <Link to="/connection" class="text-wrapper-41">
                My Connections
              </Link>
            </div>

            <div className="group-26">
              <img
                className="img-3"
                alt="Clarity notification"
                src={claritynotificationline}
              />
              <div className="group-27">
                <div className="text-wrapper-42">Notifications</div>
                <Link to="/Notifications" class="text-wrapper-42">
                  Notifications
                </Link>
              </div>
            </div>
            <div className="group-28">
              <img
                className="img-3"
                alt="Material symbols"
                src={materialsymbolslightchatoutline}
              />
              <div className="group-29">
                <div className="text-wrapper-42">Message</div>
                <Link to="/Message" class="text-wrapper-42">
                  Message
                </Link>
              </div>
            </div>
            <div className="group-30">
              <div className="text-wrapper-41">Saved Items</div>
              <Link to="/Saved" class="text-wrapper-41">
                Saved Items
              </Link>
              <img
                className="img-3"
                alt="Iconamoon bookmark"
                src={iconamoonbookmarkthin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
