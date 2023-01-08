import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import FacultyNavbar from '../Navbars/FacultyNavbar'

const FacultiesList = () => {
    const [faculties, setFaculties] = useState([])

    const[courses,setCourses]=useState([])
    const [courseID, setCourseID] = useState()

    const loadFaculties = () => {
        axios.get("http://localhost:7777/faculties")
            .then((res) => {
                setFaculties(res.data)
            })
    }

    useEffect(() => {
        loadFaculties();
    }, [])

    const DeleteFaculty = (id) => {
        axios.delete(`http://localhost:7777/faculty/delete/${id}`).then(
            (res) => { 
                if(res.data !== false){
                    loadFaculties()
                    toast.success('Teacher Details Delated Successfully')
                }else{
                    toast.error('Teacher ID Does not exist')
                }
             }
        )       
    }

    useEffect( ()=>{
        axios.get(`http://localhost:7777/courses`).then( (res) => {setCourses(res.data)})
    }, [])

    const handleCourseChange = (event ) =>{
        const value=event.target.value  // if we use data without storing in local variable then we get undefined variable in same function 
        setCourseID(event.target.value)  // we can not use courseID directly if we use we will get undefined variable
        
        axios.get(`http://localhost:7777/faculties/get/${value}`).then( (res) => {
            setFaculties(res.data)
        })
    }

    return (
        <>
            <FacultyNavbar />
            <div className='flex flex-col w=full h-full px-10 py-8'>
                <h1 className='text-black text-3xl font-semibold '>Faculties List</h1>
                <select
                    name="courseID"
                    value={courseID}
                    onChange={handleCourseChange}
                    className='w-[30%] bg-white/10 text-sm font-normal outline-none bg-slate-100 rounded-lg mt-2 py-2 pl-4'
                >
                    <option > Choose Course Id </option>
                    {courses.map((data,index) => {
                        return <option key={index} value={data.courseID}>{data.courseID} - {data.courseName}</option>
                    })
                    }
                </select>
                <div className="flex flex-col mt-4">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-lg bg-slate-200">
                                <table className="min-w-full">
                                    <thead>
                                        
                                        <tr>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Sr. No.
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Faculty Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Faculty Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Email Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Course Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                Teaching Subject Id
                                            </th>
                                            <th scope="col" className="flex justify-center text-sm font-medium px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {faculties.map((data, index) => (
                                            <tr key={index} className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.facultyID}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.facultyName}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.course.courseID}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {data.subject.subjectID}
                                                </td>
                                                <td className="flex justify-center items-center space-x-4 mt-1">
                                                    <Link
                                                        to={`/faculty/${data.facultyID}`}
                                                        className='px-6 py-2 text-white bg-black rounded-lg font-normal'>
                                                        View
                                                    </Link>
                                                    <Link
                                                        to={`/faculty/update/${data.facultyID}`}
                                                        className='px-6 py-2 text-white bg-blue-500 rounded-lg font-normal'>
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => { DeleteFaculty(data.facultyID) }}
                                                        className='px-6 py-2 text-white bg-red-500 rounded-lg font-normal'>
                                                        Delete
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

export default FacultiesList