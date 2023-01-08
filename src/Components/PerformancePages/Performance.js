import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Performance = () => {
    const [student, setStudent] = useState()

    const { id } = useParams()

    // const id = 1
    useEffect(() => {
        axios.get(`http://localhost:7777/student/${id}`)
            .then((res) => {
                setStudent(res.data)
                console.log(res.data)
            })
    }, [id])

    return (
        <div className='md:w-auto lg:w-full h-full flex flex-col justify-center items-center'  >
            {
                student && (
                    <section className='items-center justify-center flex flex-col px-16 py-4 mt-4'>
                        <h1 className='text-2xl mb-4 ' >Student Performance</h1>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border border-b-black justify-center items-center">
                                            <tr className="border-b">
                                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Student Id
                                                </th>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.studentID}
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Student Name
                                                </th>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.studentName}
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Course
                                                </th>
                                                <tr className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <tr>
                                                        <th className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                            Course ID -
                                                        </th>
                                                        <th className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                            Course Name
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                            {student.course.courseID}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                            {student.course.courseName}
                                                        </td>
                                                    </tr>
                                                </tr>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Marks
                                                </th>
                                                <tr>
                                                    <th className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        Subject ID -
                                                    </th>
                                                    <th className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        Marks
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        {student.studentPerformance.length > 0 ? student.studentPerformance[0].id.subjectID : " Absent "}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        {student.studentPerformance.length > 0 ? student.studentPerformance[0].marks : " Absent "}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        {student.studentPerformance.length > 0 ? student.studentPerformance[1].id.subjectID : " Absent "}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        {student.studentPerformance.length > 0 ? student.studentPerformance[1].marks : " Absent "}
                                                    </td>
                                                </tr>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </div >
    )
}

export default Performance