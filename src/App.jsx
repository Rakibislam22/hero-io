import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Pages/Loading';

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      {navigation.state === "loading" && <Loading></Loading> }
      <div className='bg-[#f5f5f5]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
