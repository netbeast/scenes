import React from 'react'

import netbeast from 'netbeast'

export default class Picker extends React.Component {
  constructor () {
    super()
    this.state = {
      color: '#fff',
      power: false
    }
  }

  handleClick () {

  }

  render () {
    return (
      <div className='text-center'>
        <br/><br/>
        <button className='btn btn-filled btn-primary' onClick={ this.handleClick.bind(this, 'good-morning') }>Good Morning</button>
        &nbsp;&nbsp;
        <button className='btn btn-filled btn-primary' onClick={ this.handleClick.bind(this, 'film') }>Watching a Film</button>
        &nbsp;&nbsp;
        <button className='btn btn-filled btn-primary' onClick={ this.handleClick.bind(this, 'party') }>Party</button>
        <br/>
      </div>
    )
  }
}
