import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PerformanceNavbar from '../Navbars/PerformanceNavbar'

const StudentPerformanceList = () => {
    const [students, setStudents] = useState([])

    const [courses, setCourses] = useState([])
    const [courseID, setCourseID] = useState()

    const loadStudents = () => {
        axios.get("http://localhost:7777/students")
            .then((res) => {
                setStudents(res.data)
            })
    }

    useEffect(() => {
        loadStudents();
    }, [])

    useEffect( ()=>{
        axios.get(`http://localhost:7777/courses`).then( (res) => {setCourses(res.data)})
    }, [])

    const handleCourseChange = (event ) =>{
        const value=event.target.value  
        setCourseID(event.target.value) 

        axios.get(`http://localhost:7777/students/get/${value}`).then( (res) => {
            setStudents(res.data)
        })
    }

    return (
        <>
            <PerformanceNavbar />
            <div className='flex flex-col w=full h-full px-10 py-8'>
                <h1 className='text-black text-3xl font-semibold '>Student Performance List</h1>
                <select
                    name="courseID"
                    value={courseID}
                    onChange={ handleCourseChange }
                    className='w-[30%] bg-white/10 text-sm font-normal outline-none border border-zinc-400 mt-2 py-2 pl-4'
                >
                    <option >---- Choose Course Id ----</option>
                    {courses.map((data, index) => {
                        return <option key={index} value={data.courseID}>{data.courseID} - {data.courseName}</option>
                    })
                    }
                </select>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full border border-black">
                                    <thead className=" border-b">
                                        <tr className='bg-white text-black text-lg font-medium  '>
                                            <th scope="col" className="px-6 py-4 text-left">
                                                Sr. No.
                                            </th>
                                            <th scope="col" className="px-6 py-4 text-left">
                                                Student Id
                                            </th>
                                            <th scope="col" className=" px-6 py-4 text-left">
                                                Course ID
                                            </th>
                                            <th scope="col" className="px-6 py-4 text-left">
                                                Subject ID -- Marks
                                            </th>
                                            <th scope="col" className="flex justify-center px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {
                                            students.map((data, index) => (
                                                <tr key={index} className="bg-white border-b-black text-gray-900  text-lg">
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{index + 1}</td>
                                                    <td className="font-light px-6 py-4 whitespace-nowrap">
                                                        {data.studentID}
                                                    </td>
                                                    <td className="font-light px-6 py-4 whitespace-nowrap">
                                                        {data.course.courseID}
                                                    </td>
                                                    <td className="font-light px-6 py-4 whitespace-nowrap">
                                                        {
                                                            data.studentPerformance.length>0 ? data.studentPerformance.map((item) =>  
                                                                <tr>
                                                                    <td> {item.id.subjectID} -- {item.marks} </td>
                                                                </tr>
                                                                
                                                            ) : " Yet to Appear for Exam "
                                                        }

                                                    </td>
                                                    <td className="flex justify-center items-center space-x-4 mt-1">
                                                    <Link
                                                        to={`/performance/${data.studentID}`}
                                                        className='px-6 py-2 text-black bg-green-300 rounded-lg font-normal'>
                                                        View
                                                    </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
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

export default StudentPerformanceList