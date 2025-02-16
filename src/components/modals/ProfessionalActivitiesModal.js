import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../index";
import toast from "react-hot-toast";
import api from "../api";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
export const ProfessionalActivityAddModal = ({
  setbutton3Clicked,
  setPopup,
  setIsDataFetched,
}) => {
  const { user } = useContext(Context);
  const [organizationName, setOrganizationName] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");

  const handleAddProfessionalActivity = async () => {
    try {
      const data = {
        organization_name: organizationName,
        city,
        region,
        country,
        department,
        degree,
        start_date: startDate ? startDate.getFullYear() : null,
        end_date: endDate,
        profile_id: user.id,
        type: "professional_activity",
      };

      await api
        .post("/profileAdd", data, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          //console.log(res.data.message);
          setbutton3Clicked(false);
          setPopup(false);
          setIsDataFetched(false);
          toast.success(res.data.message);
        });
    } catch (error) {
      //console.log(error);
      toast.error("Error Adding Professional Acitivity:" + error);
    }
  };

  return (
    <div
      onClick={() => {
        setbutton3Clicked(false);
        setPopup(false);
      }}
      className="backdrop-blur-sm z-50 h-auto justify-center items-center w-screen inset-0 fixed bg-black bg-opacity-60 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-auto p-10 pb-24 bg-white rounded-xl  w-[80%] mt-[5vw] mx-auto"
      >
        <div className="bg-white">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-medium">PROFESSIONAL ACTIVITIES</h2>
            <RxCross2
              onClick={() => setbutton3Clicked(false)}
              className="text-2xl"
            />
          </div>
          <hr className="my-[1vw]" />

          <div className="flex justify-between xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Organization Name</label>
              <input
                onChange={(e) => setOrganizationName(e.target.value)}
                value={organizationName}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder="Enter Organization"
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full">
              <label className="font-medium">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder="Enter City"
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Region or state</label>
              <input
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%] xss:w-full ">
              <label className="font-medium">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder="Enter City"
              >
                <option disabled value="" key="">
                  Select Country
                </option>
                <option value="India" key="">
                  India
                </option>
                <option value="Pakistan" key="">
                  Pakistan
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Department</label>
              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full relative">
              <label className="font-medium">Start Date</label>
              <DatePicker
                id="startYear-picker-input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select Start Year"
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
              />

              {/* Calendar Icon */}
              <FaCalendarAlt
                className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.querySelector("#startYear-picker-input").focus(); // Opens the picker
                }}
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full relative">
              <label className="font-medium">Degree/Title</label>
              <DatePicker
                id="degreeYear-picker-input"
                selected={degree}
                onChange={(date) => setDegree(date)}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select Degree Year"
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
              />

              {/* Calendar Icon */}
              <FaCalendarAlt
                className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.querySelector("#degreeYear-picker-input").focus(); // Opens the picker
                }}
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full">
              <label className="font-medium">End Date</label>
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="date"
                placeholder=""
              />
            </div>
          </div>

          {/* <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[100%] '>
                        <label className='font-medium'>Link</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
               </div> */}

          <div className="flex flex-row gap-[1vw] mt-[4vw]">
            <button
              onClick={handleAddProfessionalActivity}
              className="rounded-md px-[6.5vw] py-2 bg-[#0000FF] font-medium  text-white"
            >
              Save
            </button>
            <button
              onClick={() => setbutton3Clicked(false)}
              className="rounded-md px-[6.5vw] py-2 text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfessionalActivityEditModal = ({
  setbutton3Clicked,
  setPopup,
  setIsDataFetched,
  professionalActivityData,
}) => {
  const { user } = useContext(Context);
  const [organizationName, setOrganizationName] = useState(
    professionalActivityData.organization_name
  );
  const [department, setDepartment] = useState(
    professionalActivityData.department
  );
  const [startDate, setStartDate] = useState(
    professionalActivityData.start_date
  );
  const [endDate, setEndDate] = useState(professionalActivityData.end_date);
  const [city, setCity] = useState(professionalActivityData.city);
  const [region, setRegion] = useState(professionalActivityData.region);
  const [country, setCountry] = useState(professionalActivityData.country);
  const [degree, setDegree] = useState(professionalActivityData.degree);

  const handleEditProfessionalActivity = async () => {
    try {
      const data = {
        organization_name: organizationName,
        city,
        region,
        country,
        department,
        degree,
        start_date: startDate ? startDate : null,
        end_date: endDate,
        profile_id: user.id,
        type: "professional_activity",
      };

      await api
        .post("/profileAdd", data, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          //console.log(res.data.message);
          setbutton3Clicked(false);
          setPopup(false);
          setIsDataFetched(false);
          toast.success("Professional Activity Details Updated Successfully");
        });
    } catch (error) {
      //console.log(error);
      toast.error("Error Adding Professional Acitivity:" + error);
    }
  };

  return (
    <div
      onClick={() => {
        setbutton3Clicked(false);
        setPopup(false);
      }}
      className="backdrop-blur-sm z-50 h-auto justify-center items-center w-screen inset-0 fixed bg-black bg-opacity-60 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-auto p-10 pb-24 bg-white rounded-xl  w-[80%] mt-[5vw] mx-auto"
      >
        <div className="bg-white">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-medium">PROFESSIONAL ACTIVITIES</h2>
            <RxCross2
              onClick={() => setbutton3Clicked(false)}
              className="text-2xl"
            />
          </div>
          <hr className="my-[1vw]" />

          <div className="flex justify-between xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Organization Name</label>
              <input
                onChange={(e) => setOrganizationName(e.target.value)}
                value={organizationName}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder="Enter Organization"
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full">
              <label className="font-medium">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder="Enter City"
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Region or state</label>
              <input
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%] xss:w-full ">
              <label className="font-medium">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder="Enter City"
              >
                <option disabled value="" key="">
                  Select Country
                </option>
                <option value="India" key="">
                  India
                </option>
                <option value="Pakistan" key="">
                  Pakistan
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full">
              <label className="font-medium">Department</label>
              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full relative">
              <label className="font-medium">Start Date</label>
              <DatePicker
                id="startYear-picker-input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select Start Year"
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
              />

              {/* Calendar Icon */}
              <FaCalendarAlt
                className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.querySelector("#startYear-picker-input").focus(); // Opens the picker
                }}
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1vw] xss:flex-col sm:flex">
            <div className="flex flex-col w-[60%] xss:w-full relative">
              <label className="font-medium">Degree/Title</label>
              <DatePicker
                id="degreeYear-picker-input"
                selected={degree}
                onChange={(date) => setDegree(date)}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select Degree Year"
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
              />

              {/* Calendar Icon */}
              <FaCalendarAlt
                className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.querySelector("#degreeYear-picker-input").focus(); // Opens the picker
                }}
              />
            </div>
            <div className="flex flex-col w-[39%]  xss:w-full">
              <label className="font-medium">End Date</label>
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="date"
                placeholder=""
              />
            </div>
          </div>

          {/* <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[100%] '>
                        <label className='font-medium'>Link</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
               </div> */}

          <div className="flex flex-row gap-[1vw] mt-[4vw]">
            <button
              onClick={handleEditProfessionalActivity}
              className="rounded-md px-[6.5vw] py-2 bg-[#0000FF] font-medium  text-white"
            >
              Save
            </button>
            <button
              onClick={() => setbutton3Clicked(false)}
              className="rounded-md px-[6.5vw] py-2 text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
