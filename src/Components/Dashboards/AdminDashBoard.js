import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// Icons
// import { HiOutlineHome, HiOutlineAcademicCap, HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineHome, HiOutlineAcademicCap } from 'react-icons/hi'
import { GiTeacher, GiBookshelf } from 'react-icons/gi'
import { AiOutlineTrophy, AiOutlineBook } from 'react-icons/ai'
import { BsFileSpreadsheet } from 'react-icons/bs'
// import { RiQuillPenLine } from 'react-icons/ri'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'

const AdminDashBoard = () => {  //need to be changed this dashboard

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
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
                            <span className='mx-3'>Admin DashBard</span>
                        </button>
                    </li>

                    {/* Faculty Menu Item */}

                    <li className="relative">
                        <button
                            onClick={() => { setOpen1(!open1) }}
                            className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50   cursor-pointer"    >
                            <GiTeacher size='1.5em' />
                            <span className='mx-3'>Faculty </span>

                            <div className='mx-5'>
                                {(!open1) && <FiChevronRight />}
                                {(open1) && <FiChevronDown />}

                            </div>

                        </button>

                        {open1 &&
                            <ul className="relative">
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50"  >
                                        <Link to={'/faculties'}>All Faculty List</Link>
                                    </button>

                                </li>
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50"  >
                                        <Link to={'/faculty/add'}>Add New Faculty </Link>

                                    </button>
                                </li>
                            </ul>}
                    </li>

                    {/* Faculty menu item end */}

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
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50"  >
                                        <Link to={'/student/add'}> Add New Student </Link>

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
                            onClick={() => { setOpen3(!open3) }}
                            className="flex items-center w-60 text-sm mx-2 py-4 px-2 h-12 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50   cursor-pointer"    >
                            <AiOutlineBook size='1.5em'/>
                            <span className='mx-3'>Courses </span>

                            <div className='mx-5'>
                                {(!open3) && <FiChevronRight />}
                                {(open3) && <FiChevronDown />}

                            </div>

                        </button>

                        {open3 &&
                            <ul className="relative">
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  "  >
                                        <Link to={'/courses'}> All Course List </Link>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  "  >
                                        <Link to={'/course/add'} > Add New Course </Link>
                                    </button>
                                </li>
                            </ul>}
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
                                <li className="relative">
                                    <button className="flex items-center w-60 text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50  "  >

                                        <Link to={'/subject/add'}>Add New Subject</Link>
                                    </button>
                                </li>
                            </ul>}
                    </li>
                </ul>
                {/* Listing 2 end */}
            </div>
            {/* Container End */}
        </>
    )
}

export default AdminDashBoard