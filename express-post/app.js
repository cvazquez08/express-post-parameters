const express = require('express')
const app     = express()
const hbs     = require('hbs') 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.get('/', (req, res, next) => {
  res.render('index');
})

// Route parameters
// username & age are variables on the route and will return an object
app.get('/users/:username/:age', (req, res, next) => {
  res.send(req.params);
})
// http://localhost:3000/users/ironhack

// :username & :books are the variable ==== users & books are part of the URL
app.get('/users/:username/books/:bookId', (req, res, next) => {
  res.send(req.params)
})
// http://localhost:3000/users/ironhack/books/8989

// **********************************

// query paramaters
app.get('/search', (req, res, next) => {
  res.send(req.query)
})
// http://localhost:3000/search?name=chris&age=5



app.listen(3000, () => console.log('App listening on port 3000!'))