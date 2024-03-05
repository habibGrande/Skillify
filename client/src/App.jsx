import LandingPage from './views/LandingPage';
import Profile from './views/Profile';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";


function App() {

  return (
    <>
     <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
     </Routes>
   
    </>
  )
}

export default App
