const express = require('express')
const app = express()
const port = 8001

app.post('/deploy', (req, res) => {
  console.log('RECIEVED DATA FROM GITHUB')
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
