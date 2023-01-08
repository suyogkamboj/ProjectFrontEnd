import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// Icons
import { HiOutlineHome, HiOutlineAcademicCap } from 'react-icons/hi'
import { GiBookshelf } from 'react-icons/gi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { BsFileSpreadsheet } from 'react-icons/bs'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'

const StudentDashBoard = () => {
    const [open2, setOpen2] = useState(false)
    const [open4, setOpen4] = useState(false);
  
    return (
    <>

     {/* Header */}

     <div className='hidden md:flex place-content-between'>
                <h1 className='p-3 w-full bg-slate-600'>Center for Development of Advance Computing</h1>
            </div >

            <div className='md:hidden flex bg-slate-200 w-full shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <h1 className='mx-3 p-3'>C-DAC </h1>
            </div >

             {/* Container Start */}
             <div className="w-12 hover:w-60  md:w-60 md:flex flex-col h-full shadow-md bg-slate-300 absolute transition-all duration-300 overflow-hidden">

<div className="pt-4 pb-2 px-2">

</div>
{/* Listing 1 */}

<ul className="relative z-10">

    <li className="relative">
        <button className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  ">
            <HiOutlineHome size='1.5em'/>
            <span className='mx-3'>Student DashBoard</span>
        </button>
    </li>


    {/* Student menu item */}
    <li className="relative">
        <button
            onClick={() => { setOpen2(!open2) }}
            className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50 cursor-pointer">
            <HiOutlineAcademicCap size='1.5em'/>
            <span className='mx-3'>Student</span>

            <div className='mx-5'>
                {(!open2) && <FiChevronRight />}
                {(open2) && <FiChevronDown />}

            </div>

        </button>

        {open2 &&
            <ul className="relative">
                <li className="relative">
                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50"  >
                        <Link to={'/students'} >All Student List </Link>

                    </button>
                </li>
            </ul>}
    </li>
    {/* Student menu item end*/}
</ul>

{/* Listing 1 end */}

<hr className="my-2" />

{/* Listing 2 start */}

<ul className="relative">

    {/* No dropdown button for Attendance */}

    <li className="relative">
        <button className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  ">
            <BsFileSpreadsheet size='1.5em'/>
            <Link to={'/get-attendace'} className='mx-3'>Attendance</Link>
        </button>
    </li>

    {/* No dropdown button for performance*/}
    <li className="relative">
        <button className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  ">
            <AiOutlineTrophy size='1.5em'/>
            <Link to={'/performances'} className= 'mx-3'> Performances </Link>
            {/* <span className='mx-3'>Performances</span> */}
        </button>
    </li>


    <li className="relative">
        <button
            onClick={() => { setOpen4(!open4) }}
            className="flex items-center w-60 text-sm mx-3 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50   cursor-pointer">
            <GiBookshelf />
            <span className='mx-4'> Subjects</span>

            <div className='mx-5'>
                {(!open4) && <FiChevronRight />}
                {(open4) && <FiChevronDown />}

            </div>
        </button>

        {open4 &&
            <ul className="relative">
                <li className="relative">
                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  "  >

                        <Link to={'/subjects'}> All Subject List</Link>

                    </button>
                </li>
            </ul>}
    </li>
</ul>
{/* Listing 2 end */}
</div>
{/* Container End */}

            {/* OLD CODE */}
            {/* <div className='w-screen h-full flex flex-col justuify-center items-center mt-16 '>
                <h1>Student DashBoard (need to be changed)</h1>
                <div className='w-[80%] h-full flex flex-col justify-center items-center'>
                <Link
                    to={'/teacher/:id'}  // need to pass particular id as path variable
                    className='px-6 py-2 my-4 text-white bg-blue-500 rounded-lg font-normal'>
                    View Student 
                </Link>
                <Link
                    to={'/edit-teacher/:id'} // need to pass particular id as path variable
                    className='px-6 py-2 my-2 text-white bg-blue-500 rounded-lg font-normal'>
                    Edit Student
                </Link>
                </div>
                <div className='w-[80%] h-full flex flex-col justify-center items-center'>
                <Link
                    to={'/edit-student/:id'}     // need to pass particular id as path variable
                    className='px-6 py-2 my-4 text-white bg-blue-500 rounded-lg font-normal'>
                    View Attendance
                </Link>
                <Link
                    to={'/student'}
                    className='px-6 py-2 my-4 text-white bg-blue-500 rounded-lg font-normal'>
                    All Student Performance
                </Link>
                </div>
            </div> */}
        </>
  )
}

export default StudentDashBoard