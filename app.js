// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});

// index.js
app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.render('greetings', { name });
})

app.get('/hello-gif', (req, res) => {
  const gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', { gifUrl })
})

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
