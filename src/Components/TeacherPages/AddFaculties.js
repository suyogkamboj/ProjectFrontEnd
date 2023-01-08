import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddFaculties = () => {
  const [facultyID, setFacultyID] = useState('')
  const [facultyName, setFacultyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [courses, setCourses] = useState([])
  const [courseID, setCourseID] = useState()

  const [subjects, setSubjects] = useState([])
  const [subjectID, setSubjectID] = useState()

  const data = {
    facultyID: facultyID,
    facultyName: facultyName,
    email: email,
    password: password,
    course: { courseID },// sending courseName is optional
    subject: { subjectID }  // sending subjectName is optional
  }

  useEffect(() => {
    axios.get("http://localhost:7777/courses").then((res) => {
      setCourses(res.data)
    })

  }, [])


  useEffect(() => {
    axios.get('http://localhost:7777/subjects').then(res => {
      setSubjects(res.data)
    })
  }, [])

  const navigate = useNavigate()  //this will used to nevigate to some page which we specified path

  const submit = (event) => {
    event.preventDefault();  // to prevent from gettting empty the input tag while filling other input tags

    if (facultyID.length === 0) {
      toast.error('Please Enter Faculty Id')
    } else if (email.length === 0) {
      toast.error('Please Enter Email Id')  //it will display alert box message as error(in red color => error)
    } else if (facultyName.length === 0) {
      toast.error('Please Enter Faculty Name')
    } else if (courseID.length === 0) {
      toast.error('Please Enter Course Id')
    } else if (password.length === 0) {
      toast.error('Please Enter Password')
    } else if (subjectID.length === 0) {
      toast.error('Please Enter Teaching Subject ID')
    } else {
      axios.post('http://localhost:7777/faculty/add', data).then(res => { 
        if(res.data === false){
          toast.error('Faculty Already Exist with Same ID')    
        }else{
          navigate('/faculties') 
          toast.success('Faculty Added successfully') 
        }
      })
      
    }
  }


  return (
    <div className='w-screen h-full flex flex-col justuify-center items-center mt-7'>
      <h1 className='text-black text-3xl font-semibold mb-3'>Add New Faculty Details</h1>

      <div className='w-[55%] h-full flex flex-col justify-center items-center bg-slate-50 rounded-2xl shadow-xl shadow-slate-600'>

        <form className='w-full flex flex-col justify-center items-center'>

          <input
            type='number'
            value={facultyID}
            onChange={(event) => { setFacultyID(event.target.value) }}
            placeholder='Enter Faculty Id'
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-10 py-3 pl-6'
          />

          <input
            type='text'
            value={facultyName}
            onChange={(event) => { setFacultyName(event.target.value) }}
            placeholder='Enter Faculty Name'
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
          />

          <input
            type='email'
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
            placeholder='Enter Faculty Email Id'
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
          />

          <input
            type='password'
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
            placeholder='Enter Faculty Password'
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
          />

          <select
            name="courseID"
            value={courseID}
            onChange={(event) => { setCourseID(event.target.value) }}
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
          >
            <option >Choose Course Id </option>
            {courses.map((data,index) => {
              return <option key={index} value={data.courseID}>{data.courseID} - {data.courseName}</option>
            })
            }
          </select>

          <select
            name="tsubjectID"
            value={subjectID}
            onChange={(event) => { setSubjectID(event.target.value) }}
            className='w-[70%] font-normal outline-none border rounded-xl border-zinc-400 mt-2 py-3 pl-6'
          >
            <option >Choose Teaching Subject</option>
            {subjects.map((data,index) => {
              return <option key={index} value={data.subjectID}>{data.subjectID} - {data.subjectName}</option>
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
    </div>
  )
}

export default AddFaculties