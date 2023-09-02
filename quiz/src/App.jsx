import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import './App.css'
import NavBar from './components/NavBar'
import Home from "./pages/home/Home"
import Game from './pages/Game/Game'
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/game' element={ <Game/> }/>

          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
