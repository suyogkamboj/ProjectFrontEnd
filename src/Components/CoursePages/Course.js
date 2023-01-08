import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Course = () => {
    const [course, setCourse] = useState()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:7777/course/${id}`)
            .then((res) => {
                setCourse(res.data)
            })
    }, [id])

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-black text-3xl font-semibold font-Monteserrat mt-12 '> Course Details</h1>
            {course && (
                <>
                    <div className='w-[700px] h-[200px] items-center flex px-6 py-4  border border-slate-200 mt-16'>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2
                                className='text-black font-semibold text-2xl border-b border-slate-200'>
                                Course Id:
                            </h2>
                            <h2
                                className='text-black font-semibold text-2xl border-b border-slate-200'>
                                Course Name :
                            </h2>
                        </div>
                        <div className='w-7/12 flex flex-col space-y-4'>
                            <h2
                                className='text-black font-semibold text-2xl border-b border-slate-200'>
                                {course.courseID}
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-slate-200'>
                                {course.courseName}
                            </h2>
                        </div>
                    </div>
                </>
            )}
            <Link
                to='/courses'
                className='text-white bg-blue-400 text-2xl font-semibold font-Inter px-4 mt-6 ' >
                Back To Courses List
            </Link>
        </div>
    )
}

export default Course