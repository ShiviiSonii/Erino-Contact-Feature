import { useState } from "react";

export function useDeleteContact() {
  const [status, setStatus] = useState(null);

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/contacts/${contactId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message) {
        setStatus("Deleted successfully");
      } else {
        setStatus("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      setStatus("Error occurred while deleting");
    }
  };

  return { status, deleteContact };
}
