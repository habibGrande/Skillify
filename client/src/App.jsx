import LandingPage from './views/LandingPage'
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

     </Routes>
   
    </>
  )
}

export default App
