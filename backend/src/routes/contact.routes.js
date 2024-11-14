import { Router } from "express";
import {
  addContact,
  allContacts,
  deleteContact,
  updateContact,
} from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", addContact);

router.get("/", allContacts);

router.patch("/:id", updateContact);

router.delete("/:id", deleteContact);

export default router;
