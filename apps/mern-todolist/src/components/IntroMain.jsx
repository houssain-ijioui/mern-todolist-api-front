import React from 'react';
import backgroundImage from '../images/Frame 3.jpg';
import bg from "../images/Sans_titre-1-removebg-preview.png"
import handbg from '../images/hand-removebg-preview.png';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaFileCircleCheck } from "react-icons/fa6";


const IntroMain = () => {
  return (
    <div className='' >
      <div className='grid grid-cols-4 gap-4 bg-customblue pb-6 bg-contain bg-no-repeat bg-right'
        style={{ backgroundImage: `url(${bg})`}}>
        <div className='lg:col-span-2 col-span-full'>
          <div className='ml-10  '>

            <div className='lg:flex-none flex flex-col lg:items-start items-center justify-center'>
                <div className='py-4 '>
                  <FaFileCircleCheck className='text-8xl mb-2 text-iconBg text-center'/>
                  <h1 className='text-textWhite	text-5xl'>To-Do List</h1>
                </div>
                <div className='py-4'>
                  <div className='flex items-center mb-2 gap-3'>
                    <IoCheckmarkDoneCircle className='text-3xl text-iconBg'/>
                    <h3 className='text-2xl text-bgWhite'>Sticky Notes</h3>
                  </div>
                  <div className='flex items-center mb-2 gap-3'>
                    <IoCheckmarkDoneCircle className='text-3xl text-iconBg'/>
                    <h3 className='text-2xl text-bgWhite'>Auto Layout</h3>
                  </div>
                </div>
            </div>
            <div className='bg-cardBg rounded-xl border-customblue border-8  py-5 px-6 mt-5 mb-7 mr-6 lg:mr-0'>
              <h2 className='text-textBlack font-bold text-3xl my-5 lg:text-start text-center'>I am A task</h2>
              <div className='grid grid-cols-6 gap-5'>
                <div className='lg:col-span-4 col-span-full'>
                  <ul className='flex justify-center lg:justify-start items-center gap-6'>
                    <li className='bg-bgRed text-bgWhite font-semibold rounded-md p-2 flex justify-center'>Mon</li>
                    <li style={{borderBottomLeftRadius: '50x'}} className='bg-bgRed rounded flex justify-center w-10 h-5'></li>
                    <li style={{borderBottomLeftRadius: '50x'}} className='bg-bgRed rounded flex justify-center  w-10 h-5'></li>
                    <li style={{borderBottomLeftRadius: '50x'}} className='bg-dayGrayBg rounded flex justify-center  w-10 h-5'></li>
                  </ul>
                </div>
                <div className='lg:col-span-2 col-span-full justify-self-center lg:justify-self-end'>
                  <h3 className='text-customblue font-normal text-3xl'>Task Name</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center lg:flex-row flex-col gap-5 md:mr-5 lg:mr-0'>
            <img className='self-start hidden lg:block' src={handbg}  alt="" />
            <div>
            <button
              class="bg-bgRed text-white px-4 py-2 rounded-md text-bgWhite font-normal text-xl transition duration-200 ease-in-out hover:bg-iconBg active:bg-dayGrayBg focus:outline-none">
              Create Tasks
            </button>
            </div>
          </div>
        </div>
        <div className='col-span-full lg:col-span-2'>
          {/* <img className='flex justify-center items-center' src={backgroundImage}  alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default IntroMain
