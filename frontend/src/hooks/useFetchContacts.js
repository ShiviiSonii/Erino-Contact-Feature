import { useState, useEffect } from "react";

export function useFetchContacts() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/contacts");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        if (Array.isArray(data.contacts)) {
          const mappedData = data.contacts.map((item) => ({
            id: item._id,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            phone_number: item.phone_number,
            company: item.company,
            job_title: item.job_title,
          }));
          console.log(mappedData);
          setRows(mappedData);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [rows]);

  return rows;
}
