const express = require('express');
const app = express();

app.use(express.static('client/public'))

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './client/views'})
})

app.get('/resume', function(request, response){
  response.sendFile('Resume.html', {root: './client/views'})
})

app.listen(1337, () => console.log("this is working"));
