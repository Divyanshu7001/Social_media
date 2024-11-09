import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Modal4 = ({setbutton4Clicked}) => {
  return (
    <div onClick={() => setbutton4Clicked(false)} className='h-full w-screen absolute bg-black bg-opacity-60'>
        <div  onClick={(e) => e.stopPropagation()} className='min-h-screen p-[2vw] bg-white rounded-xl  w-[80%] mt-[5vw] mx-auto'>
            
            <div className='bg-white'>
                <div className='flex flex-row items-center justify-between'>
                <h2 className='text-2xl font-medium'>FUNDING DETAILS</h2>
                <RxCross2 onClick={() => setbutton4Clicked(false)}   className='text-2xl'/>
                </div>
                <hr className='my-[1vw]'/>

                <div className='flex justify-between'>

                    <div className='flex flex-col w-[60%]  '>
                        <label className='font-medium'>Funding Type</label>
                        <select  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='Select Funding Type'>
                            <option disabled value="" key="">Select Funding Type</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-[39%] '>
                    <label className='font-medium'>Funding Sub Type</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='Enter City' />
                    </div>

                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Title of Funded Project</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Project Link</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
                    </div>
                </div>


                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Description</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Start Date</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="date" placeholder='' />
                    </div>
                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Total Funding Amount</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>End Date</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="date" placeholder='' />
                    </div>
                </div>

                <div className='flex justify-between mt-[1vw]'>
                    <div className='flex flex-col w-[60%] '>
                        <label className='font-medium'>Funding Agency Name</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>City</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
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
                        <label className='font-medium'>Funding Identifier(1) Grant Number</label>
                        <input className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4'  type="text" placeholder='' />
                    </div>
                    <div className='flex flex-col w-[39%]  '>
                        <label className='font-medium'>Grant Link</label>
                        <input  className='w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 ' type="text" placeholder='' />
                    </div>
                </div>

                <h1 className='font-medium mt-[1vw]'>Relationship</h1>
                <div className='flex justify-between mt-[1vw]'>

                    <div className='flex flex-col gap-[0.5vw]'>
                    
                        <div>

                        <div className='flex gap-[0.5vw]'>
                        <input type="radio" id="self" name="relationship" value="self"/>
                        <label for="self">Self</label>
                        </div>  

                        <p>The identifier applies to the funding award itself.</p>

                        </div>
        
                        
                        <div>

                        <div className='flex gap-[0.5vw]'>
                        <input type="radio" id="partof" name="relationship" value="partof"/>
                        <label for="partof">Part of</label>
                        </div>  

                        <p>The identifier applies to the larger award of which the project is part.</p>

                        </div>

                    </div>


                    <div className='flex flex-col gap-[0.5vw]'>
                    <button className='px-[6.5vw] py-2 rounded-full text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]'>Cancel</button>
                    <button className='px-[6.5vw] py-2 rounded-full bg-[#0000FF] font-medium  text-white'>+ Add another Identifier</button>

                    </div>


               </div>

               <hr className='my-[1vw]'/>

                <div className='flex flex-row gap-[1vw] mt-[4vw]'>
                    <button className='rounded-md px-[6.5vw] py-2 bg-[#0000FF] font-medium  text-white'>Save</button>
                    <button onClick={() => setbutton4Clicked(false)}  className='rounded-md px-[6.5vw] py-2 text-[#0000FF]  font-medium bg-transparent border-[#0000FF] border-[1.5px]'>Cancel</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Modal4