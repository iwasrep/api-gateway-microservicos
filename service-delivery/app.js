const express = require('express')
const correios = require('correios')

const app = express()

app.get('/track', function (req, res) {
  const { code } = req.query

  correios.track(code).then((response) => {
    res.status(200)
    res.send(response)
  }).catch((err) => {
    res.status(500)
    res.send(error)
  })
})

app.listen(3003, function() {
  console.log('Microserviço DELIVERY: porta 3003')
})