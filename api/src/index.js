const express = require('express')
const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST

app.get('/test', (req, res) => {
  res.send('Our api server is working correctly!')
})

app.listen(PORT, () => {
  console.log(`Started api service on port: ${PORT}`)
  console.log(`On host: ${HOST}`)
})

connectDb.on('error', console.log).on('disconnect')
