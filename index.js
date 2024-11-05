import express from "express";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello from jenkins webhook" });
});

app.listen(5000,console.log("listening"))