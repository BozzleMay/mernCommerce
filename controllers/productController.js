const Product = require("../models/Product");

module.exports.products_get = async (req, res) => {
    try {
      let products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
        res.status(500).json(err);
    }
  }
  module.exports.products_post = async (req, res, next) => {
     const { name, image, description, price, countInStock} = req.body;
console.log(req.body)
  try {
    
     const product = await Product.create({ name, image, description, price, countInStock });
     res.status(201).json(product);
  }
  catch(err) {
    console.log(err);
    res.status(400).send('error, product not created');
  }
  }
  module.exports.products_delete = async (req, res, next) => {
   

 try {
   
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
 }
 catch(err) {
   console.log(err);
   res.status(400).send('error, product not deleted');
 }
 }
  