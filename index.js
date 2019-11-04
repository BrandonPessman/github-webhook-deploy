const express = require('express')
const app = express()
const port = 8001

// HTTPS Setup
const fs = require('fs')
const https = require('https')
var execFile = require('child_process').execFile

app.post('/deploy', (req, res) => {
  console.log('RECIEVED DATA FROM GITHUB')
  execFile('./personalWebsiteDeploy.sh', function (error, stdout, stderr) {
    // Log success in some manner
    console.log('exec complete', error, stdout, stderr)
  })

  res.status(200)
})

https
  .createServer(
    {
      key: fs.readFileSync(
        '/etc/letsencrypt/live/brandonpessman.com/privkey.pem'
      ),
      cert: fs.readFileSync(
        '/etc/letsencrypt/live/brandonpessman.com/cert.pem'
      )
    },
    app
  )
  .listen(port, () => {
    console.log('Autodeploy is up and running on port: ' + port)
  })
