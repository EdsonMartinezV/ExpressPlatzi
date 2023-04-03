const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { boomErrorHandler, logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
const whitelist = [
  'http://localhost:8080',
  'http://myapp.com'
]
const corsOptions = {
  origin: (origin, callback) => {
    const exists = whitelist.some((domain) => domain === origin)
    if (exists || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send("Hello World! from Edson's Server")
})

app.get('/new-route', (req, res) => {
  res.send('New Route')
})

routerApi(app)
app.use(logErrors) /* middlewares after router */
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
