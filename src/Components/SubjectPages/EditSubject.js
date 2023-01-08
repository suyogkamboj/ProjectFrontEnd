import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditSubject = () => {
    const [subjectID, setSubjectID] = useState('')
    const [subjectName, setSubjectName] = useState('')
    
    const [subject, setSubject] = useState()
    const [courseID, setCourseID] = useState()

    const [course, setCourse] = useState([])
    

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:7777/subject/${id}`)
            .then((res) => {
                setSubject(res.data)
                setSubjectID(res.data.subjectID)
                setSubjectName(res.data.subjectName)
                setCourseID(res.data.course.courseID)
                console.log(res.data.course.courseID)

            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:7777/courses`).then((res) => {
            setCourse(res.data)
        })
    },[])

    const data = { 
        ...subject, 
        subjectID, 
        subjectName, 
        courseID
    }

    const navigate = useNavigate()

    const updateSubject = (event) => {

        event.preventDefault()
        axios.put(`http://localhost:7777/subject/update/${id}`, data)
            .then(res => { navigate('/subjects') })
        toast.success('Subject Datails Updated Successfully')
    }

    return (
        <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Edit Subject Details</h1>
            <form className='w-[60%] h-full flex flex-col justify-center items-center'>
                <input
                    type='number'
                    value={subjectID}
                    readOnly
                    // onChange={(event) => { setSubjectID(event.target.value) }}
                    placeholder='Enter Subject Id'
                    className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
                />

                <input
                    type='text'
                    value={subjectName}
                    //   readOnly  //bcoz of this we can only read values 
                    onChange={(event) => { setSubjectName(event.target.value) }}
                    placeholder='Enter Subject Name'
                    className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
                />

                <select
                    name="courseID"
                    value={courseID}
                    // readOnly
                    onChange={(event) => { setCourseID(event.target.value) }}
                    className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
                >
                    <option >---- Choose Course Id ----</option>
                    {
                        course.map((data, index)=>{
                            return <option key={index}  value='courseID'>{data.courseID} - {data.courseName} </option>
                        })
                    }
                </select>

                <button
                    type='button'
                    onClick={updateSubject}
                    className='w-[60%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'>
                    Update Subject
                </button>
            </form>
        </div>
    )
}

export default EditSubject