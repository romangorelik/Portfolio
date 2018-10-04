import React from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import SVG from './SVG.jsx'

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {

  render () {
    return (
      <div>
        <nav>
          <a className='headerTags1'><Link to='/'>About Me</Link></a>
          <a className='headerTags2'><Link to='/applications'>Applications</Link></a>
          <a className='headerTags3'><Link to='/resume'>Resume</Link></a>
        </nav>
        <div className='nameAboutMe'><SVG/></div>
    </div>
    )
  }
}

export default Header


