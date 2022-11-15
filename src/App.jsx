import { useState } from 'react'
import './App.css'
import Navbar from './layout/Nav-bar/Navbar'
import Home from './pages/home/Home'


function App() {

  return (
    <div className="App">
    <Navbar/>  
    <Home/>
    </div>
  )
}

export default App
