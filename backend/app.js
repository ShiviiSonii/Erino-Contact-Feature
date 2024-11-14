import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";

const app = express();
dotenv.config({
  path: "./.env",
});

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Erino Contact Feature");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
