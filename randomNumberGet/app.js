const express = require('express')
const axios = require("axios")
const app = express()
const port = 90

app.use('/', express.static('public'));
var data = null;
setInterval(function(){
    axios.get("http://localhost:80/")
    .then((response)=>{
        data = "Real-Time Update "+response.data.update;
        console.log(data);
    })
    .catch((err)=>{
        data="error";
        console.log(err);
    });

},1000);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})