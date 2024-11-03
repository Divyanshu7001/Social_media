import React from 'react'
import Header from './Header'
import Footer from './Footer'

const SavedItems = () => {
  return (
    <div>
        <Header/>

        <div className='mt-[7vw] h-[2px] w-[95%] mx-auto bg-black opacity-20'></div>

        <div className='w-[95%] mx-auto flex justify-end'>

          <div className='mt-[2vw] w-[98%] flex gap-[3vw]'>
            
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
                  <img src="./images/connectionsblack.png" alt="" />
                  <p className='text-sm'>My Connections</p>
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
                  <img src="./images/saveblue.png" alt="" />
                  <p className='text-[#0000FF] text-sm'>Saved Items</p>
                </div>
              </div>

              </div>

            </div>


            {/* Third Columne */}


            <div className="flex flex-col gap-[1vw] w-[70%] ">

                <div className="">
                    <h2 className="font-bold mb-[1vw]">SAVED ITEMS</h2>

                    <div className="w-[70%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">
                        
                    <div className='w-[86%] mx-auto'>

                    
                        <div className="flex justify-between items-center">
                        <h2 className="font-semibold">The Future of Quantum Computing: Transforming IT Landscapes</h2>
                        </div>

                        
                        <div className='flex flex-row items-center gap-[2vw] mt-[2vw]'>
                            <div className='h-[5vw] w-[5vw]'>
                            <img src='images/Ellipse4.png' alt='Avatar' className='h-full w-full object-cover' />
                            </div>

                            <div className="">
                            <h2 className='font-bold'>John</h2>
                            <h2 className='opacity-80'>Chennai, Tamilnadu</h2>
                            </div>
                        </div>

                        <p className='mt-[1vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers, quantum computing and its implications for solving complex problems in  time.</p>
                        <p className='mt-[1.5vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers.</p>

                        <div className="my-[2vw] flex gap-[2vw] items-center">

                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/like.png'></img>
                                <h2 className='text-sm opacity-75'>Likes</h2>
                            </div>

                            
                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/views.png'></img>
                                <h2 className='text-sm opacity-75'>views</h2>
                            </div>

                            
                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/pages.png'></img>
                                <h2 className='text-sm opacity-75'>50 pages</h2>
                            </div>

                        </div>

                        <button className="bg-[#0000FF] px-[2vw] py-[0.3vw] text-white font-semibold rounded-sm">Download</button>

                    </div>

                    </div>

                </div>
                  

                <div className="">

                    <div className="w-[70%] border-[2px] border-opacity-85 rounded-xl py-[2vw]">
                        
                    <div className='w-[86%] mx-auto'>

                    
                        <div className="flex justify-between items-center">
                        <h2 className="font-semibold">The Future of Quantum Computing: Transforming IT Landscapes</h2>
                        </div>

                        
                        <div className='flex flex-row items-center gap-[2vw] mt-[2vw]'>
                            <div className='h-[5vw] w-[5vw]'>
                            <img src='images/Ellipse4.png' alt='Avatar' className='h-full w-full object-cover' />
                            </div>

                            <div className="">
                            <h2 className='font-bold'>John</h2>
                            <h2 className='opacity-80'>Chennai, Tamilnadu</h2>
                            </div>
                        </div>

                        <p className='mt-[1vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers, quantum computing and its implications for solving complex problems in  time.</p>
                        <p className='mt-[1.5vw] opacity-80 text-sm'>Dive into the potential of quantum computing and its implications for solving complex problems in record time. Join our vibrant community of Information Technology scholars and researchers.</p>

                        <div className="my-[2vw] flex gap-[2vw] items-center">

                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/like.png'></img>
                                <h2 className='text-sm opacity-75'>Likes</h2>
                            </div>

                            
                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/views.png'></img>
                                <h2 className='text-sm opacity-75'>views</h2>
                            </div>

                            
                            <div className="flex gap-[0.3vw] items-center">
                                <img src='./images/pages.png'></img>
                                <h2 className='text-sm opacity-75'>50 pages</h2>
                            </div>

                        </div>

                        <button className="bg-[#0000FF] px-[2vw] py-[0.3vw] text-white font-semibold rounded-sm">Download</button>

                    </div>

                    </div>

                </div>
                  
            </div>

            
          </div>

        </div>    
        <Footer/>

    </div>
  )
}

export default SavedItems