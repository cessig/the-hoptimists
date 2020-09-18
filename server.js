/* Exterenal Modules */
const express = require("express");
const app = express();

/* Internal Modules */

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

// Brewery Routes

/* Server Listener */

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
