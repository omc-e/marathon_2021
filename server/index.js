const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());

const postsRoute = require("./routes/students");
app.use("/students", postsRoute);
const studentIndexRoute = require("./routes/student_index");
app.use("/students/:id/index", studentIndexRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

app.listen(3000);
