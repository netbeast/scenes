import React from 'react'

import netbeast from 'netbeast'

export default class Picker extends React.Component {
  constructor () {
    super()
    this.state = {
      scene: ''
    }
  }

  handleClick (scene) {
    this.setState({ scene })
  }

  renderMovie () {
    return (
      <video controls autoPlay width='100%' height='450px' controls>
        <source src='media/countdown.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    )
  }

  renderMorning () {
    return (
      <div className='morning'>
        <img src='media/Alarm-Clock.jpg.jpg' width='100%' height='450px' alt='morning-photo' />
      </div>
    )
  }

  renderSaving () {
    return (
      <div className='saving text-center'>
        <br/><br/><br/><br/><br/>
        <h1 style={{ color: 'white' }}>Energy saving mode: <br/> ON</h1>
      </div>
    )
  }

  render () {
    return (
      <div ref='container' className='container' style={containerStyle}>
        <br/><br/>
        {this.state.scene === 'movie' ? this.renderMovie() : null}
        {this.state.scene === 'morning' ? this.renderMorning() : null}
        {this.state.scene === 'saving' ? this.renderSaving() : null}
        <div className='scene-btns text-center'>
          <br/><br/>
          <button className='btn btn-filled btn-lg btn-primary' onClick={ this.handleClick.bind(this, 'morning') }>Good Morning</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='btn btn-filled btn-lg btn-primary' onClick={ this.handleClick.bind(this, 'movie') }>Movie</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='btn btn-filled btn-lg btn-primary' onClick={ this.handleClick.bind(this, 'saving') }>Saving mode</button>
          <br/>
        </div>
      </div>
    )
  }
}

const containerStyle = {
  height: '100%',
  width: '100%',
  display: 'block'
}
