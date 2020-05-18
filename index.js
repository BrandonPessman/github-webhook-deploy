const express = require('express')
const app = express()
const port = 8003

var execFile = require('child_process').execFile

app.post('/deploy', (req, res) => {
  console.log('RECIEVED DATA FROM GITHUB')
  execFile('./fableverseFrontendDeploy.sh', function (error, stdout, stderr) {
    console.log('exec complete', error, stdout, stderr)
  })

  res.status(200)
})

app.listen(port, () => {
  console.log('Autodeploy is up and running on port: ' + port)
})
