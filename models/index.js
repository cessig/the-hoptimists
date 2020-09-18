const mongoose = require("mongoose");
// connection string
const connectionString = "mongodb://localhost:27017/the-hoptimists";

//
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
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

module.exports = {};
