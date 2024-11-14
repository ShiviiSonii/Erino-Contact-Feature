import { Router } from "express";
import {
  addContact,
  allContacts,
  updateContact,
} from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", addContact);

router.get("/", allContacts);

router.patch("/:id", updateContact);

router.delete("/:id", (req, res) => {
  console.log("Delete contact");
});

export default router;
