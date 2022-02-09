const { validationResult } = require("express-validator");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
    });
};




exports.addProduct = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json(errors);
  }

  if (!req.file) {
    res.status(422).json({ msg: "Please enter a valid file" });
  }

  const myProduct = new Product({
    title: req.body.title,
    image: req.file.path,
    price: req.body.price,
  });

  myProduct
    .save()
    .then((success) => {
      res.status(200).json({ msg: "Product saved successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUpdateProduct = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json(errors);
  }

  const id = req.params.productId;

  Product.findAll({ where: { id: id } })
    .then((products) => {
      const myProduct = products[0];
      myProduct.title = req.body.title;
      myProduct.price = req.body.price;

      if(!req.file){
        myProduct.image = req.body.image;
      }else{
        myProduct.image = req.file.path;
      }



      myProduct.save().then((success) => {
        res.status(200).json({ msg: "Product update successfully" });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.productId;

  Product.findAll({ where: { id: id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;

  Product.findAll({ where: { id: productId } })
    .then((products) => {
      products[0].destroy().then((success) => {
        res.status(200).json({ msg: "Product delete successfull" });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
