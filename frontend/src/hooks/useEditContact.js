import { useState } from "react";

export function useEditContact() {
  const [status, setStatus] = useState(null);

  const editContact = async (contactId, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:8000/contacts/${contactId}`,
        {
          method: "PUT", // HTTP method for updating
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send the updated data
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message) {
        setStatus("Edited successfully");
      } else {
        setStatus("Failed to edit");
      }
    } catch (error) {
      console.error("Error editing contact:", error);
      setStatus("Error occurred while editing");
    }
  };

  return { status, editContact };
}
