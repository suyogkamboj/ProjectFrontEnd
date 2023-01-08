import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCourse = () => {
  const [courseName, setCourseName] = useState('')
  const [courseID, setCourseID] = useState('')

  const data = {
    courseID: courseID,
    courseName: courseName
  }

  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault();  // to prevent from gettting empty the input tag while filling other input tags

    if (courseID.length === 0) {
      toast.error('Please Enter Course Id')  //it will display alert box message as error(in red color => error)
    } else if (courseName.length === 0) {
      toast.error('Please Enter Course Name')
    } else {
      axios.post('http://localhost:7777/course/add', data).then( res => {navigate('/courses')} )
      toast.success('Course Added Successfully')  //it will display alert box message as success(in green color => success)
    }
  }

  return (
    <>
      <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
        <h1 className='text-black text-3xl font-semibold mb-6'>Add New Course</h1>
        <div className='w-[55%] h-full flex flex-col justify-center items-center bg-slate-50 rounded-2xl shadow-xl shadow-slate-600'>

        <form className='w-full h-full flex flex-col justify-center items-center'>
          <input
            type='number'
            value={courseID}
            onChange={(event) => { setCourseID(event.target.value) }}
            placeholder='Enter Course ID'
            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
            />

          <input
            type='text'
            value={courseName}
            onChange={(event) => { setCourseName(event.target.value) }}
            placeholder='Enter Course Name'
            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
            />

          <button
            type='button'
            onClick={submit}
            className='w-[70%] bg-blue-500 text-xl text-white rounded-xl font-semibold  my-4 py-4 pl-6'>
            Submit
          </button>
        </form>
              </div>
      </div>
    </>
  )
}

export default AddCourse