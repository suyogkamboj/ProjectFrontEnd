import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditFaculties = () => {
  const [facultyID, setFacultyID] = useState('')
  const [facultyName, setFacultyName] = useState('')
  const [email, setEmail] = useState('')
  const [courseID, setCourseID] = useState('')
  const [subjectID, setSubjectID] = useState()
  const [faculty, setFaculty] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:7777/faculty/${id}`)
      .then((res) => {
        setFaculty(res.data)    /*this will fetch all faculty data in faculty object*/
        setFacultyID(res.data.facultyID)
        setFacultyName(res.data.facultyName)  //and from here im getting paricular data which is already entered and... 
        setEmail(res.data.email) // ...now going to change that which is not read only 
        setCourseID(res.data.course.courseID)
        setSubjectID(res.data.subject.subjectID)
      })
  }, [id])

  const navigate = useNavigate()  //this will used to nevigate to some page which we specified path

  const updateTeacher = (event) => {
    event.preventDefault()
    const data = { ...faculty, facultyID, facultyName, email, course : {courseID}, subject:{subjectID} }
    axios.put(`http://localhost:7777/faculty/update/${id}`, data)
      .then(navigate('/faculties'))
    toast.success('Teacher Datails Updated Successfully')   //on successfull update alert box will popup
  }

  return (
    <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
      <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Edit Faculty Details</h1>
      <form className='w-[60%] h-full flex flex-col justify-center items-center'>
        <input
          type='number'
          value={facultyID}
          readOnly
          onChange={(event) => { setFacultyID(event.target.value) }}
          placeholder='Enter Faculty Id'
          className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='text'
          value={facultyName}
          readOnly  //bcoz of this we can only read values 
          onChange={(event) => { setFacultyName(event.target.value) }}
          placeholder='Enter Faculty Name'
          className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='email'
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
          placeholder='Enter Faculty Email Id'
          className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='number'
          value={courseID}
          onChange={(event) => { setCourseID(event.target.value) }}
          placeholder='Enter Faculty Course Id'
          className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='number'
          value={subjectID}
          onChange={(event) => { setSubjectID(event.target.value) }}
          placeholder='Enter Facultys teaching subject '
          className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <button
          type='button'
          onClick={updateTeacher}
          className='w-[60%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'>
          Update Teacher
        </button>
      </form>
    </div>
  )
}

export default EditFaculties