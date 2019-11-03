const express = require('express')
const app = express()
const port = 8001

app.post('/deploy', (req, res) => {
  console.log('RECIEVED DATA FROM GITHUB')
  res.status(200)
})

app.listen(port, () => {
  console.log('Autodeploy Server is up and running on port: ' + port)
})
