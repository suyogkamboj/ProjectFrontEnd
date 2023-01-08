import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import SubjectNavbar from '../Navbars/SubjectNavbar'

const SubjectList = () => {
    const [subjects, setSubjects] = useState([])

    const[courses,setCourses]=useState([])
    const [courseID, setCourseID] = useState()

    const loadCourses_subjects = () => {
        axios.get('http://localhost:7777/subjects').then(res => {
            setSubjects(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        loadCourses_subjects();
    }, [])

    const DeleteSubject = (id) => {
        axios.delete(`http://localhost:7777/subject/delete/${id}`).then(
            // loadCourses_subjects()    // if we write in this way then our page will not render on single click
            res => {loadCourses_subjects()} // thas why we need to call it in callback function 
        )
        toast.success('Course Details Delated Successfully')
    }

    useEffect( ()=>{
        axios.get(`http://localhost:7777/courses`).then( (res) => {setCourses(res.data)})
    }, [])

    const handleCourseChange = (event ) =>{
        const value=event.target.value  // if we use data without storing in local variable then we get undefined variable in same function 
        setCourseID(event.target.value)  // we can not use courseID directly if we use we will get undefined variable
        
        axios.get(`http://localhost:7777/subjects/get/${value}`).then( (res) => {
            setSubjects(res.data)
        })
    }

    return (
        <>
            <SubjectNavbar />
            <div className='flex flex-col w=full h-full px-10 py-8'>
                <h1 className='text-black text-3xl font-semibold '>Subject List </h1>
                <select
                    name="courseID"
                    value={courseID}
                    onChange={handleCourseChange}
                    className='w-[30%] bg-white/10 text-sm font-normal outline-none bg-slate-100 rounded-lg mt-2 py-2 pl-4'
                >
                    <option >Choose Course Id</option>
                    {courses.map((data) => {
                        return <option value={data.courseID}>{data.courseID} - {data.courseName}</option>
                    })
                    }
                </select>
                <div className="flex flex-col mt-4">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-lg bg-slate-200">
                                <table className="min-w-full ">
                                    <thead className="">
                                        <tr className=''>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Sr.No.
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Subject Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Subject Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Course Id
                                            </th>
                                            <th scope="col" className="flex justify-center text-sm font-medium px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='border border-black'>
                                        {subjects.map((data, index) => (
                                            <tr key={index} className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.subjectID}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.subjectName}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.course.courseID}
                                                </td>
                                                <td className="flex justify-center items-center space-x-4 mt-1">
                                                    <Link
                                                        to={`/subject/${data.subjectID}`}
                                                        className='px-6 py-2 text-white bg-black rounded-lg font-normal'>
                                                        View Subject
                                                    </Link>
                                                    <Link
                                                        to={`/subject/update/${data.subjectID}`}
                                                        className='px-6 py-2 text-white bg-blue-500 rounded-lg font-normal'>
                                                        Edit subject
                                                    </Link>
                                                    <button
                                                        onClick={() => { DeleteSubject(data.subjectID) }}
                                                        className='px-6 py-2 text-white bg-red-500 rounded-lg font-normal'>
                                                        Delete Subject
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

export default SubjectList