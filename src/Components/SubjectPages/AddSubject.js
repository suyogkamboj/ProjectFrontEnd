import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddSubject = () => {
    const [subjectName, setSubjectName] = useState('')
    const [subjectID, setSubjectID] = useState('')
    const [course, setCourse] = useState([])
    const [courseID, setCourseID] = useState()

    const data = {
        subjectID: subjectID,
        subjectName: subjectName
    }

    useEffect(() => {
        axios.get("http://localhost:7777/courses").then((res) => {
            setCourse(res.data)
        })

    }, [])

    const navigate = useNavigate()

    const submit = (event) => {
        event.preventDefault();  // to prevent from gettting empty the input tag while filling other input tags

        if (subjectID.length === 0) {
            toast.error('Please Enter Subject Id')  //it will display alert box message as error(in red color => error)
        } else if (subjectName.length === 0) {
            toast.error('Please Enter Subject Name')
        } else {
            console.log(data)
            axios.post(`http://localhost:7777/subject/add/${courseID}`, data).then(res => { navigate('/subjects') })

            toast.success('Course Added Successfully')  //it will display alert box message as success(in green color => success)
        }
    }

    return (
        <>
            <div className='w-screen h-full flex flex-col justuify-center items-center mt-16'>
                <h1 className='text-black text-3xl font-semibold mb-6 '>Add New Subject To course</h1>
                <div className='w-[55%] h-full flex flex-col justify-center items-center bg-slate-50 rounded-2xl shadow-xl shadow-slate-600'>

                    <form className='w-[70%] h-full flex flex-col justify-center items-center'>
                        <input
                            type='number'
                            value={subjectID}
                            onChange={(event) => { setSubjectID(event.target.value) }}
                            placeholder='Enter Subject ID'
                            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
                        />

                        <input
                            type='text'
                            value={subjectName}
                            onChange={(event) => { setSubjectName(event.target.value) }}
                            placeholder='Enter Subject Name'
                            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
                        />
                        <select
                            name="courseID"
                            value={courseID}
                            onChange={(event) => { setCourseID(event.target.value) }}
                            className='w-[70%] bg-white/10 text-xl font-normal outline-none border rounded-xl border-zinc-400 mt-4 py-4 pl-6'
                        >
                            <option >Choose Course Id </option>
                            {course.map((data) => {
                                return <option value={data.courseID}>{data.courseID} - {data.courseName}</option>
                            })
                            }
                        </select>

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

export default AddSubject