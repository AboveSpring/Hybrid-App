const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/2018-04', (req, res) => {
  res.send({
    "id": "2018-04",
    "amount": "2546.12",
    "dueDate": "2018-05-15"
  })
})

app.get('/2018-05', (req, res) => {
  res.send({
    "id": "2018-05",
    "amount": "2966.50",
    "dueDate": "2018-06-15"
  })
})

app.get('/2018-06', (req, res) => {
  res.send({
    "id": "2018-06",
    "amount": "1839.38",
    "dueDate": "2018-07-15"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})