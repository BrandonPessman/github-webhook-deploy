const express = require('express')
const app = express()
const port = 8003

var execFile = require('child_process').execFile

app.post('/deploy/examplebash', (req, res) => {
  res.status(200)
  console.log('Github webhook deploy initiating...')
  execFile('./ExampleBash.sh', function (error, stdout, stderr) {
    console.log('Github webhook deploy complete!')
  })
})

app.listen(port, () => {
  console.log('Autodeploy is up and running on port: ' + port)
})
