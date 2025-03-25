import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignupPage from "./SignupPage";
import { Context } from "../index.js";
import LoginPage from "./LoginPage.js";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import part1 from "../assets/svg/part1.svg";
import part2 from "../assets/svg/biology.svg";
import { ReactComponent as Business } from "../assets/svg/business.svg";
import { ReactComponent as Pharmacy } from "../assets/svg/pharmacy.svg";
import { ReactComponent as Biology } from "../assets/svg/biology.svg";
import { ReactComponent as Cs } from "../assets/svg/cs.svg";
import { ReactComponent as Engneering } from "../assets/svg/engneering.svg";
import { ReactComponent as Information } from "../assets/svg/information.svg";
import { ReactComponent as Journals } from "../assets/svg/journals.svg";
import { ReactComponent as Members } from "../assets/svg/members.svg";
import { ReactComponent as Paper } from "../assets/svg/paper.svg";
import { ReactComponent as Review } from "../assets/svg/review.svg";
import { ReactComponent as Research } from "../assets/svg/research.svg";
import { ReactComponent as Innovate } from "../assets/svg/innovate.svg";
import { ReactComponent as Global } from "../assets/svg/global.svg";
import { ReactComponent as Contact } from "../assets/svg/contact.svg";


// import { FiSearch, FiUser } from "react-icons/fi"; // Using react-icons for the search and user icons

// Inline styles for the Landing Page
// const landingPageStyle = {
//   padding: "80px 20px", // Adjusted padding to account for the fixed header
// };

// const contentStyle = {
//   marginTop: "20px",
// };

// const sectionsStyle = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "15px",
// };


const LandingPage = () => {
  const { popup, btn, isAuthenticated } = useContext(Context)
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate("home")
      console.log("authtrue")
    }
    else {
      console.log("authfalse")
      navigate("/")
    }
  }, [isAuthenticated])
  return (
    <>
      {/* Header/Navbar */}
      <Navbar />
      {popup && (btn === "signup") && <SignupPage />
      }
      {popup && (btn === "login") && <LoginPage />
      }


      {/* Main Content */}
      <div className={popup ? " bg-black bg-opacity-50" : "bg-white"}>
        {/* part -1 */}
        <div className="mx-2 md:mx-10 flex">
          <div className="px-5 lg:w-1/2 my-5 w-full">
            <div className="mt-[15%] relative">
              <input type="text" className="border-2 border-gray-500 rounded-md w-full sm:w-1/2 md:w-1/2 py-1 px-10 z-10 text-gray-600 font-semibold" placeholder="What are you Looking for?" />
              <FiSearch className="absolute top-2 left-3" size={20} color="#6b7280" />
            </div>
            <h1 className="mt-5 text-3xl font-bold">Elevate Your Research, Expand</h1>
            <p className="mt-2  text-gray-400 text-3xl font-bold">Your Network</p>
            <p className="mt-4 text-gray-500 ">Focused to publishing significant  research. Let’s make a Positive <br></br>change, together. Are you in?</p>
            <button className="mt-10 bg-primary text-white px-5 py-2 rounded-md flex items-center">Upload Your Article <FaArrowRight className="ml-3" /></button>
          </div>
          <div className="w-1/2 hidden lg:block">
            <img src={part1} alt="img" width={550} />
          </div>
        </div>

        {/* part -2  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[10px] sm:mx-[20px] md:mx-[50px] lg:mx-[100px] mt-20 gap-8 text-center">
          {/* Paper Published Section */}
          <div className="flex flex-col items-center">
            <Paper />
            <p className="mt-2 font-bold text-lg">2500+</p>
            <p className="font-bold text-lg">Papers Published</p>
          </div>

          {/* Peer Reviewed Section */}
          <div className="flex flex-col items-center">
            <Review />
            <p className="mt-2 font-bold text-lg">100%</p>
            <p className="font-bold text-lg">Peer Reviewed</p>
          </div>

          {/* Journals Section */}
          <div className="flex flex-col items-center">
            <Journals />
            <p className="mt-2 font-bold text-lg">6</p>
            <p className="font-bold text-lg">Journals</p>
          </div>

          {/* Editorial Members Section */}
          <div className="flex flex-col items-center">
            <Members />
            <p className="mt-2 font-bold text-lg">250+</p>
            <p className="font-bold text-lg">Editorial Members</p>
          </div>


        </div>

        {/* part - 3 */}
        <div style={{ backgroundColor: "#393AF9", scrollbarWidth: "none" }} className="text-white w-full mt-32 mb-5 pb-10 rounded-tr-none rounded-bl-none lg:rounded-tr-[250px] lg:rounded-bl-[250px]">
          <h1 className="text-center pt-16 text-3xl font-bold">Explore Our Categories</h1>
          <p className="w-10/12 mx-auto mt-10 text-center">
            We publish mission-driven engineering, technology, and scientific research that addresses pressing societal issues in line with the future. In order to free research paper publication that affects thinking, changes policies, and positively impacts lives outside of academia, we cooperate with academics who work across disciplines and nations as well as with industry.
          </p>

          {/* Horizontal Scrollable Container */}
          <div className="w-11/12 lg:w-10/12 xl:w-10/12 mx-auto mt-12  overflow-x-auto snap-x snap-mandatory flex space-x-8 py-4 px-10 " style={{
            scrollbarWidth: "none", // Firefox
          }}>
            {/* Engineering Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-1">
                <p className="font-bold text-lg">Engineering</p>
                <FaArrowRight color="gray" />
              </div>
              <Engneering className="w-full" />
            </div>

            {/* Computer Science Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-1">
                <p className="font-bold text-lg">Computer Science</p>
                <FaArrowRight color="gray" />
              </div>
              <Cs className="w-full" />
            </div>

            {/* Information Technology Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-1">
                <p className="font-bold text-lg">Information Technology</p>
                <FaArrowRight color="gray" />
              </div>
              <Information className="w-full" />
            </div>

            {/* Pharmacy Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-3">
                <p className="font-bold text-lg">Pharmacy</p>
                <FaArrowRight color="gray" />
              </div>
              <div>
                <Pharmacy className="w-full" />
              </div>
            </div>

            {/* Biology Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-3">
                <p className="font-bold text-lg">Biology</p>
                <FaArrowRight color="gray" />
              </div>
              <Biology className="w-full" />
            </div>

            {/* Business Management Section */}
            <div className="bg-white text-black p-4 rounded-lg shadow-lg flex-shrink-0 snap-center w-72">
              <div className="flex justify-between items-center mx-5 mt-3">
                <p className="font-bold text-lg">Business Management</p>
                <FaArrowRight color="gray" />
              </div>
              <Business className="w-full" />
            </div>
          </div>

          {/* Swipe Header with reduced size */}
          <div className="text-white rounded-lg hidden lg:flex p-4 items-center justify-center sm:col-span-2 md:col-span-2 xl:col-span-1">
            <FaArrowLeft size={20} />
            <p className="text-xl font-semibold ml-2">Swipe</p>
          </div>
        </div>


        {/* part 4 */}
        <div className="mx-0 md:mx-10 mt-24">
          <h1 className="text-center text-3xl font-semibold">Discover Our Mission</h1>
          <div className="flex-col flex md:flex-row mx-10 justify-center items-center gap-10">
            <div><Innovate width={300} height={400} /></div>
            <div>
              <h4 className="text-3xl font-semibold">Innovate, Connect, Publish</h4>
              <p className="mt-5 text-gray-500">Your work will impact international journal researchers outside your field and potentially increase exposure.With open access, any international journal researcher can read and create on the findings of others without impediment and without paying any fee, accelerating the author's discoveries among all.</p>
            </div>
          </div>
          <div className="flex-col flex md:flex-row mt-5 md:mt-0 mx-10 justify-center items-center gap-10">
            <div>
              <h4 className="text-3xl font-semibold">Uniting Researchers for a Better Tomorrow</h4>
              <p className="mt-5 text-gray-500 pr-5">Increase your work's visibility, availability, and readership online, which attracts good citations through international journal papers.All articles are evaluated using standards, including the international research publication or ideas' excellence, novelty, and significance.</p>
            </div>
            <div><Research width={300} height={400} /></div>
          </div>
        </div>
        <div className="text-center text-3xl font-semibold">Institutions</div>
        <div className="bg-gray-300 w-full h-[500px] mt-8">
          <div className="pt-52 md:pt-80 px-5 md:px-20"> <h4 className="text-2xl font-semibold">Institution Name1</h4>
            <p className="mt-5 w-full xl:w-1/4 text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla semper sed</p></div>
        </div>
        <div className="text-center my-10">
          <button className="bg-primary w-32 py-2 px-4 rounded-lg text-white">View All </button>
        </div>
        {/* part 5 */}
        <div className="flex-col flex lg:flex-row px-10 py-7" style={{ backgroundColor: "#0000FF1A" }}>
          <div className="w-[100%] text-center lg:text-start lg:w-[50%] mt-5 order-2 lg:order-none">
            <h1 className="font-bold text-2xl">Be Part of a Global Research Network!</h1>
            <p className="mt-5"><span className="font-bold text-gray-500">Your Research Journey Begins Here,</span> Create Your Profile and Collaborate on Cutting-Edge Studies.</p>
            <button className="bg-primary mt-6 px-6 py-2 rounded-md text-white">Create Your Profile</button>
          </div>
          <div className="order-1 lg:order-none w-[100%] lg:w-[50%]">
            <Global height={300} className="w-full" />
          </div>
        </div>

        {/* part 6 */}
        <div className="mt-12">
          <h1 className="text-center text-2xl font-bold">Contact Us</h1>
          <div className="flex mx-5 md:mx-12 gap-10">
            <div className="w-[35%] hidden lg:block">
              <Contact className="w-full" />
            </div>
            <div className="my-2 lg:my-10 border-2 lg:border-none shadow-lg w-[100%] lg:w-[65%]">
              <div className="flex flex-col md:flex-row gap-5 mx-5 py-10 px-0 sm:px-5 ">
                <input type="text" placeholder="Your Name *" className="py-2 px-5 outline-none w-full" style={{ backgroundColor: "#F5F5F5" }} />
                <input type="text" placeholder="Your Email *" className="py-2 px-5 outline-none w-full" style={{ backgroundColor: "#F5F5F5" }} />
                <input type="text" placeholder="Your Phone *" className="py-2 px-5 outline-none w-full" style={{ backgroundColor: "#F5F5F5" }} />
              </div>
              <div className="w-full px-5 sm:px-10">
                <textarea name="Your Message" rows={8} style={{ backgroundColor: "#F5F5F5", resize: "none" }} className="w-full outline-none px-5 pt-5" placeholder="Your Message"></textarea>
              </div>
              <div className="text-right pr-10 mb-10">
                <button className="bg-primary mt-6 px-6 py-2 rounded-md text-white">Send Message</button>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div >
    </>
  );
};

export default LandingPage;
