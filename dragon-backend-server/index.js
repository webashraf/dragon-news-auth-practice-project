const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
const categories = require("./categoriesData/categories.json");
const news = require("./newsData/news.json");

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello world I'm backend sever");
});


app.get("/categories", (req, res) => {
  res.send(categories);
});


app.get("/news", (req, res)=>{
  res.send(news)
})

app.get("/news/:id", (req, res)=>{
  const id = req.params.id;
  const idNews = news.find(nw => nw._id === id);
  res.send(idNews);
})



app.listen(port, () => {
  console.log("Dragon server is running" + port);
});
