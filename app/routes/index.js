var express = require('express');
var router = express.Router();

function simplify(text){
  const regex = /[\s,\.;:\(\)\-'\+]/;
  return text.toUpperCase().split(regex);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.query.q)
    return res.render('index', { title: 'Motor de Busca', movies: [], query: '' });
  else {
    const query = simplify(req.query.q);
    const mongoClient = require("mongodb").MongoClient;
    mongoClient.connect("mongodb://localhost:27017")
               .then(conn => conn.db("netflix"))
               .then(db => db.collection("movies2").find({tags: {$all: query }}))
               .then(cursor => cursor.toArray())
               .then(movies => {
                 return res.render('index', {title: 'Motor de Busca', movies, query: req.query.q});
               })
  }
});

module.exports = router;
