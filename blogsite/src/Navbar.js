import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({title}) {
  return (
    <nav className='navbar'>
        <h1>{title}</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>
                    New Blog
            </Link>
        </div>
    </nav>
  )
}

export default Navbar