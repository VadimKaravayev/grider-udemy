const express = require("express");
const productsRepo = require("./../repositories/products");
const productIndexTempate = require("./../views/products/index");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productIndexTempate({ products }));
});

module.exports = router;
