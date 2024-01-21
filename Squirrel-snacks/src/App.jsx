import { useState } from "react"
import { Routes, Route } from "react-router"
import "./App.css"
import NavBar from "./components/NavBar"
import Homepage from "./Pages/Homepage"
import Spots from "./Pages/Spots"
import Submit from "./Pages/Submit"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Spots" element={<Spots />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </>
  )
}

export default App
