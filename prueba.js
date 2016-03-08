process.env.NETBEAST = 'localhost:8000'
var netbeast = require('netbeast')

netbeast('music').set({volume: 15, track: __dirname + '/media/morningsong.mp3'})
.then(function (data) {
  console.log(data)
}).catch(function (err) {
  console.log('ERR')
  console.log(err)
})
// 
// var i = 0
// var timer = setInterval(function () {
//   if (i >= 0 && i <= 25) {
//     netbeast('lights').set({color: {r: 10 * i, g: 10 * i, b: 10 * i}})
//     i++
//   } else clearInterval(timer)
// }, 400)
