import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Profile = () => {
  return (
    <div>
        <Header/>

        <div className='mt-[7vw] h-[2px] w-[95%] mx-auto bg-black opacity-20'></div>

        <div className='w-[95%] mx-auto flex justify-end'>

          <div className='mt-[2vw] w-[98%] flex'>
            
            <div className="w-[30%] h-[27vw] border-[2px] border-opacity-85 rounded-xl">

              <div className='flex flex-col items-center gap-[0.5vw] mt-[2vw]'>
                <div className='h-[5vw] w-[5vw]'>
                <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                </div>
                <h2 className='font-semibold text-sm'>John Paul</h2>
              </div>

              <div className="w-[90%] ml-[20%] mt-[2vw] ">
              <div className=''>
                <div className="flex gap-[1vw] font-semibold items-center hover:cursor-pointer">
                  <img src="./images/connections.png" alt="" />
                  <p className='text-[#0000FF] text-sm'>My Connections</p>
                </div>
              </div>

              </div>

              <div className="w-[90%] ml-[20%] mt-[2vw] ">
              <div className=''>
                <div className="flex gap-[1vw] font-semibold items-center hover:cursor-pointer">
                  <img src="./images/chat.png" alt="" />
                  <p className='text-black text-sm'>Message</p>
                </div>
              </div>

              </div>

              <div className="w-[90%] ml-[20%] mt-[2vw] ">
              <div className=''>
                <div className="flex gap-[1vw] font-semibold items-center hover:cursor-pointer">
                  <img src="./images/notifications.png" alt="" />
                  <p className='text-[#000] text-sm'>Notifications</p>
                </div>
              </div>

              </div>

              <div className="w-[90%] ml-[20%] mt-[2vw] mb-[2vw] ">
              <div className=''>
                <div className="flex gap-[1vw] font-semibold items-center">
                  <img src="./images/save.png" alt="" />
                  <p className='text-[#000] text-sm'>Saved Items</p>
                </div>
              </div>

              </div>

            </div>


            <div className="h-[20vw] w-[40%]">
                <div className="w-[90%] flex  mx-auto h-[4vw]">

                  <div className="w-[50%] flex justify-center items-center border-b-4 border-black">
                      <p className="text-sm font-semibold">1  Followers</p>
                  </div>
                  <div className="w-[50%] flex justify-center items-center border-b-2 border-black">
                  <p className="text-sm font-semibold">0  Following</p>
                  </div>

                </div>

                <div className="ml-[5vw] mt-[2vw]   flex gap-[0.7vw] items-center">
                  <div className='h-[4vw] w-[4vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>
            </div>

            {/* Third Columne */}
            <div className="w-[30%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">
              <div className='w-[86%] mx-auto'>

                <div className="flex justify-between items-center">
                  <h2 className="opacity-80 font-semibold">Suggested for You</h2>
                  <h2 className="opacity-80 text-sm">View All</h2>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>

                <div className="mt-[2vw] flex justify-between items-center">
                  
                  <div className="flex gap-[0.8vw] items-center">
                  <div className='h-[3vw] w-[3vw]'>
                  <img src='images/johnpaul.png' alt='Avatar' className='h-full w-full object-cover' />
                  </div>
                  <p className='text-[#000] text-sm font-semibold'>Name</p>
                  
                  </div>

                  <p className='text-[#0000FF] text-sm font-semibold'>Follow</p>
                </div>


              </div>

            </div>

          </div>

        </div>    
        <Footer/>

    </div>
  )
}

export default Profile