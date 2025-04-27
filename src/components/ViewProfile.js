import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Ellipse4 from "../assets/img/Ellipse4.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "../assets/img/EditIconWhite.png";
import EditIconBlack from "../assets/img/EditIconBlack.png";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ProfileModal } from "./modals/ProfileModal";
import { WorkAddModal, WorkEditModal } from "./modals/WorkModal";
import {
  FundingDetailsAddModal,
  FundingDetailsEditModal,
} from "./modals/FundingModal";
import {
  ProfessionalActivityAddModal,
  ProfessionalActivityEditModal,
} from "./modals/ProfessionalActivitiesModal";
import { EducationAddModal, EducationEditModal } from "./modals/EducationModal";
import {
  EmploymentAddModal,
  EmploymentEditModal,
} from "./modals/EmploymentModal";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import weuieyesonfilled from "../assets/img/weuieyesonfilled.png";
import openmojishare from "../assets/img/openmojishare.png";
import { Context } from "../index.js";
import toast from "react-hot-toast";
import api from "./api.js";
import { BiSolidEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ViewProfile = () => {
  //General States & Context Details
  const { isAuthenticated, user, profileData, setProfileData } =
    useContext(Context);
  if (!setProfileData) {
    console.error("setProfileData is undefined! Check Context Provider.");
  }
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/");
  }
  const [profileImage, setProfileImage] = useState(profileData?.image);
  const [isProfileDetailsAvailable, setIsProfileDetailsAvailable] =
    useState(false);
  const [myUploads, setMyUploads] = useState({});
  const [savedFiles, setSavedFiles] = useState({});

  //console.log("Profile Details Available: ", isProfileDetailsAvailable);

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [popup, setPopup] = useState(false);
  const [addData, setAddData] = useState(false);
  const [editData, setEditData] = useState(false);

  //Biography Section states
  const [isBiographyEdited, setIsBiographyEdited] = useState(false);
  const [tempBiography, setTempBiography] = useState("");

  //Skills Section states
  const [isSkillEdited, setIsSkillEdited] = useState(false);
  const [skills, setSkills] = useState(
    profileData?.profile?.skills == null ? [] : []
  );
  const [tempSkills, setTempSkills] = useState([]);

  const [input, setInput] = useState("");

  //Employment Section states
  const [button1Clicked, setbutton1Clicked] = useState(false);
  const [employmentOpen, setEmploymentOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [employeeData, setEmployeeData] = useState([
    profileData?.profile?.employee || "No Employee Data",
  ]);

  //Education Section States
  const [button2Clicked, setbutton2Clicked] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [educationToEdit, setEducationToEdit] = useState(null);
  const [educationData, setEducationData] = useState([
    profileData?.profile?.education || "No Education Data",
  ]);

  //Porfessional Activity Section states
  const [button3Clicked, setbutton3Clicked] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [ProfessionalActivityToEdit, setProfessionalActivityToEdit] =
    useState(null);
  const [professionalActivityDetails, setProfessionalActivityDetails] =
    useState([
      profileData?.profile?.professional_activities ||
        "No Professional Activity Details",
    ]);

  //Funding Section States
  const [button4Clicked, setbutton4Clicked] = useState(false);
  const [fundingOpen, setFundingOpen] = useState(false);
  const [fundingDetailsToEdit, setFundingDetailsToEdit] = useState(null);
  const [fundingDetails, setFundingDetails] = useState([
    profileData?.profile?.funding_details || "No Funding Details",
  ]);

  //Works Section States
  const [button5Clicked, setbutton5Clicked] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [workToEdit, setWorkToEdit] = useState(null);
  const [works, setWorks] = useState([
    profileData?.profile?.works || "No Work Details",
  ]);

  //Profile States
  const [button6Clicked, setbutton6Clicked] = useState(false);

  const [activeTab, setActiveTab] = useState("uploads");

  const fetchProfileData = async () => {
    try {
      if (user && user.id) {
        //console.log(user.id, "in fetch call");
        await api
          .post(
            `fetchProfile`,
            {
              user_id: user.id,
            },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            //console.log("Fetched User Data: ", res.data);
            setIsDataFetched(true);
            setProfileData(res.data.profile_data.user);
            setIsProfileDetailsAvailable(
              res.data.profile_data.user.profile ? true : false
            );
            setProfileImage(res.data.profile_data.user.image);
            setSkills(
              res.data.profile_data.user.profile.skills == null
                ? []
                : res.data.profile_data.user.profile.skills
            );
            setMyUploads(res.data.article_upload);
            setSavedFiles(res.data.saved_data);
            setEmployeeData(res.data.profile_data.user.profile.employee);
            setEducationData(res.data.profile_data.user.profile.education);
            setFundingDetails(
              res.data.profile_data.user.profile.funding_details
            );
            setProfessionalActivityDetails(
              res.data.profile_data.user.profile.professional_activities
            );
            setWorks(res.data.profile_data.user.profile.works);
          });
      } else {
        console.log("User is not defined yet");
        setIsDataFetched(false);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setIsDataFetched(false);
    }
  };

  // console.log("isData Fetched value: ", isDataFetched);

  // console.log("My Uploads Data: ", myUploads);
  // console.log("Saved Files Data: ", savedFiles);

  // console.log("Profile Data: ", profileData);
  // console.log("Education Data: ", educationData);
  // console.log("Employee Data: ", employeeData);
  // console.log("Funding Details: ", fundingDetails);
  // console.log("Professional Activities: ", professionalActivityDetails);
  // console.log("Works: ", works);
  // console.log("Skills: ", skills);
  // console.log("Temp Skills: ", tempSkills);

  const biography = profileData?.profile?.bio || "No Biography yet";

  const addProfileDetails = async (event) => {
    event.preventDefault();
    //console.log(user.id);

    const updatedSkills = [...skills, ...tempSkills];
    setSkills(updatedSkills);
    console.log("Skills in Add api: ", skills);
    try {
      await api
        .post(
          `profileAdd`,
          {
            user_id: user.id,
            bio: isBiographyEdited ? tempBiography : biography,
            skills: updatedSkills,
            type: "profile",
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
          setIsDataFetched(false);
          setTempBiography("");
          setTempSkills([]);
          setIsBiographyEdited(false);
          setIsSkillEdited(false);
        });
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const editProfileDetails = async (e) => {
    e.preventDefault();
    //console.log(user.id);
    const updatedSkills = [...skills, ...tempSkills];
    setSkills(updatedSkills);
    //console.log("Skills in Update api: ", skills);
    try {
      await api
        .post(
          `profileEdit/${user.id}`,
          {
            user_id: user.id,
            bio: isBiographyEdited ? tempBiography : biography,
            skills: updatedSkills,
            type: "profile",
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          //console.log(res.data);
          toast.success(res.data.message);
          setIsDataFetched(false);
          setTempBiography("");
          setTempSkills([]);
          setIsBiographyEdited(false);
          setIsSkillEdited(false);
        });
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const addSkill = (event) => {
    event.preventDefault();
    if (input && !tempSkills.includes(input)) {
      setTempSkills([...tempSkills, input]);
      setInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
    setIsSkillEdited(true);
  };

  useEffect(() => {
    if (!isDataFetched || Object.keys(profileData).length === 0) {
      fetchProfileData();
    }
  }, [user, isDataFetched]);

  const handleEmployeeDelete = async (employee) => {
    try {
      await api
        .post(
          `profileDelete/${employee.id}`,
          { type: "employee" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      console.error("Error deleting employee: ", error.response.data.error);
      toast.error("Error deleting employee: " + error.response.data.error);
    }
  };

  const handleEducationDelete = async (education) => {
    try {
      await api
        .post(
          `profileDelete/${education.id}`,
          { type: "education" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      console.error("Error deleting Education: ", error.response.data.error);
      toast.error("Error deleting Education: " + error.response.data.error);
    }
  };

  const handleProfessionalActivityDelete = async (activity) => {
    try {
      await api
        .post(
          `profileDelete/${activity.id}`,
          { type: "professional_activity" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      console.error(
        "Error deleting Professional Activity: ",
        error.response.data.error
      );
      toast.error(
        "Error deleting Professional Activity: " + error.response.data.error
      );
    }
  };

  const handleFundingDetailsDelete = async (funding) => {
    try {
      await api
        .post(
          `profileDelete/${funding.id}`,
          { type: "funding_details" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      console.error(
        "Error deleting Funding Details: ",
        error.response.data.error
      );
      toast.error(
        "Error deleting Funding Details: " + error.response.data.error
      );
    }
  };

  const handleWorkDelete = async (work) => {
    try {
      await api
        .post(
          `profileDelete/${work.id}`,
          { type: "works" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      console.error("Error deleting employee: ", error.response.data.error);
      toast.error("Error deleting employee: " + error.response.data.error);
    }
  };

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section) => {
    switch (section) {
      case "employment":
        setEmploymentOpen(!employmentOpen);
        break;
      case "education":
        setEducationOpen(!educationOpen);
        break;
      case "activities":
        setActivitiesOpen(!activitiesOpen);
        break;
      case "funding":
        setFundingOpen(!fundingOpen);
        break;
      case "work":
        setWorkOpen(!workOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={
        popup
          ? "w-full h-full -z-20 overflow-x-hidden"
          : "w-full h-full overflow-x-hidden"
      }
    >
      <div className="mx-auto relative">
        {button1Clicked && addData ? (
          <EmploymentAddModal
            setbutton1Clicked={setbutton1Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            setAddData={setAddData}
          />
        ) : (
          ""
        )}
        {button1Clicked && editData ? (
          <EmploymentEditModal
            setbutton1Clicked={setbutton1Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            employeeData={employeeToEdit}
            setEditData={setEditData}
          />
        ) : (
          ""
        )}
        {button2Clicked && addData ? (
          <EducationAddModal
            setbutton2Clicked={setbutton2Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            setAddData={setAddData}
          />
        ) : (
          ""
        )}

        {button2Clicked && editData ? (
          <EducationEditModal
            setbutton2Clicked={setbutton2Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            educationData={educationToEdit}
            setEditData={setEditData}
          />
        ) : (
          ""
        )}

        {button3Clicked && addData ? (
          <ProfessionalActivityAddModal
            setbutton3Clicked={setbutton3Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            setAddData={setAddData}
          />
        ) : (
          ""
        )}
        {button3Clicked && editData ? (
          <ProfessionalActivityEditModal
            setbutton3Clicked={setbutton3Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            professionalActivityData={ProfessionalActivityToEdit}
            setEditData={setEditData}
          />
        ) : (
          ""
        )}

        {button4Clicked && addData ? (
          <FundingDetailsAddModal
            setbutton4Clicked={setbutton4Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            setAddData={setAddData}
          />
        ) : (
          ""
        )}
        {button4Clicked && editData ? (
          <FundingDetailsEditModal
            setbutton4Clicked={setbutton4Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            fundingDetailsData={fundingDetailsToEdit}
            setEditData={setEditData}
          />
        ) : (
          ""
        )}

        {button5Clicked && addData ? (
          <WorkAddModal
            setbutton5Clicked={setbutton5Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            setAddData={setAddData}
          />
        ) : (
          ""
        )}
        {button5Clicked && editData ? (
          <WorkEditModal
            setbutton5Clicked={setbutton5Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
            workData={workToEdit}
            setEditData={setEditData}
          />
        ) : (
          ""
        )}

        {button6Clicked ? (
          <ProfileModal
            setbutton6Clicked={setbutton6Clicked}
            setPopup={setPopup}
            setIsDataFetched={setIsDataFetched}
          />
        ) : (
          ""
        )}
        <Navbar />
        <div className="p-4 xss:mx-2  sm:mx-4">
          <div className="bg-white rounded-lg">
            {/* Profile Header */}
            <div className="flex xss:justify-between xss:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              {/* Section 1 */}
              <div className="lg:w-[60%]">
                <div className="flex xss:mb-4 lg:mb-0 xl:mb-0 xss:justify-evenly lg:justify-normal sm:px-8 w-auto">
                  <div className="flex xss:w-[30%] sm:w-auto items-center sm:p-4  xss:mt-2 lg:mt-0 lg:p-0 flex-col">
                    {/* <img
                      src={profileImage || Ellipse4}
                      alt="profile"
                      className="rounded-full object-cover xss:w-[90px] xss:h-[90px] md:w-[140px] md:h-[120px] lg:h-[90px] lg:w-[90px] xl:h-[120px] xl:w-[120px]"
                    /> */}
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="profile"
                        className="rounded-full object-cover xss:w-[90px] xss:h-[90px] md:w-[140px] md:h-[120px] lg:h-[90px] lg:w-[90px] xl:h-[120px] xl:w-[120px]"
                      />
                    ) : (
                      <CgProfile className="rounded-full object-cover xss:w-[90px] xss:h-[90px] md:w-[140px] md:h-[120px] lg:h-[90px] lg:w-[90px] xl:h-[120px] xl:w-[120px]" />
                    )}
                    <h2 className="xss:text-base text-center sm:text-xl font-bold sm:mt-5  xss:mt-2 lg:mt-1">
                      {user.name}
                    </h2>
                  </div>
                  <div className="sm:pl-[70px] sm:pt-[10px] xss:w-[70%] sm:w-auto lg:w-[60%]">
                    <div className="ml-4 xss:ml-2 lg:mt-9">
                      <div className="flex xss:py-1 sm:py-6 lg:gap-8 lg:py-1 ">
                        <div className="flex flex-col items-center text-gray-800 font-bold sm:px-5 xss:pr-1 lg:text-lg">
                          <p>0</p>
                          <p>Followers</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-800 font-bold sm:px-5 xss:px-1 lg:text-lg">
                          <p>0</p>
                          <p>Following</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-800 font-bold sm:px-5 pl-1 lg:text-lg">
                          <p>0</p>
                          <p>Views</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          <div className="flex justify-end">
                            <p className="font-bold">5%</p>
                          </div>
                          <div className="my-1 w-auto bg-gray-200 rounded-full">
                            <div
                              className="bg-[#0000ff] h-[15px] rounded-full"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex lg:hidden justify-end">
                          <div
                            onClick={() => {
                              setbutton6Clicked((prev) => !prev);
                              setPopup((prev) => !prev);
                            }}
                            className="bg-[#0000ff] xss:px-2 px-4 py-3 xss:py-2 text-white flex items-center rounded-md "
                            style={{ maxWidth: "max-content" }}
                          >
                            <img
                              src={EditIcon}
                              alt="Edit Icon"
                              className="h-5 w-5 xss:h-4 xss:w-4"
                            />
                            <p
                              onClick={() => {
                                setbutton6Clicked((prev) => !prev);
                                setPopup((prev) => !prev);
                              }}
                              className="pl-[12px]"
                            >
                              Edit Profile
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" lg:border-r border-gray-300 lg:pr-6 sm:mx-4">
                  {/* Biography */}
                  <div className="border-2 border-gray-300 rounded-lg sm:my-4">
                    <div className="flex justify-between border-b-2 rounded-md border-gray-300">
                      <h3 className="text-xl p-4 text-gray-300">Biography</h3>
                      {isBiographyEdited ? (
                        <div className="flex gap-4 p-4 xss:gap-2">
                          <button
                            onClick={() => {
                              setIsBiographyEdited(false);
                              setTempBiography("");
                            }}
                            className="text-gray-700 font-semibold text-md rounded-2xl border-black border-[1px] xs:px-6 py-1 xss:px-3"
                          >
                            Cancel
                          </button>
                          {isProfileDetailsAvailable ? (
                            <button
                              onClick={editProfileDetails}
                              className="text-white text-md rounded-2xl font-semibold bg-[#0000ff] xs:px-6 py-1 xss:px-4"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={addProfileDetails}
                              className="text-white text-md rounded-2xl font-semibold bg-[#0000ff] px-6 py-1"
                            >
                              Save
                            </button>
                          )}
                        </div>
                      ) : (
                        <button onClick={() => setIsBiographyEdited(true)}>
                          <img
                            src={EditIconBlack}
                            alt="Edit Icon"
                            className="h-5 w-5 mr-4"
                          />
                        </button>
                      )}
                    </div>
                    <textarea
                      onClick={() => setIsBiographyEdited(true)}
                      value={isBiographyEdited ? tempBiography : biography}
                      onChange={(e) => setTempBiography(e.target.value)}
                      className="w-full p-4 text-lg focus:outline-none placeholder-black"
                      placeholder="Enter Your Details"
                    />
                  </div>
                  {/* Skill Section */}
                  <div className="w-auto pb-4 border-2 rounded-[10px] xss:my-4 border-gray-300">
                    <div
                      className={`flex items-center mb-4 border-b-[1px] rounded-b-md border-gray-300 ${
                        isSkillEdited
                          ? "xss:flex-col xss:items-start xs:flex-row"
                          : "flex"
                      }`}
                    >
                      <input
                        onClick={() => setIsSkillEdited(true)}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Skills"
                        className="flex-1 xss:px-2 xss:py-2 xs:pl-1 xs:px-0 sm:px-4 sm:py-4 border-none rounded-md text-lg focus:outline-none"
                      />
                      {isSkillEdited ? (
                        <div className="flex xs:gap-1 xss:gap-4 sm:gap-4 xss:p-2 xs:px-0 xs:-ml-2 sm:p-4 ">
                          <button
                            onClick={addSkill}
                            className="text-gray-700 text-2xl font-semibold rounded-full border-black border-[1px] px-2"
                          >
                            +
                          </button>
                          <button
                            onClick={() => setIsSkillEdited(false)}
                            className="text-gray-700 font-semibold text-md rounded-2xl border-black border-[1px] px-6 py-1"
                          >
                            Cancel
                          </button>
                          {isProfileDetailsAvailable ? (
                            <button
                              onClick={editProfileDetails}
                              className="text-white text-md rounded-2xl font-semibold bg-[#0000ff] px-6 py-1"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={addProfileDetails}
                              className="text-white text-md rounded-2xl font-semibold bg-[#0000ff] px-6 py-1"
                            >
                              Save
                            </button>
                          )}
                        </div>
                      ) : (
                        <button onClick={() => setIsSkillEdited(true)}>
                          <img
                            src={EditIconBlack}
                            alt="Edit Icon"
                            className="h-5 w-5 mr-4"
                          />
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 p-4 break-words">
                      {skills === null || skills.length < 1 ? (
                        <div className="flex justify-center text-center gap-2">
                          {tempSkills.length < 1 ? (
                            <p>No skills yet</p>
                          ) : (
                            <>
                              {isSkillEdited &&
                                tempSkills.map((tempSkill, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center px-2 py-1 border rounded-full w-auto"
                                  >
                                    <span className="mr-1">{tempSkill}</span>
                                    <button
                                      onClick={() => removeSkill(tempSkill)}
                                      className="text-gray-500 hover:text-red-500 focus:outline-none"
                                    >
                                      ×
                                    </button>
                                  </div>
                                ))}
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="flex gap-2 flex-wrap break-words">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center text-wrap px-3 py-1 border rounded-full"
                            >
                              <span className="mr-2 text-wrap">{skill}</span>

                              <button
                                onClick={() => removeSkill(skill)}
                                className="text-gray-500 hover:text-red-500 focus:outline-none"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          {isSkillEdited &&
                            tempSkills.map((tempSkill, i) => (
                              <div
                                key={i}
                                className="flex items-center px-3 py-1 border rounded-full"
                              >
                                <span className="mr-2">{tempSkill}</span>
                                <button
                                  onClick={() => removeSkill(tempSkill)}
                                  className="text-gray-500 hover:text-red-500 focus:outline-none"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Employment Section */}
                  <div>
                    <div className="p-4 flex justify-between border-2 border-gray-300 rounded-[10px] xss:my-4">
                      <div>
                        <div className="flex">
                          <h3 className="text-lg font-medium pr-2">
                            Employment
                          </h3>
                          <button onClick={() => toggleSection("employment")}>
                            {employmentOpen ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setbutton1Clicked((prev) => !prev);
                            setAddData(true);
                            setPopup((prev) => !prev);
                          }}
                          className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {employmentOpen &&
                      employeeData.map((employee, index) => (
                        <div
                          key={index}
                          className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10 relative"
                        >
                          <p>
                            {employee.role} &nbsp;|&nbsp;
                            {employee.department}
                          </p>
                          <p>
                            {employee.organization}, {employee.city},{" "}
                            {employee.region}
                          </p>
                          <p className="mb-4">
                            {employee.start_date} - {employee.end_date}
                          </p>
                          <div className="flex gap-4 absolute bottom-2 right-4 ">
                            <BiSolidEditAlt
                              onClick={() => {
                                setbutton1Clicked((prev) => !prev);
                                setEditData(true);
                                setEmployeeToEdit(employee);
                                setPopup((prev) => !prev);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                            <RiDeleteBin2Line
                              onClick={() => {
                                handleEmployeeDelete(employee);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Education Section */}
                  <div>
                    <div className="p-4 flex justify-between border-2 border-gray-300 rounded-[10px] xss:my-4">
                      <div>
                        <div className="flex">
                          <h3 className="text-lg font-medium pr-2">
                            Education
                          </h3>
                          <button onClick={() => toggleSection("education")}>
                            {educationOpen ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setbutton2Clicked((prev) => !prev);
                            setAddData(true);
                            setPopup((prev) => !prev);
                          }}
                          className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {educationOpen &&
                      educationData.map((education, index) => (
                        <div
                          key={index}
                          className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10 relative"
                        >
                          <p>Degree: {education.degree}</p>
                          <p>Department: {education.department} </p>
                          <p>
                            University Name: {education.organization_name},
                            {education.city}, {education.region},
                            {education.country}
                          </p>
                          <p className="mb-4">
                            {education.start_date} - {education.end_date}
                          </p>
                          <div className="flex gap-4 absolute bottom-2 right-4">
                            <BiSolidEditAlt
                              onClick={() => {
                                setbutton2Clicked((prev) => !prev);
                                setEditData(true);
                                setEducationToEdit(education);
                                setPopup((prev) => !prev);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                            <RiDeleteBin2Line
                              onClick={() => {
                                handleEducationDelete(education);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Professional Activities Section */}
                  <div>
                    <div className="p-4 flex justify-between border-2 border-gray-300 rounded-[10px] xss:my-4">
                      <div>
                        <div className="flex">
                          <h3 className="sm:text-lg font-medium pr-2 xss:mt-1 xss:text-base xss:pr-0">
                            Professional Activities
                          </h3>
                          <button onClick={() => toggleSection("activities")}>
                            {activitiesOpen ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setbutton3Clicked((prev) => !prev);
                            setAddData(true);
                            setPopup((prev) => !prev);
                          }}
                          className="xss:mt-0 mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {activitiesOpen &&
                      professionalActivityDetails.map((activity, index) => (
                        <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10 relative">
                          <p>Organization Name: {activity.organization_name}</p>
                          <p>Department: {activity.department}</p>
                          <p>
                            Location: {activity.city},{activity.country}
                          </p>
                          <p className="mb-4">
                            Date: {activity.start_date}-{activity.end_date}
                          </p>
                          <div
                            key={index}
                            className="flex gap-4 absolute bottom-2 right-4"
                          >
                            <BiSolidEditAlt
                              onClick={() => {
                                setbutton3Clicked((prev) => !prev);
                                setEditData(true);
                                setProfessionalActivityToEdit(activity);
                                setPopup((prev) => !prev);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                            <RiDeleteBin2Line
                              onClick={() => {
                                handleProfessionalActivityDelete(activity);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Funding Section */}
                  <div>
                    <div className="p-4 flex justify-between border-2 border-gray-300 rounded-[10px] xss:my-4">
                      <div>
                        <div className="flex">
                          <h3 className="text-lg font-medium pr-2">Funding</h3>
                          <button onClick={() => toggleSection("funding")}>
                            {fundingOpen ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setbutton4Clicked((prev) => !prev);
                            setAddData(true);
                            setPopup((prev) => !prev);
                          }}
                          className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {fundingOpen &&
                      fundingDetails.map((funding, index) => (
                        <div
                          key={index}
                          className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10 relative"
                        >
                          <p>
                            Funding Organization:{funding.funding_agency_name} |
                            Funding Type: {funding.funding_type}
                          </p>
                          <p>Project Name:{funding.title}</p>
                          <p>Project Link:{funding.project_link}</p>
                          <p>
                            {funding.start_date} - {funding.end_date}
                          </p>
                          <p className="mb-4">
                            Amount: ${funding.total_funding_amt}
                          </p>
                          <div className="flex gap-4 absolute bottom-2 right-6">
                            <BiSolidEditAlt
                              onClick={() => {
                                setbutton4Clicked((prev) => !prev);
                                setPopup((prev) => !prev);
                                setEditData(true);
                                setFundingDetailsToEdit(funding);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                            <RiDeleteBin2Line
                              onClick={() => {
                                handleFundingDetailsDelete(funding);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* Work Section */}
                  <div>
                    <div className="p-4 flex justify-between border-2 border-gray-300 rounded-[10px] xss:my-4">
                      <div>
                        <div className="flex">
                          <h3 className="text-lg font-medium pr-2">Work</h3>
                          <button onClick={() => toggleSection("work")}>
                            {workOpen ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setbutton5Clicked((prev) => !prev);
                            setAddData(true);
                            setPopup((prev) => !prev);
                          }}
                          className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {workOpen &&
                      works.map((work, index) => (
                        <div
                          key={index}
                          className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10 relative"
                        >
                          <p>
                            {work.work_title} | {work.publication_date}
                          </p>
                          <p>Work Type: {work.work_type}</p>
                          <p>{work.work_title}</p>
                          <p className="mb-4">{work.link}</p>
                          <div className="flex gap-4 absolute bottom-2 right-4">
                            <BiSolidEditAlt
                              onClick={() => {
                                setbutton5Clicked((prev) => !prev);
                                setEditData(true);
                                setWorkToEdit(work);
                                setPopup((prev) => !prev);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                            <RiDeleteBin2Line
                              onClick={() => {
                                handleWorkDelete(work);
                              }}
                              className="text-4xl text-white bg-[#0000ff] rounded-xl p-1"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* Section 2 */}
              <div className="sm:px-4 lg:w-[40%]">
                <div className="flex justify-end xss:hidden lg:flex">
                  <div
                    onClick={() => {
                      setbutton6Clicked((prev) => !prev);
                      setPopup((prev) => !prev);
                    }}
                    className="bg-[#0000ff] px-8 py-3 mr-[8px] text-white flex items-center rounded-md"
                    style={{ maxWidth: "max-content" }}
                  >
                    <img src={EditIcon} alt="Edit Icon" className="h-5 w-5" />
                    <p
                      className="pl-[12px]"
                      onClick={() => {
                        setbutton6Clicked((prev) => !prev);
                        setPopup((prev) => !prev);
                      }}
                    >
                      Edit Profile
                    </p>
                  </div>
                </div>
                {/* Saved Files Section */}
                <div
                  className="flex border-b sm:mt-8 justify-center text-center"
                  // style={{ maxWidth: "max-content" }}
                >
                  <button
                    className={`w-[50%] ${
                      activeTab === "uploads"
                        ? "border-b-2 border-black font-bold px-7 py-3 text-xl text-black"
                        : "px-7 py-3 text-xl text-black font-semibold"
                    }`}
                    onClick={() => setActiveTab("uploads")}
                  >
                    My Uploads
                  </button>
                  <button
                    className={`w-[50%] ${
                      activeTab === "saved"
                        ? "border-b-2 border-black font-bold px-7 py-3 text-xl text-black"
                        : "px-7 py-3 text-xl text-black font-semibold"
                    }`}
                    onClick={() => setActiveTab("saved")}
                  >
                    Saved Files
                  </button>
                </div>

                {/* Content based on selected tab */}
                <div className="mt-6">
                  {activeTab === "uploads" ? (
                    <>
                      {myUploads && myUploads.length > 0 ? (
                        myUploads.map((post, i) => (
                          <div
                            key={i}
                            className="sm:p-3 xss:p-3 border-2 border-gray-300 rounded-lg mb-2"
                          >
                            {/* Content for Saved Files */}
                            <div className="flex sm:space-x-3 md:space-x-3 xss:space-x-2 mx-auto xs:border-b-2 border-gray-400 border-opacity-35">
                              {/* <div className="xss:w-auto xs:w-3/6 h-auto md:w-auto">
                                <img
                                  src="./book.jpg"
                                  alt="Notebook"
                                  className="  w-full xss:h-auto xs:h-[90%] md:h-auto md:w-auto"
                                />
                              </div> */}
                              <div className="flex flex-col space-y-1">
                                <h4 className="sm:text-xl xss:text-md xss:font-bold sm:font-bold">
                                  {post.paper_title}
                                </h4>
                                <p className="sm:text-lg xss:text-md text-gray-600">
                                  By {post.authors}
                                </p>
                                <p className="xs:block sm:text-lg text-gray-600">
                                  Publication Name: {post.publication_name}
                                </p>
                                <p className="xs:block sm:text-lg text-gray-600">
                                  Research Interest: {post.research_interest} |
                                  year: {post.year}
                                </p>
                              </div>
                            </div>
                            <p className="xss:block xs:hidden xss:text-sm sm:text-lg xss:pb-1 text-gray-600 border-b-2 border-gray-300">
                              {post.abstract}
                            </p>
                            <div className="flex justify-between my-1 items-center sm:mx-9">
                              <div className="flex items-center space-x-2">
                                <FontAwesomeIcon
                                  icon={solidHeart}
                                  className="text-red-600 sm:text-xl xss:text-lg"
                                />
                                <span className="sm:text-lg xss:text-base">
                                  1 likes
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <img
                                  src={weuieyesonfilled}
                                  alt="Views"
                                  className="sm:w-7 sm:h-7 xss:w-5 xss:h-5"
                                />
                                <span className="text-lg xss:text-base">
                                  2 Views
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <img
                                  src={openmojishare}
                                  alt="Share"
                                  className="sm:w-7 sm:h-7 xss:h-6 xss:w-6"
                                />
                                <span className="text-lg xss:text-base">
                                  Share
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No uploads yet</p>
                      )}
                    </>
                  ) : (
                    <>
                      {savedFiles ? (
                        <>
                          {savedFiles?.posts?.map((post, i) => (
                            <div
                              key={i}
                              className="sm:p-3 xss:p-3 border-2 border-gray-300 rounded-lg mb-2"
                            >
                              {/* Content for Saved Files */}
                              <div className="flex sm:space-x-3 md:space-x-3 xss:space-x-2 mx-auto xs:border-b-2 border-gray-400 border-opacity-35">
                                <div className="xss:w-2/6 xs:w-2/6 h-auto md:w-2/6 xl:w-1/6">
                                  <img
                                    src={post.image}
                                    alt="Notebook"
                                    className="w-full xss:h-auto xss:w-auto xs:h-auto xs:w-auto md:h-auto md:w-auto"
                                  />
                                </div>
                                <div className="flex flex-col space-y-1">
                                  <h4 className="sm:text-xl xss:text-md xss:font-bold sm:font-bold">
                                    {post.title}
                                  </h4>
                                  <p className="sm:text-lg xss:text-md text-gray-600">
                                    By {post.PostUsername}
                                  </p>
                                  {/* <p className="xs:block sm:text-lg text-gray-600">
                                    Publication Name: {post.publication_name}
                                  </p>
                                  <p className="xs:block sm:text-lg text-gray-600">
                                    Research Interest: {post.research_interest}{" "}
                                    | year: {post.year}
                                  </p> */}
                                </div>
                              </div>
                              <p className="xss:block xs:hidden xss:text-sm sm:text-lg xss:pb-1 text-gray-600 border-b-2 border-gray-300">
                                {post.abstract}
                              </p>
                              <div className="flex justify-between my-1 items-center sm:mx-9">
                                <div className="flex items-center space-x-2">
                                  <FontAwesomeIcon
                                    icon={solidHeart}
                                    className={`${
                                      post.am_i_liked
                                        ? "text-red-600"
                                        : "text-white"
                                    } sm:text-xl xss:text-lg`}
                                  />
                                  <span className="sm:text-lg xss:text-base">
                                    {post.likeCount} likes
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={weuieyesonfilled}
                                    alt="Views"
                                    className="sm:w-7 sm:h-7 xss:w-5 xss:h-5"
                                  />
                                  <span className="text-lg xss:text-base">
                                    {post.viewsCount == null
                                      ? 0
                                      : post.viewsCount}{" "}
                                    Views
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={openmojishare}
                                    alt="Share"
                                    className="sm:w-7 sm:h-7 xss:h-6 xss:w-6"
                                  />
                                  <span className="text-lg xss:text-base">
                                    Share
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                          {savedFiles?.articles?.map((post, i) => (
                            <div
                              key={i}
                              className="sm:p-3 xss:p-3 border-2 border-gray-300 rounded-lg mb-2"
                            >
                              {/* Content for Saved Files */}
                              <div className="flex sm:space-x-3 md:space-x-3 xss:space-x-2 mx-auto xs:border-b-2 border-gray-400 border-opacity-35">
                                <div className="xss:w-auto xs:w-3/6 h-auto md:w-auto">
                                  <img
                                    src="./book.jpg"
                                    alt="Notebook"
                                    className="  w-full xss:h-auto xs:h-[90%] md:h-auto md:w-auto"
                                  />
                                </div>
                                <div className="flex flex-col space-y-1">
                                  <h4 className="sm:text-xl xss:text-md xss:font-bold sm:font-bold">
                                    {post.paper_title}
                                  </h4>
                                  <p className="sm:text-lg xss:text-md text-gray-600">
                                    By {post.authors}
                                  </p>
                                  <p className="xs:block sm:text-lg text-gray-600">
                                    Publication Name: {post.publication_name}
                                  </p>
                                  <p className="xs:block sm:text-lg text-gray-600">
                                    Research Interest: {post.research_interest}{" "}
                                    | year: {post.year}
                                  </p>
                                </div>
                              </div>
                              <p className="xss:block xs:hidden xss:text-sm sm:text-lg xss:pb-1 text-gray-600 border-b-2 border-gray-300">
                                {post.abstract}
                              </p>
                              <div className="flex justify-between my-1 items-center sm:mx-9">
                                <div className="flex items-center space-x-2">
                                  <FontAwesomeIcon
                                    icon={solidHeart}
                                    className="text-red-600 sm:text-xl xss:text-lg"
                                  />
                                  <span className="sm:text-lg xss:text-base">
                                    1 likes
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={weuieyesonfilled}
                                    alt="Views"
                                    className="sm:w-7 sm:h-7 xss:w-5 xss:h-5"
                                  />
                                  <span className="text-lg xss:text-base">
                                    2 Views
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={openmojishare}
                                    alt="Share"
                                    className="sm:w-7 sm:h-7 xss:h-6 xss:w-6"
                                  />
                                  <span className="text-lg xss:text-base">
                                    Share
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p>No Posts Saved Yet</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ViewProfile;
