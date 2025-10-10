import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Pages/Loading';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <div className='bg-[#f5f5f5]'>
        <Suspense fallback={<Loading></Loading>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
