import React from 'react'

import netbeast from 'netbeast'

export default class Picker extends React.Component {

  handleMorning () {
    netbeast('lights').set({power: 0})
    netbeast('switch').set({power: false})
    netbeast('music').set({status: 'stop'})
    netbeast('music').set({track: 'http://192.168.0.14:8000/i/scenes/media/morningsong.mp3', volume: 10})

    var j = 0
    // var timerMusic = setInterval(function () {
    //   if (j >= 0 && j <= 10) {
    //     netbeast('music').set({volume: 30 + j * 5})
    //     j++
    //   } else clearInterval(timerMusic)
    // }, 1000)

    setTimeout(function () {
      var i = 0
      var timerLights = setInterval(function () {
        if (i >= 0 && i <= 25) {
          netbeast('lights').set({power: true, color: {r: 10 * i, g: 10 * i, b: 10 * i}})
          i++
        } else clearInterval(timerLights)
      }, 400)
      netbeast('switch').set({power: true})
      .then(function (data) {
        console.log(data)
      }).catch(function (err) {
        console.log(err)
      })
    }, 8000)

    setTimeout(function () {
      console.log('chromecasting')
      netbeast('video').set({track: 'http://192.168.0.14:8000/i/scenes/media/forecast.mp4', volume: 1})
    }, 15000)
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
