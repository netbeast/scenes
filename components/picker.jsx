import React from 'react'
process.env.NETBEAST = '192.168.0.14:8000'
import netbeast from 'netbeast'

var timerMusic
var timerLights
var timer1
var timer2
var timer3
var timer4
var timer5

export default class Picker extends React.Component {

  handleMorning () {
    this.closeTimers()
    netbeast('music').set({status: 'stop'})
    netbeast('lights').set({power: 0})
    netbeast('switch').set({power: false})
    netbeast('video').set({status: 'stop'})
    netbeast('music').set({track: 'http://192.168.0.14:8000/i/scenes/media/morningsong.mp3', volume: 10})

    var j = 0
    timerMusic = setInterval(function () {
      if (j >= 0 && j <= 10) {
        netbeast('music').set({volume: 10 + j * 1})
        j++
      } else clearInterval(timerMusic)
    }, 1000)

    timer1 = setTimeout(function () {
      var i = 0
      timerLights = setInterval(function () {
        if (i >= 0 && i <= 25) {
          netbeast('lights').set({power: true, color: {r: 10 * i, g: 10 * i, b: 10 * i}})
          i++
        } else clearInterval(timerLights)
      }, 400)
      netbeast('switch').set({power: true})
    }, 8000)

    timer2 = setTimeout(function () {
      netbeast('video').set({track: 'http://192.168.0.14:8000/i/scenes/media/forecast.mp4', volume: 100})
    }, 13000)

    timer3 = setTimeout(function () {
      netbeast().info('Your plant needs water ', 'Flower Power')
      netbeast('lights').set({color: { r: 252, g: 252, b: 255 }})
      timer4 = setTimeout(function () { netbeast('lights').set({color: { r: 255, g: 255, b: 255 }}) }, 2000)
    }, 25000)

    timer5 = setTimeout(function () {
      netbeast('lights').set({power: 0})
      netbeast('switch').set({power: false})
      netbeast('music').set({status: 'stop'})
      netbeast('video').set({status: 'stop'})
    }, 80000)
  }

  handleFilm () {
  }

  handleParty () {
  }

  closeTimers () {
    console.log(timerMusic)
    if (timerMusic) clearInterval(timerMusic)
    if (timerLights) clearInterval(timerLights)
    if (timer1) clearTimeout(timer1)
    if (timer2) clearTimeout(timer2)
    if (timer3) clearTimeout(timer3)
    if (timer4) clearTimeout(timer4)
    if (timer5) clearTimeout(timer5)
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
