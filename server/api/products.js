const router = require("express").Router();
const {
  models: { User, Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  const products = await Product.findAll();
  res.send(products);
});

module.exports = router;
