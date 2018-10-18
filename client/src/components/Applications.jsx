import React from 'react'
import {TransitionMotion, spring} from 'react-motion'

const leavingSpringConfig = {stiffness: 60, damping: 15}

class Applications extends React.Component {
  state = {mouse: [], now: 't' + 0}

  handleMouseMove = ({pageX, pageY}) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: 't' + Date.now(),
      }
    })
  }

  handleTouchMove = (e) => {
    e.preventDefault()
    this.handleMouseMove(e.touches[0])
  }

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    }
  }

  render () {
    const {mouse: [mouseX, mouseY], now} = this.state
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      }
    }]
    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles =>
          <div>
            <div
              onMouseMove={this.handleMouseMove}
              onTouchMove={this.handleTouchMove}
              className="demo7">
              {circles.map(({key, style: {opacity, scale, x, y}}) =>
                <div
                  key={key}
                  className="demo7-ball"
                  style={{
                    opacity: opacity,
                    scale: scale,
                    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  }} />
              )}
            </div>
            <div className='applicationBoxes'>
              <div className='Meili'>
                  <div className='appTitle'>meili</div>
                  <div className='appDesc'>Travel suite for customers that travel to New York and have their trip planned out for them. Sign up using our onboarding process to customize recommendations based on budget, trips dates, weather, and other travel preferences. Seamlessly move around either the days or the activities, or look for others that full within your specifications.</div>
                  <div className='github'><a href='https://github.com/team-marquez/thesis' target='_blank'>GITHUB</a></div>
              </div>
              <div className='Moodvies'>
                <div className='appTitle'>moodvies</div>
                <div className='appDesc'>Serving you movies based on your mood. Enjoy our geolocation services to show you the nearest theaters, and which movies are being played. Then enter our search system to find movies to enjoy at your own will based on moods. With a click, bring up a modal which displays user ratings, the trailer, and a description. Using Stripe, you can buy a copy of the movie if it is available.</div>
                <div className='github'><a href='https://github.com/chewbecca-deathstar/KingdomOfRohan' target='_blank'>GITHUB</a></div>
              </div>
              <div className='WhereYouAt'>
                <div className='appTitle'>where you at</div>
                <div className='appDesc'>Chat application which will connect users from all around the world and display the central location of those users. Easily add friends and your favorite messages with a simple click. Supports up to 250,000 concurrent users with the use of Node.JS and Socket.io real time broadcasting.</div>
                <div className='github'><a href='https://github.com/GreenfieldMasterpiece/WhereYouAt' target='_blank'>GITHUB</a></div>
              </div>
            </div>
          </div>
        }
      </TransitionMotion>
    )
  }
}


export default Applications;
