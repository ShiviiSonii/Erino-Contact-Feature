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

export const allContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});

    if (contacts.length === 0) {
      return res.status(404).send("No contacts found");
    }

    return res
      .status(200)
      .json({ contacts, message: "Contacts retrieved successfully!" });
  } catch (error) {
    return res.status(500).send("Error retrieving contacts");
  }
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone_number, company, job_title } =
    req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { first_name, last_name, email, phone_number, company, job_title },
      { new: true }
    );

    if (!contact) {
      return res.status(404).send("Contact not found");
    }

    return res
      .status(200)
      .json({ contact, message: "Contact updated successfully!" });
  } catch (error) {
    return res.status(500).send("Error while updating contact");
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).json({ message: "Contact deleted successfully!" });
  } catch (error) {
    return res.status(500).send("Error while deleting contact");
  }
};
