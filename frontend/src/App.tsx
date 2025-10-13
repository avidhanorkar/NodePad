import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
const App = () => {
  return (
    <div className=' min-h-screen text-white w-full font-mono'>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App