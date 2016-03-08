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
      <div>
        <button onClick={ this.handleClick.bind(this, 'good-morning') }>Good Morning</button>
        <button onClick={ this.handleClick.bind(this, 'film') }>Watching a Film</button>
        <button onClick={ this.handleClick.bind(this, 'party') }>Party</button>
      </div>
    )
  }
}
