import { Box, List } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import initcontacts from './data/contacts.json';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacs] = useState(initcontacts);
  const addContact = (contact) => { setContacs([...contacts, contact]) }
  return (
    <Box className='container'>
      <Box className='header'>
        <Box sx={{
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}>
          <Header></Header>
        </Box>
      </Box>
      <Box className='content'>
        <Box className='contacts'>
          <List>
            {contacts.map((contact, i) => <Contact data={contact} key={i}></Contact>)}
          </List>
        </Box>
        <Box className='contact-box'>
          <ContactForm addContact={addContact}></ContactForm>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
