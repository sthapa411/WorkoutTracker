const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useFindAndModify: false
})

app.use(require("./routes/apiRoute.js"));
app.use(require("./routes/htmlRoute.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});