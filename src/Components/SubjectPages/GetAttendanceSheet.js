import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GetAttendanceSheet = () => {
    const [studentID, setStudentID] = useState([])

    return (
        <>
            <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
                <h1 className='text-black text-3xl font-semibold mb-6 '>Get Student Attendance Sheet</h1>
                <div className='w-[55%] h-full flex flex-col justify-center items-center bg-slate-50 rounded-2xl shadow-xl shadow-slate-600'>

                    <form className='w-[70%] h-full flex flex-col justify-center items-center'>
                        <input
                            type='number'
                            value={studentID}
                            onChange={(event) => { setStudentID(event.target.value) }}
                            placeholder='Enter Student ID'
                            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
                        />
                        <Link
                            to={`/view/attendance/${studentID}`}
                            className='w-[60%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'
                        >
                            Get Attendance List
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GetAttendanceSheet