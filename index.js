const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

require('dotenv').config()

//New imports
const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

app.use(cors())

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  })
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`)
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected')
  })
})

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
