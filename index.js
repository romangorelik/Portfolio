const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
  res.send('Server working')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/')
)})

app.listen(4000, () => {console.log('Listening on port 4000')})

