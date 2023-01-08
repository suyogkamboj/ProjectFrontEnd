import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditStudent = () => {
  const [studentID, setStudentID] = useState('')
  const [studentName, setStudentName] = useState('')
  const [email, setEmail] = useState('')

  const [courseID, setCourseID] = useState('')
  const [student, setStudent] = useState({})

  const [courses, setCourses] =useState([])

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:7777/student/${id}`)
      .then((res) => {
        setStudent(res.data)         // here im storing particular student id's data, in student object
        setStudentID(res.data.studentID)  // and from here im getting paricular data which is already entered and... 
        setStudentName(res.data.studentName)    // ...now going to change that which is not read only 
        setEmail(res.data.email)
        setCourseID(res.data.course.courseID)
      })
  }, [id])

  useEffect(() => {
    axios.get(`http://localhost:7777/courses`)
      .then((res) => {
        setCourses(res.data)
      })
  }, [])

  const data = {
    ...student,
    studentID: studentID,
    studentName: studentName,
    email: email,
    course : {courseID}
  }

  const navigate = useNavigate()  //this will used to nevigate to some page which we specified path

  const updateStudent = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:7777/student/update/${id}`, data)
      .then(res => { navigate('/students') })
    toast.success('Student Datails Updated Successfully')   //on successfull update alert box will popup
  }

  return (
    <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
      <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Update Student Details</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center'>
        <input
          type='number'
          value={studentID}
          readOnly
          // onChange={(event) => { setStudentID(event.target.value) }}
          placeholder='Enter Student ID'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='text'
          value={studentName}
          // readOnly
          onChange={(event) => { setStudentName(event.target.value) }}  // if we dont add this we cant change name
          placeholder='Enter Student Name'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <input
          type='email'
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
          placeholder='Enter Your Email Id'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        />

        <select
          name="courseID"
          value={courseID}
          onChange={(event) => { setCourseID(event.target.value) }}
          className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
        >
          <option >---- Choose Course Id ----</option>
          {courses.map((data) => {
            return <option value={data.courseID}>{data.courseID} - {data.courseName}</option>
          })
          }
        </select>

        <button
          type='button'
          onClick={updateStudent}
          className='w-[80%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'>
          Update Student
        </button>
      </form>
    </div>
  )
}

export default EditStudent