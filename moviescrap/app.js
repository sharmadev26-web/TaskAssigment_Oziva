const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   axios.get("https://www.imdb.com/chart/boxoffice/")
        .then((res)=>{
            console.log(res);
            res.send(res)
        })
        .catch((err)=>{
            res.send(err)
        })
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})