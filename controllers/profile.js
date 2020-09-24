const express = require("express");
const router = express.Router();

const db = require("../models");

// base route is /profiles

// index

router.get("/", function (req, res) {
  db.Profile.find({}, function (error, foundProfiles) {
    if (error) return res.send(error);
    const context = {
      profiles: foundProfiles,
    };
    res.render("profile/index", context);
  });
});

// new
router.get("/new", function (req, res) {
  db.Profile.find({}, function (error, foundProfiles) {
    if (error) return res.send(error);
    const context = {
      profiles: foundProfiles,
    };
    res.render("profile/new", context);
  });
});
