import React from "react";
import { RxCross2 } from "react-icons/rx";
const Modal5 = ({ setbutton5Clicked }) => {
  return (
    <div
      onClick={() => setbutton5Clicked(false)}
      className="h-full w-screen absolute bg-black bg-opacity-60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-h-screen p-[2vw] bg-white rounded-xl  w-[80%] mt-[5vw] mx-auto"
      >
        <div className="bg-white">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-medium">WORKS</h2>
            <RxCross2
              onClick={() => setbutton5Clicked(false)}
              className="text-2xl"
            />
          </div>
          <hr className="my-[1vw]" />

          <div className="flex justify-between">
            <div className="flex flex-col w-[60%] ">
              <label className="font-medium">Work Type</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%]  ">
              <label className="font-medium">Work Title</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1vw]">
            <div className="flex flex-col w-[100%] ">
              <label className="font-medium">Journal Title</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            {/* <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Work Sub Title</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
                    </div> */}
          </div>

          <div className="flex justify-between mt-[1vw]">
            <div className="flex flex-col w-[60%] ">
              <label className="font-medium">Link</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[39%]  ">
              <label className="font-medium">Publication Date</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="date"
                placeholder=""
              />
            </div>
          </div>

          {/* <div className='flex justify-between mt-[1vw]'>

                    <div className='flex flex-col w-[60%]  '>
                        <label className='font-medium'>Citiation Type</label>
                        <select  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='Select Citiation Type'>
                            <option disabled value="" key="">Select Citiation Type</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-[39%] '>
                    <label className='font-medium'>Citiation</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>

                </div>
 */}

          {/* <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[100%] '>
                        <label className='font-medium'>Citiation Description</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
               </div> */}

          <div className="flex justify-between mt-[1vw]">
            <div className="flex flex-col w-[60%] ">
              <label className="font-medium">Contributor Name</label>
              <input
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4"
                type="text"
                placeholder=""
              />
            </div>

            <div className="flex flex-col w-[39%]  ">
              <div className="flex justify-between">
                <label className="font-medium">Contributor Role</label>
                <label className="font-medium text-[#0000FF]">
                  + Add another Contributor
                </label>
              </div>
              <select
                className="w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 "
                type="text"
                placeholder="Select Contributor Role"
              >
                <option disabled value="" key="">
                  Select Contributor Role
                </option>
              </select>
            </div>
          </div>

          {/* <div className='flex justify-between mt-[1vw]'>

                <div className='flex flex-col w-[60%] '>
                <label className='font-medium'>Work Identifier(1)</label>
                    <select  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='Select Identifier Role'>
                        <option disabled value="" key="">Select Identifier Role</option>
                    </select>

                   
                </div>

                <div className='flex flex-col w-[39%]  '>
                <label className='font-medium'>Identifier Value</label>
                <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                </div>

                </div>


                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[100%] '>
                        <label className='font-medium'>Identifier URL</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
               </div> */}

          {/* <h1 className="font-medium mt-[1vw]">Relationship</h1> */}
          {/* <div className="flex justify-between mt-[1vw]">
            <div className="flex flex-col gap-[0.5vw]">
              <div>
                <div className="flex gap-[0.5vw]">
                  <input
                    type="radio"
                    id="self"
                    name="relationship"
                    value="self"
                  />
                  <label for="self">Self</label>
                </div>

                <p>The identifier applies to the funding award itself.</p>
              </div>

              <div>
                <div className="flex gap-[0.5vw]">
                  <input
                    type="radio"
                    id="partof"
                    name="relationship"
                    value="partof"
                  />
                  <label for="partof">Part of</label>
                </div>

                <p>
                  The identifier applies to the larger award of which the
                  project is part.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[0.5vw]">
              <button className="px-[6.5vw] py-2 rounded-full text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]">
                Cancel
              </button>
              <button className="px-[6.5vw] py-2 rounded-full bg-[#0000FF] font-medium  text-white">
                + Add another Identifier
              </button>
            </div>
          </div> */}

          <div className="flex flex-col gap-[0.5vw] mt-[0.5vw]">
            {/* <div>
              <div className="flex gap-[0.5vw]">
                <input
                  type="radio"
                  id="versionof"
                  name="relationship"
                  value="versionof"
                />
                <label for="versionof">Version of</label>
              </div>

              <p>
                The identifier applies to an alternate version of the work. For
                example, an earlier draft of an article
              </p>
            </div> */}

            {/* <div>
              <div className="flex gap-[0.5vw]">
                <input
                  type="radio"
                  id="fundedby"
                  name="relationship"
                  value="fundedby"
                />
                <label for="fundedby">Funded By</label>
              </div>

              <p>The identifier applies to the funding for the work.</p>
            </div> */}
          </div>
          <hr className="my-[1vw]" />

          <div className="flex flex-row gap-[1vw] mt-[4vw]">
            <button className="rounded-md px-[6.5vw] py-2 bg-[#0000FF] font-medium  text-white">
              Save
            </button>
            <button
              onClick={() => setbutton5Clicked(false)}
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

export default Modal5;
