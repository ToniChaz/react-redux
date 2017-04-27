'use strict'

const express = require('express')
const webpack = require('webpack')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())

let bodyParser = require('body-parser')
app.use(bodyParser.json())

let beers = []
app.get('/api/beers', (req, res) => {
  setTimeout(() => res.json({beers}), 2000)
})
app.post('/api/beers', (req, res) => {
  const beer = {id: 'beer_' + beers.length + 1, name: req.body.name, graduation: req.body.graduation}
  beers.push(beer)
  setTimeout(() => res.json(beer), 2000)
})
app.delete('/api/beers/:beerId', (req, res) => {
  beers = beers.filter(beer => beer.id !== req.params.beerId)
  setTimeout(() => res.sendStatus(204), 2000)
})

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`server initialized at http://localhost:${PORT}`)
})
