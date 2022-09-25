// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ width: '100%', height: '20%', borderBottom: '1px solid grey' }} className="hover-contact">
        <ListItemAvatar sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Avatar sx={{ height: '60px', width: '60px', margin: '20px' }} alt={data.name} src={data.photo} />
        </ListItemAvatar>
        <ListItemText sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', heigh: '100%' }}
          primary={data.name}
          secondary={
            <React.Fragment>
              <Box sx={{ display: 'flex', flexDirection: 'column' }} component="span">
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {data.phone}
                </Typography>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {data.email}
                </Typography>
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

export default Contact;
