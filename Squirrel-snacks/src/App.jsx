import { useState } from "react"
import { Routes, Route } from "react-router"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import Spots from "./Spots"
import Submit from "./Submit"

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
