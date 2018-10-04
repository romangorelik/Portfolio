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
                  <div className='appTitle'>Meili</div>
              </div>
              <div className='Moodvies'>
                <div className='appTitle'>Moodvies</div>
              </div>
              <div className='WhereYouAt'>
                <div className='appTitle'>Where You At</div>
              </div>
            </div>
          </div>
        }
      </TransitionMotion>
    )
  }
}


export default Applications;