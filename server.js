const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://user1:password1@ds035740.mlab.com:35740/heroku_tx7vd15q", 
  { 
    useNewUrlParser: true 
  }
  );

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});