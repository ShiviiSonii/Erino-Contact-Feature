import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log("Welcome to Erino Contact Feature");
});

const port = process.env.PORT | 8000;

app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
