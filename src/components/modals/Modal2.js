import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Modal2 = ({setbutton2Clicked}) => {
  return (
    <div onClick={() => setbutton2Clicked(false)} className='h-full w-screen absolute bg-black bg-opacity-60'>
        <div  onClick={(e) => e.stopPropagation()} className='min-h-screen p-[2vw] bg-white rounded-xl  w-[80%] mt-[5vw] mx-auto'>
            
            <div className='bg-white'>
                <div className='flex flex-row items-center justify-between'>
                <h2 className='text-2xl font-medium'>EDUCATION</h2>
                <RxCross2 onClick={() => setbutton2Clicked(false)}   className='text-2xl'/>
                </div>
                <hr className='my-[1vw]'/>

                <div className='flex justify-between '>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Organization Name</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='Enter Organization' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>City</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='Enter City' />
                    </div>
                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                    <label className='font-medium'>Region or state</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Country</label>
                        <select  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='Enter City'>
                            <option disabled value="" key="">Select Country</option>
                            <option value="" key="">India</option>
                            <option value="" key="">Pakistan</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Department</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Start Date</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
                    </div>
                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Degree/Title</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>End Date</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
                    </div>
                </div>
{/* 
                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[100%] '>
                        <label className='font-medium'>Link</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
               </div> */}

                <div className='flex flex-row gap-[1vw] mt-[4vw]'>
                    <button className='rounded-md px-[6.5vw] py-2 bg-[#0000FF] font-medium  text-white'>Save</button>
                    <button onClick={() => setbutton2Clicked(false)} className='rounded-md px-[6.5vw] py-2 text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]'>Cancel</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Modal2