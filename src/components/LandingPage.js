import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import SignupPage from "./SignupPage.js";
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
import { ReactComponent as Engineering } from "../assets/svg/engneering.svg";
import { ReactComponent as Information } from "../assets/svg/information.svg";
import { ReactComponent as Journals } from "../assets/svg/journals.svg";
import { ReactComponent as Members } from "../assets/svg/members.svg";
import { ReactComponent as Paper } from "../assets/svg/paper.svg";
import { ReactComponent as Review } from "../assets/svg/review.svg";
import { ReactComponent as Research } from "../assets/svg/research.svg";
import { ReactComponent as Innovate } from "../assets/svg/innovate.svg";
import { ReactComponent as Global } from "../assets/svg/global.svg";
import { ReactComponent as Contact } from "../assets/svg/contact.svg";
import ForgetPasswordPage from "./ForgetPassword.js";

const LandingPage = () => {
  const { popup, btn, setBtn, setPopup, isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("home");
      console.log("authtrue");
    } else {
      console.log("authfalse");
      navigate("/");
    }
  }, [isAuthenticated]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveImageRender = ({ Component }) => {
    if (windowWidth < 768) {
      return <Component width={350} height={350} />;
    } else if (windowWidth < 1280) {
      return <Component width={450} height={550} />;
    } else {
      return <Component width={750} height={550} />;
    }
  };

  return (
    <>
      {/* Header/Navbar */}
      <Navbar />
      {popup && btn === "signup" && <SignupPage />}
      {popup && btn === "login" && <LoginPage />}
      {popup && btn === "forgetpassword" && <ForgetPasswordPage />}

      {/* Main Content */}
      <div className={!popup && "bg-white overflow-hidden"}>
        {/* part -1 */}
        <div className="w-auto h-full items-center mx-2 md:mx-10 md:grid md:grid-cols-2">
          <div className="px-5 my-5 w-full grid-cols-1">
            <div className="flex gap-2 border-2 border-gray-400 rounded-md w-full xss:w-full sm:w-1/2 md:w-full lg:w-2/3 xl:w-1/2 py-2 text-xl text-gray-400 font-medium ">
              <FiSearch className="ml-3 mt-1" size={30} color="#6b7280" />
              <input
                type="text"
                className="text-xl text-gray-400 font-medium outline-none w-full"
                placeholder="What are you Looking for?"
              />
            </div>
            <h1 className="mt-10 text-5xl font-bold">
              Elevate Your Research, Expand
            </h1>
            <p className="mt-2  text-gray-400 text-4xl font-bold">
              Your Network
            </p>
            <p className="mt-4 text-lg text-gray-500 ">
              Focused to publishing significant research. Let’s make a Positive{" "}
              <br></br>change, together. Are you in?
            </p>
            <button
              className="mt-10 bg-primary text-white px-6 py-3 text-md rounded-md flex font-semibold items-center"
              onClick={() => {
                setPopup(true);
                setBtn("login");
              }}
            >
              Upload Your Article <FaArrowRight className="ml-3" />
            </button>
          </div>
          <div className="grid-cols-1 hidden justify-end md:flex">
            <img src={part1} alt="img" width={750} />
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
        <div
          style={{ backgroundColor: "#393AF9", scrollbarWidth: "none" }}
          className="text-white w-full xss:mt-10 sm:mt-32 mb-5 pb-10 rounded-tr-none rounded-bl-none lg:rounded-tr-[250px] lg:rounded-bl-[250px] relative z-0"
        >
          <div className="absolute inset-0 bg-gray-300 opacity-25 bg-cover lg:rounded-tr-[250px] lg:rounded-bl-[250px]"></div>
          <div className="relative z-10">
            <h1 className="text-center xss:pt-4 sm:pt-16 xss:text-3xl sm:text-4xl font-bold">
              Explore Our Categories
            </h1>
            <p className="xss:w-auto sm:w-10/12 xss:mx-2 sm:mx-auto xss:mt-3 sm:mt-10 text-center">
              We publish mission-driven engineering, technology, and scientific
              research that addresses pressing societal issues in line with the
              future. In order to free research paper publication that affects
              thinking, changes policies, and positively impacts lives outside
              of academia, we cooperate with academics who work across
              disciplines and nations as well as with industry.
            </p>

            {/* Horizontal Scrollable Container */}
            <div
              className="lg:w-full mt-5 lg:container xss:flex space-x-8 py-4 lg:grid lg:grid-rows-2 lg:space-y-8 lg:mx-auto relative snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" absolute bottom-36 left-7 text-white rounded-lg hidden lg:flex items-center justify-center sm:col-span-2 md:col-span-2 xl:col-span-1">
                <FaArrowLeft size={40} />
                <p className="text-3xl font-bold ml-2">Swipe</p>
              </div>
              {/* First Row: Snap Scrollable */}
              <div className="grid-rows-1 flex gap-8 mx-20 ">
                <div className="min-w-[40%] bg-white text-black p-4 rounded-md shadow-lg h-full snap-start">
                  <div className="flex justify-between items-center mx-5 mt-1">
                    <p className="font-bold text-xl">Engineering</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <Engineering className="w-full" />
                </div>

                <div className="min-w-[40%] bg-white text-black p-4 rounded-md shadow-lg h-full snap-start">
                  <div className="flex justify-between items-center mx-5 mt-1">
                    <p className="font-bold text-xl">Computer Science</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <Cs className="w-full" />
                </div>

                <div className="min-w-[40%] bg-white text-black p-4 rounded-md shadow-lg h-full snap-center">
                  <div className="flex justify-between items-center mx-5 mt-1">
                    <p className="font-bold text-xl">Information Technology</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <Information className="w-full" />
                </div>
              </div>

              {/* Second Row: Static Grid */}
              <div className="grid-rows-1 flex gap-8 relative z-20">
                <div className="bg-white text-black p-4 rounded-md shadow-lg h-full ml-52 snap-center min-w-[40%]">
                  <div className="flex justify-between items-center mx-5 mt-3">
                    <p className="font-bold text-xl">Pharmacy</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <div>
                    <Pharmacy className="w-full" />
                  </div>
                </div>

                <div className="bg-white text-black p-4 rounded-md shadow-lg h-full snap-start min-w-[40%]">
                  <div className="flex justify-between items-center mx-5 mt-3">
                    <p className="font-bold text-xl">Biology</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <Biology className="w-full" />
                </div>

                <div className="bg-white text-black p-4 rounded-md shadow-lg h-full snap-center min-w-[40%]">
                  <div className="flex justify-between items-center mx-5 mt-3">
                    <p className="font-bold text-xl">Business Management</p>
                    <FaArrowRight color="gray" />
                  </div>
                  <Business className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 4 */}
        <div className="mx-0 md:mx-10 xss:my-10 md:mt-24">
          <h1 className="text-center xss:text-3xl sm:text-4xl font-bold">
            Discover Our Mission
          </h1>
          <div className="flex-col flex md:flex-row md:mx-7 lg:mx-auto xl:mx-10 xss:mx-3 xs:mx-6 justify-center items-center lg:justify-normal md:gap-10">
            <div className="md:w-1/2 xss:w-auto">
              {responsiveImageRender({ Component: Innovate })}
            </div>
            <div className="w-full">
              <h4 className="xss:text-3xl sm:text-4xl font-bold">
                Innovate, Connect, Publish
              </h4>
              <p className="mt-5 xss:text-md sm:text-lg text-gray-500">
                Your work will impact international journal researchers outside
                your field and potentially increase exposure. With open access,
                any international journal researcher can read and create on the
                findings of others without impediment and without paying any
                fee, accelerating the author's discoveries among all.
              </p>
            </div>
          </div>
          <div className="flex-col-reverse flex md:flex-row mt-5 md:mt-0 xss:mx-3 xs:mx-6 md:mx-7 lg:mx-auto xl:mx-10 justify-center items-center gap-10">
            <div className="w-full">
              {windowWidth < 1024 ? (
                <h4 className="xss:text-3xl sm:text-4xl font-bold">
                  Uniting Researchers for a Better Tomorrow
                </h4>
              ) : (
                <h4 className="xss:text-3xl sm:text-4xl font-bold">
                  Uniting Researchers for a <br /> Better Tomorrow
                </h4>
              )}

              <p className="mt-5 xss:text-md sm:text-lg text-gray-500 pr-5">
                Increase your work's visibility, availability, and readership
                online, which attracts good citations through international
                journal papers. All articles are evaluated using standards,
                including the international research publication or ideas'
                excellence, novelty, and significance.
              </p>
            </div>
            <div className="md:w-1/2 xss:w-auto">
              {responsiveImageRender({ Component: Research })}
            </div>
          </div>
        </div>
        <div className="text-center text-4xl font-bold">Institutions</div>
        <div className="bg-gray-300 w-full h-[500px] mt-8">
          <div className="pt-52 md:pt-80 px-5 md:px-20">
            <h4 className="text-2xl font-semibold">Institution Name1</h4>
            <p className="mt-5 w-full xl:w-1/4 text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla
              semper sed
            </p>
          </div>
        </div>
        <div className="text-center my-10">
          <button className="bg-primary w-32 py-2 px-4 rounded-lg text-white">
            View All
          </button>
        </div>
        {/* part 5 */}
        <div
          className="flex-col flex lg:flex-row  items-center xss:px-2 sm:px-20 xss:pb-4 sm:py-2"
          style={{ backgroundColor: "#0000FF1A" }}
        >
          <div className="w-[100%] text-center lg:text-start lg:w-1/2 sm:mt-5 order-2 lg:order-none xss:space-y-4 sm:space-y-7">
            <h1 className="font-bold xss:text-3xl sm:text-5xl">
              Be Part of a Global Research Network!
            </h1>
            <p className="mt-5">
              <span className="font-bold xss:text-lg sm:text-xl text-gray-500">
                Your Research Journey Begins Here,
              </span>
              <span className="text-md text-gray-500">
                {" "}
                Create Your Profile and Collaborate on <br /> Cutting-Edge
                Studies.
              </span>
            </p>
            <button className="bg-primary mt-6 sm:px-24 xss:px-10 py-3 rounded-md xss:text-lg sm:text-xl font-bold text-white">
              Create Your Profile
            </button>
          </div>
          <div className="lg:w-1/2 xss:w-auto">
            {windowWidth < 768 ? (
              <Global width={400} height={350} />
            ) : (
              <Global width={800} height={550} />
            )}
          </div>
        </div>
        {/* part 6 */}
        <div className="mt-12">
          <h1 className="text-center xss:text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
          <div className="flex mx-5 md:mx-12 gap-10">
            <div className="w-[45%] hidden lg:block">
              <Contact className="w-full" />
            </div>
            <div className="my-2 lg:my-10 border-2 lg:border-none shadow-md w-[100%] lg:w-[65%]">
              <div className="flex flex-col md:flex-row gap-5 mx-5 py-10 px-0 sm:px-5 ">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="py-2 px-5 outline-none w-full"
                  style={{ backgroundColor: "#F5F5F5" }}
                />
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="py-2 px-5 outline-none w-full"
                  style={{ backgroundColor: "#F5F5F5" }}
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="py-2 px-5 outline-none w-full"
                  style={{ backgroundColor: "#F5F5F5" }}
                />
              </div>
              <div className="w-full px-5 sm:px-10">
                <textarea
                  name="Your Message"
                  rows={8}
                  style={{ backgroundColor: "#F5F5F5", resize: "none" }}
                  className="w-full outline-none px-5 pt-5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-right pr-10 mb-10">
                <button className="bg-primary mt-6 px-6 py-2 rounded-md text-white">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
