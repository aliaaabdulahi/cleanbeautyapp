const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const axios = require("axios");
module.exports = router;

router.get("/products", async (req, res, next) => {});
