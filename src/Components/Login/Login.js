import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../Navbars/Navbar'

function Login() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const VarifyUser = () => {
    // console.log("user "+user)
    axios.get(`http://localhost:7777/${user}/${email}/${password}`)
      .then((res) => {       
        if (res.data === true && user === "Admin") {
          console.log(res.data)
          Navigate('/admin-dashboard')
        } if (res.data === true && user === 'teacher') {
          Navigate('/faculty-dashboard')
        } if (res.data === true && user === 'student') {
          Navigate('/student-dashboard')
        } else {
          toast.error('User Details Invalid')
        }
      })
  }


  const handleClick = (event) => {
    event.preventDefault();  //when we use submit button type then we need to use this line to prevent from refreshing page
    console.log(email);
    console.log(password);
    console.log(user);

    if (user && email && password) {
      VarifyUser(event)

      setEmail('')
      setPassword('')
    } else {
      alert("please fill the data")
    }

  }

  return (
    <>
      {/* <Navbar /> */}
      <section className="h-screen bg-slate-50">
        <div className="flex justify-center items-center flex-wrap h-full g-6">
          <div className="rounded-3xl p-20 bg-slate-200 shadow-xl shadow-slate-500">
            <form action='' >
              <div className='text-centre text-xl mb-7 md:ml-6'>Welcome to Login Page</div>
              <div className="mb-6">
                <select
                  name="user"
                  value={user}
                  onChange={(event) => { setUser(event.target.value) }}
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded focus:text-gray-700"
                >
                  <option > Choose User</option>
                  <option > Admin</option>
                  <option > Faculty</option>
                  <option > Student</option>

                </select>
              </div>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded focus:text-gray-700"
                  name='email'
                  value={email}
                  placeholder="Email address"
                  onChange={(event) => { setEmail(event.target.value) }}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded focus:text-gray-700"
                  placeholder="Password"
                  name="password"
                  autoComplete='off'
                  value={password}
                  onChange={(event) => { setPassword(event.target.value) }}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                  >Remember me</label>
                </div>
                <a href="#!" className="text-gray-800">Forgot password?</a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login