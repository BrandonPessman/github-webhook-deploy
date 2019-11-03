const express = require('express')
const app = express()
const port = 8001

// HTTPS Setup
const fs = require('fs')
const https = require('https')

app.post('/deploy', (req, res) => {
  console.log('RECIEVED DATA FROM GITHUB')

  const exec = require('child_process').exec
  exec('sh ./personalWebsiteDeploy.sh', (error, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
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
