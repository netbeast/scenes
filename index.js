#!/usr/bin/env node

var http = require('http')

var express = require('express')
var cmd = require('commander')
var netbeast = require('netbeast')

cmd
.version('0.1.42')
.option('-p, --port <n>', 'Port to start the HTTP server', parseInt)
.parse(process.argv)

var app = express()

app.use(express.static('public'))

app.use('/media', express.static('media'))

var server = http.createServer(app)
server.listen(cmd.port || 4000, function () {
  console.log('http server started on %s:%s',
  server.address().address,
  server.address().port)
})

var light = true

netbeast('luminosity').on(function (err, message) {
  if (message.luminosity < 0.2 && light === true) {
    light = false
    netbeast().error('Your plants needs more Light', 'HELP!')
    netbeast('lights').set({power: 1, color: { r: 255, g: 252, b: 252 }})
  } else if (message.luminosity >= 0.2 && light === false) {
    light = true
    netbeast().success('Much better', 'Thanks')
    netbeast('lights').set({power: 1, color: { r: 255, g: 255, b: 255 }})
  }
})
