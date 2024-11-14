import { Contact } from "../models/contact.model.js";

export const addContact = async (req, res) => {
  const { first_name, last_name, email, phone_number, company, job_title } =
    req.body;

  // Check for required fields
  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone_number ||
    !company ||
    !job_title
  ) {
    return res.status(400).send("All fields are required!");
  }

  // Check if the contact already exists
  const existedContact = await Contact.findOne({
    $or: [{ email }, { phone_number }],
  });

  if (existedContact) {
    return res.status(409).send("Contact already exists!");
  }

  // Create a new contact
  const contact = await Contact.create({
    first_name,
    last_name,
    email,
    phone_number,
    company,
    job_title,
  });

  if (!contact) {
    return res
      .status(500)
      .send("Something went wrong while adding the contact");
  }

  return res
    .status(201)
    .json({ contact, message: "Contact added successfully!" });
};
