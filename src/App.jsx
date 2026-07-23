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
import SponsorUS from './Components/SponsorUS'
import Feedback from './Components/Feedback'
import Hackathon from './Components/Hackathon'
import MentorVolunteer from './Components/MentorVolunteer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AISummit from './Components/AISummit'
import Sponsor from './Components/Summit/Sponsor'
import Frame from './Components/Frame'


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
        <Route path ="/SponsorUS" element = {<SponsorUS/>}/>
        <Route path ="/feedback" element = {<Feedback/>}/>
        <Route path ="/hackathon" element = {<Hackathon/>}/>
        <Route path ="/MentorVolunteer" element = {<MentorVolunteer/>}/>
        <Route path ="/aisummit" element = {<AISummit/>}/>
        <Route path ="/aisummit/sponsor" element ={<Sponsor/>}/>
        <Route path ="/frame" element = {<Frame/>}/>




      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
