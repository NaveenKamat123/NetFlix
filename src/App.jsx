import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"
import Home from './components/Home';
import Header from "./components/Headers/Header"
import Footer from './components/Footer/Footer';


function App() {
  

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route key="home" exact path="/" element={<Home/>} />
        
        
      </Routes>



      <Footer/>
    </Router>
     
    </>
  )
}

export default App
