import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
        
            <Link to="/">Top Performer</Link>
            <Link to="/Weak">Performer Of The Weak</Link>
            <Link to="/Month">Performer Of The Month</Link>
        
        </nav>
    
    </div>
  )
}

export default Navbar