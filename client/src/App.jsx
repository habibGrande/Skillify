import LandingPage from './views/LandingPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';




import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AboutUs from './views/AboutUs';
import ContactUs from './components/ContactUs';


function App() {

  return (
    <>

     <Routes>
     <Route path="/home" element={<LandingPage />} />
     <Route path="/login" element={<LoginForm />} />
    <Route  path="/reg" element={<RegistrationForm/>}/>
    <Route  path="/aboutus" element={<AboutUs/>}/>
    <Route  path="/contactus" element={<ContactUs/>}/>



     </Routes>
   
    </>
  )
}

export default App
