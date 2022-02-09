const express = require("express");
const { body } = require("express-validator");

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/products", productController.getProducts);
router.post(
  "/products/add",
  [
    body("title", "Title can not be empty").notEmpty(),
    body("price", "Please enter a valid price").isNumeric().notEmpty(),
  ],
  productController.addProduct
);
router.put(
  "/products/update/:productId",
  [
    body("title", "Title can not be empty").notEmpty(),
    body("price", "Please enter a valid price").isNumeric().notEmpty(),
  ],
  productController.postUpdateProduct
);

router.get('/products/update/:productId',productController.getProductById);

router.get('/products/get/:productId',productController.getProductById);

router.delete("/products/delete/:productId",productController.deleteProduct);

module.exports = router;
