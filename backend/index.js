const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./src/routes/user.route");
const foodRouter = require("./src/routes/food.route");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// app.use("/programming-languages", programmingLanguagesRouter);
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
