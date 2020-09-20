const express = require("express");
const router = express.Router();

const db = require("../models");
// base route is /beers

// index
router.get("/", function (req, res) {
  db.Beer.find({}, function (error, foundBeers) {
    if (error) return res.send(error);

    const context = {
      beers: foundBeers,
    };
    res.render("beer/index", context);
  });
});

// new
router.get("/new", function (req, res) {
  db.Beer.find({}, function (error, foundBeers) {
    if (error) return res.send(error);

    const context = {
      beers: foundBeers,
    };

    res.render("beer/new", context);
  });
});

// create

// show

// edit

// update

// delete

module.exports = router;
