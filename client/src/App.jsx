import LandingPage from './views/LandingPage';

import Profile from './views/Profile';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import PaymentForm from './components/PaymentForm';
import CreateCourseForm from './components/CreateCourseForm';
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
      <Route  path="/payment" element={<PaymentForm/>}/>
      <Route  path="/addcourse" element={<CreateCourseForm/>}/>
      <Route  path="/helpandsupport" element={<HelpSupportForm/>}/>
      <Route path="/courses/:id" element={<CourseDetails/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginForm />} />
      <Route  path="/reg" element={<RegistrationForm/>}/>
      <Route  path="/aboutus" element={<AboutUs/>}/>
      <Route  path="/contactus" element={<ContactUs/>}/>
     </Routes>
   
    </>
  )
}

export default App
