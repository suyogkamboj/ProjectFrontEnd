import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Attendance = () => {
  const [students, setStudents] = useState([])
  const [date, setDate] = useState('')

  const { id } = useParams()

  const loadAllStudents = () => {
    axios.get(`http://localhost:7777/students/get/${id}`).then(res => {
      setStudents(res.data)
      console.log(res.data);
    })
  }

  useEffect(() => {
    loadAllStudents()
  }, [])

  const handleAttendance = (studentID, status) => {
    axios.post(`http://localhost:7777/attendance/add/${date}/students/${studentID}/${status}`).then(res => {
      console.log(res.data);
      loadAllStudents();
    })
    toast.success('Attendance added')
  }
  return (
    <>
      <div className='flex flex-col w=full h-full px-10 py-8'>
        <div className='flex flex-col w=full h-full justify-center items-center py-8'>
          <form className='text-black font-semibold text-3xl'>
            <label className=''>Mark Attendance : </label>
          </form>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border border-black">
                  <thead className=" border-b">
                    <tr className='bg-white text-black text-sm font-medium  '>
                      <th scope="col" className="px-6 py-4 text-left">
                        Sr.No.
                      </th>
                      <th scope="col" className="px-6 py-4 text-left">
                        Student ID
                      </th>
                      <th scope="col" className=" px-6 py-4 text-left">
                        Student Name
                      </th>
                      <th scope="col" className="px-6 py-4 text-left">
                        Course ID
                      </th>
                      <th scope="col" className="px-6 py-4 text-left ">
                        Date
                      </th>
                      <th scope="col" className="flex justify-center ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {students.map((data, index) => (
                      <tr key={index} className="bg-white border-b-black text-gray-900  text-sm">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{index + 1}</td>
                        <td className="font-light px-6 py-4 whitespace-nowrap">
                          {data.studentID}
                        </td>
                        <td className="font-light px-6 py-4 whitespace-nowrap">
                          {data.studentName}
                        </td>
                        <td className="font-light px-6 py-4 whitespace-nowrap">
                          {data.course.courseID}
                        </td>
                        <td className=" font-light px-6 py-4 whitespace-nowrap">
                          <input
                            type='date'
                            className='outline-none border border-zinc-400 rounded-sm '
                            value={date}
                            onChange={event => { setDate(event.target.value) }}
                          />
                        </td>
                        <td className="flex justify-center items-center space-x-4 mt-1">
                          <button
                            onClick={() => { handleAttendance(data.studentID, 'present') }}
                            className='px-6 py-2 text-black bg-green-500 rounded-lg font-normal'>
                            Present
                          </button>
                          <button
                            onClick={() => { handleAttendance(data.studentID, 'absent') }}
                            className='px-6 py-2 text-black bg-red-500 rounded-lg font-normal'>
                            Absent
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

export default Attendance