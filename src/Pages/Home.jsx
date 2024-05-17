import React from 'react'
import RightSidebar from '../components/RightSidebar'
import ContactUs from '../Pages/ContactUs'
import AboutMe from '../Pages/AboutMe'
import { Routes,Route } from 'react-router-dom'
import FlipBook from './FlipBook'


const Home = () => {
  return (
    <div className='bg-black'>
          {/* <RightSidebar/> */}
  
        <Routes>        
         
        <Route path='/' element={<FlipBook/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='*' element={<FlipBook/>}/>
        </Routes>
   
  
      
    </div>
  )
}

export default Home
