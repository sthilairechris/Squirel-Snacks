import React from "react"
import spikes from "./assets/Spikes.svg"
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <header>
        <a href="index.html">
          <img className="Main-logo" src={spikes} alt="P2 Logo" />
        </a>
        <nav>
          <ul>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Spots">
              Spots
            </Link>
            <Link className="nav-link" to="/Submit">
              Submit
            </Link>
            <Link className="nav-link" to="">
              About
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
