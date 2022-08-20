import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "assets/scss/style.scss"
import LandingPages from "./pages/landingPage"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPages />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
