const mongoose = require("mongoose");
require('dotenv').config();

module.exports = {
  //creating  database
  connect: () => {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    // Establishing database connection
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Connected to database Successfully");
    });
    connection.on("error", (error) => {
      console.log("Error connecting to database" + error);
    });
  },
};
