const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const db = require("../models");

// base path /

// register form

router.get("/register", (req, res) => {
  res.render("auth/register");
});

// register post
router.post("/register", async function (req, res) {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (foundUser) {
      return res.send({ message: "Account is already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    await db.User.create(req.body);
    res.redirect("/login");
  } catch (error) {
    res.send({ message: "Error inside the server", err: error });
  }
});
