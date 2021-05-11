const Clothing_89 = require('../models/clothingModel_89');
const Category_89 = require('../models/categoryModel_89');
const { data } = require('jquery');

exports.getHomepage = async (req, res) => {
  let data;
  try {
    const [rows] = await Category_89.fetchAll();
    data = rows;
     res.json(rows);
    res.render('crown2_89', {
      title: '408411089 王俞君 (async/await)',
      data,
    });
  } catch (err) {
    console.log('error', err);
  }
};

  
  
exports.getProductsByCategory = async(req, res) => {
  console.log('req.params', req.params.product);

  let data = {};
  let data2;
  try {

    data.id = 0;
    if (req.params.product === 'hats') data.id = 1;
    else if (req.params.product === 'jackets') data.id = 2;
    else if (req.params.product === 'sneakers') data.id = 3;
    else if (req.params.product === 'womens') data.id = 4;
    else data.id = 5;

    const [cloth] = await Clothing_89.fetchAll(data.id);
    data2 = cloth;

    res.render(req.params.product, {
      title: '408411089 王俞君 (async/await)',
      data2,
    });
  } catch (err) {
    console.log('error', err);
  }
  
  /* 
  data.cid = 0;
  if (req.params.product === 'hats') data.cid = 1;
  else if (req.params.product === 'jackets') data.cid = 2;

  
  */
};

