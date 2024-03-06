import LandingPage from './views/LandingPage';
import PaymentForm from './components/PaymentForm';
// import CreateCourseForm from './components/CreateCourseForm';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AboutUs from './views/AboutUs';
import ContactUs from './components/ContactUs';
import HelpSupportForm from './views/HelpSupportForm';
import CourseDetails from './views/CourseDetails';


function App() {

  return (
    <>

    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route  path="/aboutus" element={<AboutUs/>}/>
      <Route  path="/contactus" element={<ContactUs/>}/>
      <Route  path="/payment" element={<PaymentForm/>}/>
      {/* <Route  path="/addcourse" element={<CreateCourseForm/>}/> */}
      <Route  path="/helpandsupport" element={<HelpSupportForm/>}/>
      <Route path="/courses/:id" element={<CourseDetails/>} />
     </Routes>
   
    </>
  )
}

export default App
