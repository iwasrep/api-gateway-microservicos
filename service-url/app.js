const express = require('express')
const Kurzer = require('kurzer-url')

const app = express()

const kurzer = new Kurzer()

app.get('/short', function (req, res) {
  const { url } = req.query;

  (async () => {
    try {
      const { shorturl } = await kurzer.short(url);
      res.status(200)
      res.send(`<h1>Link: <a href="${shorturl}" target="_blank">${shorturl}</a></h1>`)

    } catch (error) {
      console.log(error)
    }
  })();
})

app.listen(3001, function () {
  console.log('Microserviço SHORT_URL: porta 3001')
})