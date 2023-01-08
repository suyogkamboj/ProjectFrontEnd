import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetAttendance = () => {
  const [courses, setCourses] = useState([])
  const [courseID, setCourseID] = useState()

  useEffect(() => {
    axios.get(`http://localhost:7777/courses`).then((res) => { setCourses(res.data) })
  }, [])
  return (
    <>
      <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
        <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Get Student Attendance</h1>
        <form className='w-[60%] h-full flex flex-col justify-center items-center'>
          <select
            name="courseID"
            value={courseID}
            onChange={(event) => { setCourseID(event.target.value) }}
            className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
          >
            <option >---- Choose Course Id ----</option>
            {courses.map((data, index) => {
              return <option key={index} value={data.courseID}>{data.courseID} - {data.courseName}</option>
            })
            }
          </select>
          <Link
            to={`/attendances/${courseID}`}
            className='w-[60%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'
          >
            Get Student List
          </Link>
        </form>
      </div>
    </>
  )
}

export default GetAttendance 