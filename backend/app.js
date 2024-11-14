import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import contactsRouter from "./src/routes/contact.routes.js";

const app = express();

// Load environment variables
dotenv.config({
  path: "./.env",
});

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/contacts", contactsRouter);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
