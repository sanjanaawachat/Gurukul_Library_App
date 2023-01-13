import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavScrollExample from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './index.css';
import Lottie from 'react-lottie';
function App() {
  return (
    <>
    <BrowserRouter>
    <NavScrollExample/>
    <Routes>
          <Route path='/' element={<Home/>} /> 
    </Routes>
    </BrowserRouter>  
  </>
  );
}

export default App;
