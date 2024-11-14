import { Router } from "express";
import { addContact } from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", addContact);

router.get("/", (req, res) => {
  console.log("Contact fetched");
});

router.patch("/:id", (req, res) => {
  console.log("Modified contact");
});

router.delete("/:id", (req, res) => {
  console.log("Delete contact");
});

export default router;
