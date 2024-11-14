import { Router } from "express";
import { addContact, allContacts } from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", addContact);

router.get("/", allContacts);

router.patch("/:id", (req, res) => {
  console.log("Modified contact");
});

router.delete("/:id", (req, res) => {
  console.log("Delete contact");
});

export default router;
