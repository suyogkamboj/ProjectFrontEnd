import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddPerformance = () => {
    const [studentID, setStudentID] = useState()
    const [subjectID, setSubjectID] = useState()
    const [mark, setMark] = useState()

    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7777/subjects').then(res => {
          setSubjects(res.data)
        })
      }, [])

    const navigate = useNavigate()  

    const submit = (event) => {
        event.preventDefault(); 
        if (studentID.length === 0) {
            toast.error('Please Enter Student Id') 
        } else if (subjectID.length === 0) {
            toast.error('Please Enter Subject ID')
        } else {
            axios.post(`http://localhost:7777/subjects/${subjectID}/students/${studentID}/${mark}`).then(res => { navigate('/student/performance/add') })
            toast.success('Student Mark Added Successfully')  
        }
    }

    return (
        //http://localhost:7777/subjects/10002/students/2/16
        ///subjects/{subjectID}/students/{studentID}/{marks}

        <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Monteserrat '>Add Student mark subjectwise</h1>
            <form className='w-[60%] h-full flex flex-col justify-center items-center'>
                <input
                    type='number'
                    value={studentID}
                    onChange={(event) => { setStudentID(event.target.value) }}
                    placeholder='Enter Student ID'
                    className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
                />
                <select
                    name="subjectID"
                    value={subjectID}
                    onChange={(event) => { setSubjectID(event.target.value) }}
                    className='w-[60%] bg-white/10 text-xl font-light outline-none border border-zinc-400 mt-4 py-4 pl-6'
                >
                    <option >---- Choose Subject ID ----</option>
                    {subjects.map((data, index) => {
                        return <option key={index} value={data.subjectID}>{data.subjectID} - {data.subjectName}</option>
                    })
                    }
                </select>
                <input
                    type='number'
                    value={mark}
                    onChange={(event) => { setMark(event.target.value) }}
                    placeholder='Enter Subject Mark'
                    className='w-[60%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 mt-4 py-4 pl-6'
                />
                <button
                    type='button'
                    onClick={submit}
                    className='w-[60%] bg-blue-500 text-xl text-white font-Monteserrat font-semibold  mt-4 py-4 pl-6'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddPerformance