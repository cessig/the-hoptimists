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

const PORT = 4000;
app.set("view engine", "ejs");

/* middleware */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: null,
    store: new MongoStore({
      url: "mongodb://localhost:27017/the-hoptimists",
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
  res.render("index");
});

// Auth Routes
app.use("/", authRequired, controllers.auth);

// Beer Routes
app.use("/beers", controllers.beer);

// Brewery Routes
app.use("/breweries", controllers.brewery);

/* Server Listener */

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
