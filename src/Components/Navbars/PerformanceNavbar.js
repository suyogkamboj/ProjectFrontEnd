import React from 'react'
import { Link } from 'react-router-dom'

const PerformanceNavbar = () => {
  return (
    <>
            <div className='w-full h-16 bg-blue-400 flex items-center px-10 py-2 justify-between'>
                <Link
                    to={"/performances"}
                    className='text-white text-3xl font-semibold font-mono'>
                    List Student Performances
                </Link>
                <Link
                    to={"/student/performance/add"}
                    className='w-60 bg-white text-blue-400 flex justify-center items-center font-semibold text-xl h-12 rounded-lg '>
                    Add Student Marks
                </Link>
            </div>
        </>
  )
}

export default PerformanceNavbar