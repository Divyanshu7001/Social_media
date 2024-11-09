import React, { useState } from "react";
import Navbar from "./Navbar";
import Ellipse4 from "../assets/img/Ellipse4.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "../assets/img/EditIconBlack.png";
import EditIconBlack from "../assets/img/EditIconBlack.png";
import Modal5 from "./modals/Modal5";
import Modal4 from "./modals/Modal4";
import Modal3 from "./modals/Modal3";
import Modal2 from "./modals/Modal2";
import Modal1 from "./modals/Modal1";

const ViewProfile = () => {
  const [button1Clicked, setbutton1Clicked] = useState(false);
  const [button2Clicked, setbutton2Clicked] = useState(false);
  const [button3Clicked, setbutton3Clicked] = useState(false);
  const [button4Clicked, setbutton4Clicked] = useState(false);
  const [button5Clicked, setbutton5Clicked] = useState(false);

  const [employmentOpen, setEmploymentOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [fundingOpen, setFundingOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("uploads");
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const addSkill = (event) => {
    // event.preventDefault();
    if (input && !skills.includes(input)) {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
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
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center">

      
      <div className="h-[1300px] relative w-[1440px]">

      {button1Clicked? 
    <Modal1 setbutton1Clicked={setbutton1Clicked}/>
    :''}
    
      
    {button2Clicked? 
    <Modal2 setbutton2Clicked={setbutton2Clicked}/>
    :''}

    {button3Clicked? 
        <Modal3 setbutton3Clicked={setbutton3Clicked}/>
    :''}

    {button4Clicked? 
        <Modal4 setbutton4Clicked={setbutton4Clicked}/>
    :''}

    {button5Clicked? 
        <Modal5 setbutton5Clicked={setbutton5Clicked}/>
    :''}

        <Navbar />
        <div className="p-4">
          <div className="bg-white rounded-lg">
            {/* Profile Header */}
            <div className="flex justify-between">
              {/* Section 1 */}
              <div className="w-[60%]">
                <div className="flex px-8">
                  <div className="flex items-center p-4 flex-col">
                    <img
                      src={Ellipse4}
                      alt="profile"
                      className="rounded-full w-[90px] h-[90px]"
                    />
                    <h2 className="text-xl font-semibold mt-5">John Paul</h2>
                  </div>
                  <div className="pl-[70px] pt-[10px]">
                    <div className="ml-4">
                      <div className="flex py-6">
                        <div className="flex flex-col items-center text-black font-bold px-5">
                          <p>0</p>
                          <p>Followers</p>
                        </div>
                        <div className="flex flex-col items-center text-black font-bold px-5">
                          <p>0</p>
                          <p>Following</p>
                        </div>
                        <div className="flex flex-col items-center text-black font-bold px-5">
                          <p>0</p>
                          <p>Views</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-end">
                          <p className="font-bold">5%</p>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full">
                          <div
                            className="bg-[#0000ff] h-[15px] rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border-r border-gray-300 pr-4">
                  {/* Biography */}
                  <div className="p-4">
                    <textarea
                      className="w-full p-2 mt-2 border rounded"
                      placeholder="Add Biography"
                    />
                  </div>

                  {/* Employment Section */}
                  <div>
                    <div className="p-4 flex justify-between border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[45px]">
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
                        <button onClick={()=>{setbutton1Clicked(prev=>!prev)}}  className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                    {employmentOpen && (
                      <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10">
                        <p>
                          Senior Developer &nbsp;|&nbsp; Production Department
                        </p>
                        <p>ZOHO, Chennai, India</p>
                        <p>01.04.2000 - Present</p>
                        <p>https://github.com/karan</p>
                      </div>
                    )}
                  </div>

                  {/* Education Section */}
                  <div>
                    <div className="p-4 flex justify-between border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[45px]">
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
                        <button onClick={()=>{setbutton2Clicked(prev=>!prev)}} className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                    {educationOpen && (
                      <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10">
                        <p>Role: Developer</p>
                        <p>Department: Computer Science</p>
                        <p>University Name, City, Region, Country</p>
                        <p>Start Date - End Date</p>
                        <p>URL</p>
                      </div>
                    )}
                  </div>

                  {/* Professional Activities Section */}
                  <div>
                    <div className="p-4 flex justify-between border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[45px]">
                      <div>
                        <div className="flex">
                          <h3 className="text-lg font-medium pr-2">
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
                        <button onClick={()=>{setbutton3Clicked(prev=>!prev)}} className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                    {activitiesOpen && (
                      <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10">
                        <p>Role: Speaker</p>
                        <p>Event: Tech Conference 2021</p>
                        <p>Location: New York, USA</p>
                        <p>Date: 01.05.2021</p>
                      </div>
                    )}
                  </div>

                  {/* Funding Section */}
                  <div>
                    <div className="p-4 flex justify-between border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[45px]">
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
                        <button onClick={()=>{setbutton4Clicked(prev=>!prev)}} className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                    {fundingOpen && (
                      <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10">
                        <p>Funding Organization</p>
                        <p>Project Name</p>
                        <p>Start Date - End Date</p>
                        <p>Amount: $10,000</p>
                      </div>
                    )}
                  </div>
                  {/* Work Section */}
                  <div>
                    <div className="p-4 flex justify-between border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[45px]">
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
                        <button onClick={()=>{setbutton5Clicked(prev=>!prev)}} className="mt-2 bg-[#0000ff] text-white py-[7px] px-[21px] rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                    {workOpen && (
                      <div className="mt-2 border-[1px] rounded-[10px]  mr-10 ml-5 px-7 py-6 leading-10">
                        <p>Work Title | Publication Date</p>
                        <p>Journal Title</p>
                        <p>Link</p>
                        <p>Contributors </p>
                        <p>Contributor 1</p>
                        <p>Contributor 2</p>
                        <p>Citation </p>
                        <p>Identifier | Relationship</p>
                        <p>Grant Link</p>
                      </div>
                    )}
                  </div>
                  {/* Skill Section */}
                  <div className="w-[92%] pb-4 border-[1px] rounded-[10px] my-[18px] ml-[18px] mr-[50px] border-black">
                    <div className="flex items-center mb-4 border-b-[1px] rounded-b-md border-black">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter Skills"
                        className="flex-1 px-4 py-4 border-none rounded-md focus:outline-none"
                      />
                      <button onClick={addSkill}>
                        <img src={EditIconBlack} className="h-5 w-5 mr-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 p-4">
                      {skills.length < 1 ? (
                        <div className="flex justify-center text-center">
                          <p>No skills yet</p>
                        </div>
                      ) : (
                        <div>
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center px-3 py-1 border rounded-full"
                            >
                              <span className="mr-2">{skill}</span>
                              <button
                                onClick={() => removeSkill(skill)}
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
                </div>
              </div>
              {/* Section 2 */}
              <div className="p-4 w-[40%]">
                <div className="flex justify-end">
                  <div
                    className="bg-[#0000ff] px-10 py-3 text-white flex items-center rounded-md"
                    style={{ maxWidth: "max-content" }}
                  >
                    <img src={EditIcon} className="h-4 w-4" />
                    <p className="pl-[17px]">Edit Profile</p>
                  </div>
                </div>
                {/* Saved Files Section */}
                <div
                  className="flex border-b mt-8 justify-center text-center"
                  // style={{ maxWidth: "max-content" }}
                >
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "uploads"
                        ? "border-b-2 border-black font-bold px-[5rem] text-xl text-black"
                        : "px-[5rem] text-xl text-black font-semibold"
                    }`}
                    onClick={() => setActiveTab("uploads")}
                  >
                    My Uploads
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "saved"
                        ? "border-b-2 border-black font-bold px-[5rem] text-xl text-black"
                        : "px-[5rem] text-xl text-black font-semibold"
                    }`}
                    onClick={() => setActiveTab("saved")}
                  >
                    Saved Files
                  </button>
                </div>

                {/* Content based on selected tab */}
                <div className="mt-6">
                  {activeTab === "uploads" ? (
                    <div className="p-4 border rounded">
                      {/* Content for My Uploads */}
                      <h4 className="text-lg font-medium">
                        The Future of Quantum Computing
                      </h4>
                      <p>By John</p>
                      <p>Dive into the potential of quantum computing...</p>
                      <div className="flex justify-between items-center mt-2">
                        <p>1 Like</p>
                        <p>2 Views</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 border rounded">
                      {/* Content for Saved Files */}
                      <h4 className="text-lg font-medium">
                        Saved Article: AI in Healthcare
                      </h4>
                      <p>By Jane</p>
                      <p>Exploring the impact of AI in modern medicine...</p>
                      <div className="flex justify-between items-center mt-2">
                        <p>5 Likes</p>
                        <p>8 Views</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
