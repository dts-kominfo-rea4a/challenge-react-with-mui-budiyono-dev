// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, IconButton, TextField, Typography } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState } from "react";
const contactObject = {
  "name": "",
  "phone": "",
  "email": "",
  "photo": ""
}
const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [contact, setContact] = useState(contactObject);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    props.addContact(contact);
    setContact(contactObject);
  }
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }
  const resetContactForm = () => {
    if(window.confirm("Want to cancle")) {
      setContact(contactObject);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} name="contact-form" id="contact-form" style={{ backgroundColor: 'white', padding: '12px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            Add New
          </Typography>
          <IconButton aria-label="delete" onClick={resetContactForm}>
            <CancelOutlinedIcon color="error" />
          </IconButton>
        </div>
        <TextField id="outlined-search" name="name" label="Name" type="text" onChange={handleChange} value={contact.name} />
        <TextField id="outlined-search" name="phone" label="Phone" type="tel" onChange={handleChange} value={contact.phone} />
        <TextField id="outlined-search" name="email" label="Email" type="email" onChange={handleChange} value={contact.email} />
        <TextField id="outlined-search" name="photo" label="Photo URL" type="url" onChange={handleChange} value={contact.photo} />
        <Button variant="contained" type="submit">Save</Button>
      </form>
    </>
  );
}

export default ContactForm;