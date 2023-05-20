const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = 3000;

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.use(morgan());

app.get("/", (req, res) => {
  return res.json({ msg: "Welcome to Nike App APIS" });
});

app.use("/products", require("./router/productRouter"));
app.use("/orders", require("./router/orderRouter"));

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
