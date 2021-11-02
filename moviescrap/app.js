const express = require('express')
const request = require('request');
const cheerio = require("cheerio");
const app = express()

const port = 70

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', async (req, res) => {
  let movieListNumber = req.query.movieListNumber;
  if(!movieListNumber){
    movieListNumber = 250;
  }
  console.log(movieListNumber);
  const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_"+movieListNumber;

  request(url , (error , response , body) => {
    if (error) console.log(error) // if something gets wrong
    else {
        let movies = [];
        const $ = cheerio.load(body)

        $("tbody.lister-list > tr > td.titleColumn").each((index, element) => {
          
          if(index<=movieListNumber-1){
            movies.push({name: $(element).find("a").text(), identity: $(element).find("a").attr("href")});
          }
        });
        res.send(movies);
    }
  }) 
 })
 app.get('/getCast', async (req, res) => {
  const castURL = req.query.castURL;
  const url = "https://www.imdb.com"+castURL+"fullcredits?ref_=ttfc_ql_1";
  console.log(url);

  request(url , (error , response , body) => {
    if (error) console.log(error) // if something gets wrong
    else {
        let cast = [];
        //console.log(body);
        const $ = cheerio.load(body);
        $("table.cast_list > tbody > tr > td:nth-child(2)").each((index, element) => {
          cast.push($(element).find("a").text().trim());
        });
        console.log($("table.cast_list > tbody > tr > td:nth-child(2)"));
        res.send(cast);
    }
  }) 
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})