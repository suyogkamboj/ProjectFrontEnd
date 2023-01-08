import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Subject = () => {
    const [subject, setSubject] =useState()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:7777/subject/${id}`)
            .then((res) => {
                setSubject(res.data)
            })
    }, [id])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-black text-3xl font-semibold font-Monteserrat mt-8 '> Subject Details</h1>
            {subject && (
                <>
                    <div className='w-[700px] h-[200px] items-center flex px-6 py-4  border  border-black mt-16'>
                    
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                Subject Id:
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                Subject Name :
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                Course Id :
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                Course Name :
                            </h2>
                        </div>
                        <div className='w-7/12 flex flex-col space-y-4'>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                {subject.subjectID}
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                {subject.subjectName}
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                {subject.course.courseID}
                            </h2>
                            <h2
                                className='text-black font-semibold font-Inter text-2xl border-b border-black'>
                                {subject.course.courseName}
                            </h2>
                        </div>
                    </div>
                </>
            )}
            <Link
                to='/subjects'
                className='text-white bg-blue-400 text-2xl font-semibold font-Inter px-4 mt-6 ' >
                Back To Subject List
            </Link>
        </div>
  )
}

export default Subject