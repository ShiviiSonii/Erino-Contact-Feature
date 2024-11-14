import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  console.log("Added new contact");
});

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
