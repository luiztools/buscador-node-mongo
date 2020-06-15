var express = require('express');
var router = express.Router();
const simplify = require('../../simplify');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.query.q)
    return res.render('index', { title: 'Motor de Busca', movies: [], query: '' });
  else {
    const query = simplify(req.query.q);
    console.log(query);
    require('../../db')()
        .then(db => db.collection("movies2").find({tags: {$all: query }}))
        .then(cursor => cursor.toArray())
        .then(movies => res.render('index', {title: 'Motor de Busca', movies, query: req.query.q}));
  }
});

module.exports = router;
