const mongoose = require("mongoose");

exports.Database = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error in the Database connection", err));
};
