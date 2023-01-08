import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddStudent = () => {
  const [studentID, setStudentID] = useState('')
  const [studentName, setStudentName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [courses, setCourses] = useState([])
  const [courseID, setCourseID] = useState()

  const data = {
    studentID: studentID,
    studentName: studentName,
    email: email,
    password: password,
    course: { courseID }
  }

  useEffect(() => {
    axios.get("http://localhost:7777/courses").then((res) => {
      setCourses(res.data)
    })

  }, [])

  const navigate = useNavigate()  //this will used to nevigate to some page which we specified path

  const submit = (event) => {
    event.preventDefault(); // to prevent from gettting empty the input tag while filling other input tags
    if (email.length === 0) {
      toast.error('Please Enter Email Id')  //it will display alert box message as error(in red color => error)
    } else if (studentID.length === 0) {
      toast.error('Please Enter Student ID')
    } else if (studentName.length === 0) {
      toast.error('Please Enter Student Name')
    } else if (courseID.length === 0) {
      toast.error('Please Enter Course Id')
    } else if (password.length === 0) {
      toast.error('Please Enter Password')
    } else {
      axios.post('http://localhost:7777/student/add', data).then(res => { navigate('/students') })
      toast.success('Student Added Successfully')  //it will display alert box message as success(in green color => success)
    }

  }


  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-7'>
      <h1 className='text-black text-3xl font-semibold mb-4 '>Add New Student</h1>

      <div className='w-[55%] h-full flex flex-col justify-center items-center bg-slate-50 rounded-2xl shadow-xl shadow-slate-600'>

      

      <form className='w-full h-full flex flex-col justify-center items-center'>
        <input
          type='number'
          value={studentID}
          onChange={(event) => { setStudentID(event.target.value) }}
          placeholder='Enter Student ID'
          className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-10 py-3 pl-6'
        />

        <input
          type='text'
          value={studentName}
          onChange={(event) => { setStudentName(event.target.value) }}
          placeholder='Enter Student Name'
          className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
        />

        <input
          type='email'
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
          placeholder='Enter Your Email Id'
          className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
        />

        <input
          type='password'
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
          placeholder='Enter Student Password'
          className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-3 pl-6'
        />

        <select
          name="courseID"
          value={courseID}
          onChange={(event) => { setCourseID(event.target.value) }}
          className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
        >
          <option > Choose Course Id </option>
          {courses.map((data, index) => {
            return <option key={index} value={data.courseID}>{data.courseID} - {data.courseName}</option>
          })
          }
        </select>

        <button
          type='button'
          onClick={submit}
          className='w-[70%] bg-blue-500 text-white rounded-xl font-semibold  mt-2 mb-10 py-3 pl-6'>
          Submit
        </button>
      </form>
      </div>
    </div >
  )
}

export default AddStudent