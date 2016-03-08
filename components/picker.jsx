import React from 'react'

import netbeast from 'netbeast'

export default class Picker extends React.Component {

  handleMorning () {
    // 
    // netbeast('music').set({volume: 15, track: __dirname + '/media/morningsong.mp3'})
    // .then(function (data) {
    //   console.log(data)
    // }).catch(function (err) {
    //   console.log('ERR')
    //   console.log(err)
    // })
    //
    var i = 0
    var timer = setInterval(function () {
      if (i >= 0 && i <= 25) {
        netbeast('lights').set({color: {r: 10 * i, g: 10 * i, b: 10 * i}})
        i++
      } else clearInterval(timer)
    }, 400)

  }

  handleFilm () {
  }

  handleParty () {
  }

  render () {
    return (
      <div>
        <button onClick={ this.handleMorning.bind(this) }>Good Morning</button>
        <button onClick={ this.handleFilm.bind(this) }>Watching a Film</button>
        <button onClick={ this.handleParty.bind(this) }>Party</button>
      </div>
    )
  }
}
