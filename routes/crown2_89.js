var express = require('express');
var router = express.Router();


const categories = require('../data/categories');

const crown2Controller_89 = require('../controllers/crown2Controller_89');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_89', { 
    title: '408411089 王俞君 (static)' ,
    data: categories
  });
});


router.get('/homepage',crown2Controller_89.getHomepage);


router.get('/shop_89/:product', crown2Controller_89.getProductsByCategory );
module.exports = router;
