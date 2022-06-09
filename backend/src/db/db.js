const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1/PcCleaner",
  () => console.log("Database connected!"),
  (e) => console.log(e.message)
);

module.exports = mongoose;