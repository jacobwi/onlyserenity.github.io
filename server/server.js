import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";

import router from "./routes/user";

const app = express();

// Port variable
const PORT = 5000;

// Database connection
mongoose
  .connect(
    "",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connection to MongoDB has been successfully established");
  })
  .catch(error => {
    console.log(`Database connection failed: ${error.errmsg}`);
  });

// Morgan logger
app.use(morgan("tiny"));

// Connect body parser to express app
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Routes connection
app.use("/user", router);

// Initial GET method
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Expressjs has started successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Started listening to port ${PORT}`);
});
