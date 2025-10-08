import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className=''>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
