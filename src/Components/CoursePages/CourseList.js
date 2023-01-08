import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import CourseNavbar from '../Navbars/CourseNavbar'

const CourseList = () => {
    const [courses, setCourses]=useState([])

    const loadCourses = () => {
        axios.get("http://localhost:7777/courses")
            .then((res) => {
                setCourses(res.data)
            })
    }

    useEffect(() => {
        loadCourses();
    }, [])

    const DeleteCourse = (id) => {
        axios.delete(`http://localhost:7777/course/delete/${id}`).then(
            res => {loadCourses()}
        )
        toast.success('Course Details Delated Successfully')
    }

    return (
        <>
            <CourseNavbar />
            <div className='flex flex-col w=full h-full px-10 py-8'>
                <h1 className='text-black text-3xl font-semibold '>Courses List</h1>
                
                <div className="flex flex-col mt-4">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-lg bg-slate-200">
                                <table className="min-w-full border">
                                    <thead className="">
                                        <tr className=''>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Sr.No.
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Course Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Course Name
                                            </th>
                                            <th scope="col" className="flex justify-center text-sm font-medium px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='border border-black'>
                                        {courses.map((data, index) => (
                                            <tr key={index} className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.courseID}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.courseName}
                                                </td>
                                                <td className="flex justify-center items-center space-x-4 mt-1">
                                                    <Link
                                                        to={`/course/${data.courseID}`}
                                                        className='px-6 py-2 text-white bg-black rounded-lg font-normal'>
                                                        View Course
                                                    </Link>
                                                    <Link
                                                        to={`/course/update/${data.courseID}`}
                                                        className='px-6 py-2 text-white bg-blue-500 rounded-lg font-normal'>
                                                        Edit Course
                                                    </Link>
                                                    <button
                                                        onClick={()=>{DeleteCourse(data.courseID)}}
                                                        className='px-6 py-2 text-white bg-red-500 rounded-lg font-normal'>
                                                        Delete Course
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseList