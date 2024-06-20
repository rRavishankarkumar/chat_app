import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from'react-hot-toast';


function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <SignUp /> */}
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App
