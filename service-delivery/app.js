const express = require('express')
const axios = require('axios')

const app = express()

app.post('/track', function (req, res) {
  const { code } = req.query

  const config = {
    method: 'post',
    url: 'https://correios.contrateumdev.com.br/api/rastreio',
    headers: {},
    data: {
      "code": code,
      "type": "LS"
    }
  };

  axios(config).then((response) => {
    res.status(200)
    res.send(response)
  }).catch((err) => {
    res.status(500)
    res.send('Deu ruim!!')
    console.log
  })
})

app.listen(3002, function () {
  console.log('Microserviço DELIVERY: porta 3002')
})