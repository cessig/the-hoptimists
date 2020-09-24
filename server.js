/* External Modules */
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

/* Internal Modules */
const db = require("./models");
const controllers = require("./controllers");

/* Instanced Modules */

/* Configuration */
/* All Use of DOTENV */

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");

/* middleware */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "hops",
    store: new MongoStore({
      url:
        process.env.MONGODB_URI || "mongodb://localhost:27017/the-hoptimists",
    }),
    cookie: {
      maxAge: 1000 * 60 * 24 * 7 * 2,
    },
  })
);

const authRequried = function (req, res, next) {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }
  next();
};

/* Routes */

// Views routes
app.get("/", function (req, res) {
  // render
  res.render("index", { user: req.session.currentUser });
});

// Auth Routes
app.use("/", controllers.auth);

// Beer Routes
app.use("/beers", authRequried, controllers.beer);

// Brewery Routes
app.use("/breweries", authRequried, controllers.brewery);

/* Server Listener */

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
