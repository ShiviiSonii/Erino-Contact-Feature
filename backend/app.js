import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import contactsRouter from "./src/routes/contact.routes.js";

const app = express();

dotenv.config({
  path: "./.env",
});

connectDB();

app.use(express.json());

app.use("/contacts", contactsRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
