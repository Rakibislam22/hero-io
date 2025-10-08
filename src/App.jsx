import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#f5f5f5]'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
