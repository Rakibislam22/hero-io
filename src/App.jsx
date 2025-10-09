import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#f5f5f5]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
