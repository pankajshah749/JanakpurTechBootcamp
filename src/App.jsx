import './App.css'
import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Instructor from './Components/Instructor'
import Layout from './Components/Layout'
import Courses from './Components/Courses'
import About from './Components/About'
import LearnAI from './Components/LearnAI'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route  path ="/" element = {<Layout/>}>
        
        <Route index element = {<Home/>}/>
        <Route path ="/learnai" element = {<LearnAI/>}/>
        <Route path ="/instructors" element = {<Instructor/>}/>
        <Route path ="/faq" element = {<FAQ/>}/>
        <Route path ="/courses" element = {<Courses/>}/>
        <Route path ="/about" element = {<About/>}/>



      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
