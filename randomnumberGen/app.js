const express = require('express')
const app = express()
const port = 80

app.use('/', express.static('public'));

var number = 1;

app.get('/', (req, res) => {
  res.send({"update": number})
});

var interval = setInterval(function(){
    number++;
}, 1000);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})