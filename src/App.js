import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import AdminDashBoard from './Components/Dashboards/AdminDashBoard';
import TeacherDashBoard from './Components/Dashboards/TeacherDashBoard';
import StudentDashBoard from './Components/Dashboards/StudentDashBoard';
import FacultiesList from './Components/TeacherPages/FacultiesList';
import EditFaculty from './Components/TeacherPages/EditFaculty';
import Faculty from './Components/TeacherPages/Faculty';
import AddFaculties from './Components/TeacherPages/AddFaculties';
import StudentList from './Components/StudentPages/StudentList';
import AddStudent from './Components/StudentPages/AddStudent';
import EditStudent from './Components/StudentPages/EditStudent';
import Student from './Components/StudentPages/Student';
import Attendance from './Components/AttendancePages/Attendance';
import NotFound from './Components/TeacherPages/NotFound';
import GetAttendance from './Components/TeacherPages/GetAttendance';
import AddCourse from './Components/CoursePages/AddCourse';
import CourseList from './Components/CoursePages/CourseList';
import Course from './Components/CoursePages/Course';
import EditCourse from './Components/CoursePages/EditCourse';
import SubjectList from './Components/SubjectPages/SubjectList';
import AddSubject from './Components/SubjectPages/AddSubject';
import Subject from './Components/SubjectPages/Subject';
import EditSubject from './Components/SubjectPages/EditSubject';
import StudentPerformanceList from './Components/PerformancePages/StudentPerformanceList';
import AddPerformance from './Components/PerformancePages/AddPerformance';
import Performance from './Components/PerformancePages/Performance';
import GetAttendanceSheet from './Components/SubjectPages/GetAttendanceSheet';
import ViewAttendance from './Components/AttendancePages/ViewAttendance';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={ <Home />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contactus' element={ <ContactUs />} />
        <Route path='/login' element={ <Login />} />

        <Route path='/' element={<AdminDashBoard />} />
        <Route path='/faculty-dashboard' element={<TeacherDashBoard />} />
        <Route path='/student-dashboard' element={<StudentDashBoard />} /> 

        <Route path='/courses' element={ <CourseList/>} /> 
        <Route path='/course/add' element={ <AddCourse/>} /> 
        <Route path='/course/:id' element={ <Course />} />
        <Route path='/course/update/:id' element={ <EditCourse />} />   

        <Route path='/subjects' element={ <SubjectList/>} /> 
        <Route path='/subject/add' element={ <AddSubject/>} /> 
        <Route path='/subject/:id' element={ <Subject />} />
        <Route path='/subject/update/:id' element={ <EditSubject />} />   
        
        <Route path='/faculties' element={ <FacultiesList />} />             {/*  List the number of teachers*/}
        <Route path='/faculty/:id' element={ <Faculty />} />             {/*  view teacher details by id*/}
        <Route path='/faculty/add' element={ <AddFaculties />} />          {/*  Add new teacher details*/}
        <Route path='/faculty/update/:id' element={ <EditFaculty />} />    {/*  Edit old teacher details*/}

        <Route path='/students' element={ <StudentList />} />             {/*  List the number of students*/}        
        <Route path='/student/:id' element={ <Student/>} />              {/*  view student details*/}         
        <Route path='/student/add' element={ <AddStudent />} />          {/*  Add new student details*/}
        <Route path='/student/update/:id' element={ <EditStudent />} />    {/*  Edit student details*/} 

        <Route path='/performances' element={<StudentPerformanceList/>} />
        <Route path='/performance/:id' element={ <Performance />} />   
        <Route path='/student/performance/add' element={<AddPerformance />} />

        {/* under progress */}
        <Route path='/attendances/:id' element={<Attendance/>} />
        <Route path='/get-attendace' element={<GetAttendance/>} />
        <Route path='/get-attendance-sheet' element={<GetAttendanceSheet /> }/> 
        <Route path='/view/attendance/:id' element={<ViewAttendance/> }/> 
        {/* view/attendance */}

        <Route path='/notfound' element={< NotFound />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={2000}/>{/* this is used to give position and timer to alert box when any task failed or success */}
      
    </BrowserRouter >
  );
}

export default App;
