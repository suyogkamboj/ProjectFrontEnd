import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Faculty = () => {
    const [faculty, setFaculty] = useState()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:7777/faculty/${id}`)
            .then((res) => {
                setFaculty(res.data)
            })
    }, [id])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-black text-3xl font-semibold font-Monteserrat mt-8 '> Faculty Details</h1>
            {faculty && (
                <>
                    <div className='w-[900px] h-[350px] items-center flex px-6 py-4  border  border-black mt-16'>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Faculty Id:  </h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Full Name :  </h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email Id :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Course Id :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Course Name :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Subject Id :</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'>Subject Name :</h2>
                        </div>
                        <div className='w-7/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {faculty.facultyID}</h2>  
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {faculty.facultyName}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'> {faculty.email}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {faculty.course.courseID}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {faculty.course.courseName}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {faculty.subject.subjectID}</h2>
                            <h2 className='text-black font-semibold font-Inter text-2xl  border-b border-black'> {faculty.subject.subjectName}</h2>
                        </div>
                    </div>
                </>
            )}
            <Link to='/faculties' className='text-white bg-blue-400 text-2xl font-semibold font-Inter px-4 mt-6 ' >Back To Teachers List</Link>
        </div>
    )
}

export default Faculty