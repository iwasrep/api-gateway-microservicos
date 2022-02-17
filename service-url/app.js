const express = require('express')
const kurzer = require('kurzer-url')

const app = express()

app.get('/short', function(req, res){
  const { url } = req.query;

  kurzer(url).then((response) => {
    res.status(200)
    res.send(response)
  }).catch((error) => {
    res.status(500)
    res.send(error)
  })
})

app.listen(3002, function(){
  console.log('Microsserviço SHORT_URL: porta 3002')
})