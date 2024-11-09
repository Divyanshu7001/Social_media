import React, { useState } from 'react'
import Modal1 from './modals/Modal1'
import Modal2 from './modals/Modal2'
import Modal3 from './modals/Modal3'
import Modal4 from './modals/Modal4'
import Modal5 from './modals/Modal5'

const ButtonsPage = () => {

    const [button1Clicked, setbutton1Clicked] = useState(false);
    const [button2Clicked, setbutton2Clicked] = useState(false);
    const [button3Clicked, setbutton3Clicked] = useState(false);
    const [button4Clicked, setbutton4Clicked] = useState(false);
    const [button5Clicked, setbutton5Clicked] = useState(false);

  return (
    <div className='relative bg-gray-800'>
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

    <div className='w-screen h-screen bg-gray-800'>
        
        <div className='flex w-full h-full flex-col justify-center items-center gap-10'>     

        <button onClick={()=>{setbutton1Clicked(prev=>!prev)}} className='px-10 py-3 bg-blue-600 hover:bg-blue-950 transition-all ease-in duration-100 text-white rounded-full'>Button 1</button>
        <button onClick={()=>{setbutton2Clicked(prev=>!prev)}} className='px-10 py-3 bg-blue-600 hover:bg-blue-950 transition-all ease-in duration-100 text-white rounded-full'>Button 2</button>
        <button onClick={()=>{setbutton3Clicked(prev=>!prev)}} className='px-10 py-3 bg-blue-600 hover:bg-blue-950 transition-all ease-in duration-100 text-white rounded-full'>Button 3</button>
        <button onClick={()=>{setbutton4Clicked(prev=>!prev)}} className='px-10 py-3 bg-blue-600 hover:bg-blue-950 transition-all ease-in duration-100 text-white rounded-full'>Button 4</button>
        <button onClick={()=>{setbutton5Clicked(prev=>!prev)}} className='px-10 py-3 bg-blue-600 hover:bg-blue-950 transition-all ease-in duration-100 text-white rounded-full'>Button 5</button>

        </div>
    </div>
    </div>
  )
}

export default ButtonsPage