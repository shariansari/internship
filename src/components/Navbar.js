import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link className="nav-item nav-link active" to="/">Top Performer Of The Day</Link>
            <Link className="nav-item nav-link" to="/weak">Top Performer Of This Week</Link>
            <Link className="nav-item nav-link " to="/Month">Top Performer Of This Month</Link>
          </div>
        </div>
      </nav>
    
    </div>
  )
}

export default Navbar