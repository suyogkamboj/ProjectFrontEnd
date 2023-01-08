import React from 'react'
import { Link } from 'react-router-dom'

const SubjectNavbar = () => {
    return (
        <>
            <div className='w-full h-16 bg-slate-600 flex items-center px-10 py-2 justify-between'>
                <Link
                    to={"/subjects"}
                    className='text-white text-3xl font-semibold font-mono'>
                    List Of Subjects
                </Link>
                <Link
                    to={"/subject/add"}
                    className='w-40 bg-white flex justify-center items-center font-semibold text-xl h-12 rounded-lg '>
                    Add Subjects
                </Link>
            </div>
        </>
    )
}

export default SubjectNavbar