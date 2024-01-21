import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import "../App.css"



function Homepage() {
  return (

      
<div className="wrapper">
    <div> 
      <NavBar />
        <div className="left-col">
            <h1>
              Your #1 place for spots in your town!
            </h1>
            <p>All of our spots are organized by type. Feel free to take a look!</p>
            <Link className="nav-link" to="/Spots">
              Check out our ledges! 
            </Link>
          
          <div className="updates">
            <p className="Launch date">January 2024!</p>
            <p className="Details"> Welcome to the brand new site. We're glad you're here</p>
          </div>
        </div>

        <div className="right-col">
          <div className="card card1">
            <div className="card-details">
              <a href="spots" className="spot-types">Stairs</a>
            </div>
          </div>
          <div className="card card2">
            <div className="card-details">
              <a href="spots" className="spot-types">Rails</a>
            </div>
          </div><div className="card card3">
            <div className="card-details">
              <a href="spots" className="spot-types">Other</a>
            </div>
          </div>

        </div>
    </div>
</div>

  )
}

export default Homepage
