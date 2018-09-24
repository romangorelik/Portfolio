import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div>
    <nav>
      <a><Link to='/'>About Me</Link></a>
      <a><Link to='/applications'>Applications</Link></a>
      <a><Link to='/resume'>Resume</Link></a>
    </nav>
  </div>
)

export default Header