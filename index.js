const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Example of a MiddleWare
/*
const MiddleWare = (req, res, next) => {
  console.log(req)
};
app.use(MiddleWare)
*/

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './index.html'))
  // We can also parse JSON like this
  // res.json({"name": "ExpressJs"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})