const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello World! from Edson's Server")
})

app.get('/new-route', (req, res) => {
  res.send('New Route')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
