require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/* VARIABLES */
const port = process.env.PORT || 4000;
// const uri = process.env.MONGO_URI;

/* EXPRESS APP */
const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

/* TEST API */
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to our todo application" });
});

/* CONNECT TO DATABASE */
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`our app is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
