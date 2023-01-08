import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditCourse = () => {
  const [course, setCourse] = useState()
  const [courseID, setCourseID] = useState('')
  const [courseName, setCourseName] = useState('')

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:7777/course/${id}`)
      .then((res) => {
        setCourse(res.data)    /*this will fetch all faculty data in faculty object*/
        setCourseID(res.data.courseID)//and from here im getting paricular data which is already entered and... 
        setCourseName(res.data.courseName)   // ...now going to change that which is not read only 
        
      })
  }, [id])


  const navigate = useNavigate()  //this will used to nevigate to some page which we specified path

  const updateCourse = (event) => {
    event.preventDefault()
    const data = { ...course, courseID, courseName }
    axios.put(`http://localhost:7777/course/update/${id}`, data)
      .then(res => {navigate('/courses')})
    toast.success('Course Datails Updated Successfully')   //on successfull update alert box will popup
  }

  return (
    <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
      <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Edit Course Details</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center'>
        <input
          type='number'
          value={courseID}
            readOnly
          // onChange={(event) => { setCourseID(event.target.value) }}
          placeholder='Enter Course Id'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='text'
          value={courseName}
          //   readOnly  //bcoz of this we can only read values 
          onChange={(event) => { setCourseName(event.target.value) }}
          placeholder='Enter Course Name'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <button
          type='button'
          onClick={updateCourse}
          className='w-[80%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'>
          Update Course
        </button>
      </form>
    </div>
  )
}

export default EditCourse