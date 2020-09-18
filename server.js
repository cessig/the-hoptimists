/* Exterenal Modules */
const express = require("express");
const app = express();
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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
/* Routes */

// Views routes
app.get("/", function (req, res) {
  // render
  res.render("index");
});

// Auth Routes

// Beer Routes
app.use("/beers", controllers.beer);

// Brewery Routes
app.use("/breweries", controllers.brewery);

/* Server Listener */

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
