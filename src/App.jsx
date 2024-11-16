
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPagee from './Pages/LandingPagee'
import Homee from './Pages/Homee'
import WatchHistoryy from './Pages/WatchHistoryy'
import { Route, Routes } from 'react-router-dom'








function App() {
 

  return (
    <>
   <Header/>
  <Routes>
  <Route path='/' element={<LandingPagee/>}/>
  <Route path='/home' element={<Homee/>}/>
  <Route path='/watch-history' element={<WatchHistoryy/>}/>

  </Routes>



   <Footer/>
    </>
  )
}

export default App
