const express = require('express');
const { dirname } = require('path');
const path = require('path');
const exphbs  = require('express-handlebars');
const port = 3000;
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, './static')))
app.use('/', require(path.join(__dirname, './routes/blog.js')))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})