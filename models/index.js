const mongoose = require("mongoose");
// connection string
const connectionString = "mongodb://localhost:27017/the-hoptimists";

//
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("Mongodb connected...");
  })
  .catch(function (error) {
    console.log("Mongodb connection error", error);
  });

mongoose.connection.on("disconnect", function (event) {
  console.log("Mongodb disconnected", event);
});

module.exports = {
  Beer: require("./Beer"),
  Brewery: require("./Brewery"),
  User: require("./User"),
  Profile: require("./Profile"),
};
