import React from 'react'
import {TransitionMotion, spring} from 'react-motion'
import anime from 'animejs'

const leavingSpringConfig = {stiffness: 60, damping: 15}

class AboutMe extends React.Component {
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
            className="demo6">
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
          <div className='bio'>
              <div className='infoHeader'>• • • ← about me → • • •</div>
              <br/>
              <div id='bioText'>I am Roman Gorelik. I am a former chef who went on the path of software engineering. I graduated Hack Reactor in September 2018, an intense Javascript course focusing on both front end and back end.</div>
          </div>
          <div className='skills'>
              <div className='infoHeader'>• • • ← skills → • • •</div>
              <br/>
              <div className='infoText'>
                <h2 id='skillsType'>Tools</h2>
                  <p id='skillsText'>Git ■ Mocha ■ Chai ■ Enzyme ■ Postman ■ Chrome Tools Babel ■ Webpack ■ AWS EC2</p>
                <h2 id='skillsType'>Front End</h2>
                  <p id='skillsText'>React ■ Redux ■ React Router ■ Apollo ■ AngularJS JQuery ■ C3</p>
                <h2 id='skillsType'>Back End</h2>
                  <p id='skillsText'>MySQL ■ PostgreSQL ■ GraphQL ■ Sequalize ■ MongoDB Mongoose ■ Firebase</p>
                <h2 id='skillsType'>Server</h2>
                  <p id='skillsText'>NodeJS ■ Express ■ Socket.IO</p>
              </div>
          </div>
          <div className='contact'>
              <div className='infoHeader'>• • • ← contact → • • •</div>
              <br/>
              <div id='contactText'><a href='https://github.com/romangorelik' target='_blank'>github</a> ■ <a href='https://www.linkedin.com/in/roman-gorelik-4731b0155/' target='_blank'>linkedin</a> ■ <a href="mailto:romang31@gmail.com">romang31@gmail.com</a></div>
          </div>
        </div>
        }
      </TransitionMotion>
    )
  }
}

export default AboutMe
