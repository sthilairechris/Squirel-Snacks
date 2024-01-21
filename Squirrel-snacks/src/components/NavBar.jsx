import React from "react"
import spikes from "../assets/spike head.svg"
import "../Styles/NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <header>
        <nav>
        <a href="index.html"><img className="Main-logo" src={spikes} alt="P2 Logo" /></a>
          <ul>
            <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
            </li>
            <li>
            <Link className="nav-link" to="/Spots">
              Spots
            </Link>
            </li>
            <li>
            <Link className="nav-link" to="/Submit">
              Submit
            </Link>
            </li>
            <li>
            <Link className="nav-link" to="">
              About
            </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
