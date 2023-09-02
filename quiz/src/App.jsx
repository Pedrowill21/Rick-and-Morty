import { useState } from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom' 

import './App.css'
import NavBar from './components/NavBar'
import Home from "./pages/home/Home"
import Game from './pages/Game/Game'
import GameOver from './pages/GameOver/GameOver'
import About from './pages/About/About'
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/game' element={ <Game/> }/>
              <Route path='/gameOver' element={ <GameOver/> }/>
              <Route path='/about' element={ <About/> }/>

             

          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
