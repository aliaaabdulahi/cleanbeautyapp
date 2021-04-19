const router = require("express").Router();
const {
  models: { User, Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  const products = await Product.findAll();
  res.send(products);
});

router.get("/:id", async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);
  res.send(product);
});

module.exports = router;
