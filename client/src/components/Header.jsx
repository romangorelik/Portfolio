import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div>
    <nav>
      <a className='headerTags1'><Link to='/'>About Me</Link></a>
      <a className='headerTags2'><Link to='/applications'>Applications</Link></a>
      <a className='headerTags3'><Link to='/resume'>Resume</Link></a>
    </nav>
    <p className='nameAboutMe'>ROMAN</p>
  </div>
)

export default Header