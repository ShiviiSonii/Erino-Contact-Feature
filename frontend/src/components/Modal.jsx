import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useCreateContact } from "../hooks/useCreateContact";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const { createContact, isLoading, error, success } = useCreateContact(); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const contactData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      company: formData.get("company"),
      job_title: formData.get("job_title"),
    };

    await createContact(contactData);
  };

  React.useEffect(() => {
    if (success) {
      handleClose();
    }
  }, [success]); 

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Add User
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone_number"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Company"
              name="company"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Job Title"
              name="job_title"
              variant="outlined"
              margin="normal"
              required
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </Box>
            {error && <Typography color="error">Error: {error}</Typography>}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
