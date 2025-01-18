const express = require('express')
const next = require('next')
require('dotenv').config()

const PORT = process.env.PORT

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})
const handle = app.getRequestHandler()

const start = async () => {
  await app.prepare()

  const server = express()

  server.get('/api/data', (req, res) => {
    res.json({message: 'Все работает'})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

 

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!!!`)
  })
}

start()

