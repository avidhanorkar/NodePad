import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Common/Navbar'
const App = () => {
  return (
    <div className='bg-[#0D0F16] min-h-screen text-white w-full font-mono'>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App