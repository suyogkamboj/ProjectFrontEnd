import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Student = () => {
    const [student, setStudent] = useState()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:7777/student/${id}`)
            .then((res) => {
                setStudent(res.data)
            })
    }, [id])

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {student && (
                <>
                    <div className='w-[700px] h-[270px] items-center flex px-6 py-4  border  border-black mt-16'>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Student Id:  </h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Student Name :  </h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email Id :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Course Id :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Course Name :</h2>
                        </div>
                        <div className='w-7/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {student.studentID}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {student.studentName}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {student.email}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {student.course.courseID}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {student.course.courseName}</h2>
                        </div>
                    </div>
                </>
            )}
            <Link to='/students' className='text-white bg-blue-400 text-2xl font-semibold font-Inter px-4 mt-6 ' >Back To Student List</Link>
        </div>
    )
}

export default Student